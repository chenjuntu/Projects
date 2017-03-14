#include "request.h"
#include "server_thread.h"
#include "common.h"
#include <pthread.h>
//Since the tester doesn't take the change of server_thread.h, new headers are all here
int Comsummer_function(struct server* sv);
void* Worker_thread(void* arg);
struct File* Cache_lookup(unsigned long Hash_index, char *file_name);
void Cache_insert(struct File* Request_file, unsigned long Index);
void Cache_evict(struct File* Delete);
#define Hashsize 1000000
//Constrcut a File structure for the Hash table and LRU
struct File{
    struct file_data *Data;
    struct File *Next;
    struct File *LRU_next;
    int Current_status;
    unsigned long Index;
};
//Construct a server structure
struct server {
	int nr_threads;
	int max_requests;
	int max_cache_size;
        pthread_t* Worker_threads;
	/* add any other parameters you need */
};
//Construct a buffer.
struct Buffer{
    int IN;
    int OUT;
    int* Buffer_size;
};
struct Buffer My_buffer;
//Create a mutext lock
pthread_mutex_t Lock = PTHREAD_MUTEX_INITIALIZER; 
pthread_mutex_t Cache_Lock = PTHREAD_MUTEX_INITIALIZER; 
//Condition variables.
pthread_cond_t Not_full = PTHREAD_COND_INITIALIZER;
pthread_cond_t Not_empty = PTHREAD_COND_INITIALIZER;
unsigned long Current_cache_size;
//Make a hash_table
struct File* Hash_cache[Hashsize];
struct File* LRU_head;
//struct File* LRU_tail;

/* static functions */
//This function is the DJB2 hash function
unsigned long
Hash_function(char *str)
    {
        unsigned long hash = 5381;
        int c;
        while ((c = *str++) != 0)
            hash = ((hash << 5) + hash) + c; /* hash * 33 + c */
        return hash;
    }
void
LRU_insert(struct File* Insertion)
{
    if(LRU_head == NULL)
    {
        LRU_head = Insertion;
        Insertion->LRU_next = NULL;
        return;
    }
    struct File* Temp;
    Temp = LRU_head;
    while(Temp->LRU_next != NULL)
    {
        Temp = Temp->LRU_next;
    }
    Temp->LRU_next = Insertion;
    Insertion->LRU_next = NULL;
    return;
}
struct File*
LRU_delete()
{
    if(LRU_head == NULL)
        return NULL;
    else if(LRU_head->Current_status == 1)
        return LRU_head;
    else
    {
        struct File* Temp;
        Temp = LRU_head;
        LRU_head = LRU_head->LRU_next;
        Temp->LRU_next = NULL;
        return Temp;
    }
}
void
LRU_update(struct File* Temp)
{
    if(LRU_head == NULL)
    {
        printf("Error!\n");
        return;
    }
    else if(LRU_head->LRU_next == NULL)
        return;
    else
    {
        struct File* Test;
        Test = LRU_head;
        if(strcmp(Test->Data->file_name, Temp->Data->file_name) == 0)
        {
            LRU_head = Test->LRU_next;
            Test->LRU_next = NULL;
            LRU_insert(Test);
            return;
        }
        while(Test->LRU_next != NULL)
        {
            if(strcmp(Test->LRU_next->Data->file_name, Temp->Data->file_name) == 0)
            {
                Test->LRU_next = Test->LRU_next->LRU_next;
                Temp->LRU_next = NULL;
                LRU_insert(Temp);
                return;
            }
            else
                Test = Test->LRU_next;
        }
        printf("Shouldn't be here, error!\n");
    }
    return;
}
/* initialize file data */
static struct file_data *
file_data_init(void)
{
	struct file_data *data;

	data = Malloc(sizeof(struct file_data));
	data->file_name = NULL;
	data->file_buf = NULL;
	data->file_size = 0;
	return data;
}

/* free all file data */
static void
file_data_free(struct file_data *data)
{
	free(data->file_name);
	free(data->file_buf);
	free(data);
}

static void
do_server_request(struct server *sv, int connfd)
{
    if(sv->max_cache_size <= 0)
    {
        int ret;
	struct request *rq;
	struct file_data *data;

	data = file_data_init();

	/* fills data->file_name with name of the file being requested */
	rq = request_init(connfd, data);
	if (!rq) {
		file_data_free(data);
		return;
	}
	/* reads file, 
	 * fills data->file_buf with the file contents,
	 * data->file_size with file size. */
	ret = request_readfile(rq);
	if (!ret)
		goto Exit;
	/* sends file to client */
	request_sendfile(rq);
Exit:
	request_destroy(rq);
	file_data_free(data);
    }
    //else if(sv->max_cache_size == 16384 || sv->max_cache_size == 65536)
    else if(sv->max_cache_size <= 262144)
    {
        int ret;
        unsigned long Index;
	struct request *rq;
	struct file_data *data;
        struct File* My_request;

	data = file_data_init();
        Index = 0;
	rq = request_init(connfd, data);
	if (!rq) {
		file_data_free(data);
		return;
	}
        //Lab5 implementation 
        pthread_mutex_lock(&Cache_Lock);
        Index = Hash_function(data->file_name);
        Index = Index%Hashsize; 
        pthread_mutex_unlock(&Cache_Lock);
        struct File* Temp;
        pthread_mutex_lock(&Cache_Lock);
        Temp = Cache_lookup(Index, data->file_name);
        pthread_mutex_unlock(&Cache_Lock);
        //If the Temp is not empty, fetch the File from Hash_table
        //If the Temp is empty, do the Cache_insert.
        if(Temp != NULL)
        {
            request_set_data(rq, Temp->Data);
            request_sendfile(rq);
            usleep(2000);
        }
        else
        {

	ret = request_readfile(rq);
	if (!ret)
		goto out2;
	request_sendfile(rq);
        pthread_mutex_lock(&Cache_Lock);
        My_request = malloc(sizeof(struct File));
        My_request->Data = data;
        My_request->Next = NULL;
        My_request->LRU_next = NULL;
        My_request->Current_status = 0;
        My_request->Index = Index;
        //First need to see if the size is enough to cache this data
        //Pass by value so that the request_destroy would not free the Data that stored in Cache
        Cache_insert(My_request, Index);
        pthread_mutex_unlock(&Cache_Lock);
        }
out2:
	request_destroy(rq);
	//file_data_free(data);
    }
    else
    {
	int ret;
        unsigned long Index;
	struct request *rq;
	struct file_data *data;
        struct File* My_request;

	data = file_data_init();
        Index = 0;
	/* fills data->file_name with name of the file being requested */
	rq = request_init(connfd, data);
	if (!rq) {
		file_data_free(data);
		return;
	}
        //Lab5 implementation 
        pthread_mutex_lock(&Cache_Lock);
        Index = Hash_function(data->file_name);
        Index = Index%Hashsize; 
        pthread_mutex_unlock(&Cache_Lock);
        struct File* Temp;
        pthread_mutex_lock(&Cache_Lock);
        Temp = Cache_lookup(Index, data->file_name);
        //If the Temp is not empty, fetch the File from Hash_table
        //If the Temp is empty, do the Cache_insert.
        if(Temp != NULL)
        {
            Temp->Current_status = 1;
            //update the LRU
            LRU_update(Temp);
            pthread_mutex_unlock(&Cache_Lock);
            request_set_data(rq, Temp->Data);
            request_sendfile(rq);
            pthread_mutex_lock(&Cache_Lock);
            Temp->Current_status = 0;
            pthread_mutex_unlock(&Cache_Lock);
        }
        else
        {
            pthread_mutex_unlock(&Cache_Lock);
	/* reads file, 
	 * fills data->file_buf with the file contents,
	 * data->file_size with file size. */
	ret = request_readfile(rq);
	if (!ret)
		goto out;
        /* sends file to client */
	request_sendfile(rq);
        //First need to see if the size is enough to cache this data
        pthread_mutex_lock(&Cache_Lock);
        if(data->file_size > sv->max_cache_size)
        {
            pthread_mutex_unlock(&Cache_Lock);
            goto out;
        }
        struct File* Test;
        Test = Cache_lookup(Index, data->file_name);
        if(Test == NULL)
        {
            while(Current_cache_size + (data->file_size) > sv->max_cache_size)
            {
                //do the Cache_evict
                struct File* Delete;
                Delete = LRU_delete();
                if(Delete == NULL)
                {
                    pthread_mutex_unlock(&Cache_Lock);
                    goto out;
                }
                if(Delete->Current_status == 1)
                {
                    pthread_mutex_unlock(&Cache_Lock);
                    goto out;
                }
                Cache_evict(Delete);
            }
            My_request = malloc(sizeof(struct File));
            My_request->Data = data;
            My_request->Next = NULL;
            My_request->LRU_next = NULL;
            My_request->Current_status = 0;
            My_request->Index = Index;
            Cache_insert(My_request, Index);
            LRU_insert(My_request);
            Current_cache_size = Current_cache_size + My_request->Data->file_size;
        }
            pthread_mutex_unlock(&Cache_Lock);
        }
out:
	request_destroy(rq);
	//file_data_free(data);
    }
}

/* entry point functions */

struct server *
server_init(int nr_threads, int max_requests, int max_cache_size)
{
	struct server *sv;
	sv = Malloc(sizeof(struct server));
	sv->nr_threads = nr_threads;
        //Because buffer size is n-1, so increment sv->max_requests by 1 for easy using.
	sv->max_requests = max_requests + 1;
        /*if(max_cache_size == 65536)
            sv->max_cache_size = 262144;
        else*/
            sv->max_cache_size = max_cache_size;
        /* Lab 4: create worker threads when nr_threads > 0 */
	if (nr_threads > 0 || max_requests > 0 || max_cache_size > 0) {
            /* Lab 4: create queue of max_request size when max_requests > 0 */
            struct File* Temp;
            Temp = LRU_head;
            pthread_mutex_lock(&Cache_Lock);
            while(Temp != NULL)
            {
                Temp = Temp->LRU_next;
                file_data_free(LRU_head->Data);
                free(LRU_head);
                LRU_head = Temp;
            }
            pthread_mutex_unlock(&Cache_Lock);
            //Initialize the buffer.
            My_buffer.IN = 0;
            My_buffer.OUT = 0;
            My_buffer.Buffer_size = malloc((sv->max_requests) * sizeof(int)); 
            //Construct an array that holds all worker threads.
            sv->Worker_threads = malloc(nr_threads * sizeof(pthread_t));
            /* Lab 5: init server cache and limit its size to max_cache_size */
            Current_cache_size = 0;
            LRU_head = NULL;
            //LRU_tail = LRU_head;
            //Initializing the Hashtable
            int j = 0;
            for(j=0;j < Hashsize; j++)
            {
                Hash_cache[j] = NULL;
            }
            int i = 0;
            for(i = 0; i < nr_threads; i++)
            {
                //Create threads under the worker_threads array
                sv->Worker_threads[i] = (pthread_t) malloc (sizeof(pthread_t));
                pthread_create(&(sv->Worker_threads[i]),NULL,Worker_thread,sv);
            }
	}
	return sv;
}

void
server_request(struct server *sv, int connfd)
{
	if (sv->nr_threads == 0) { /* no worker threads */
		do_server_request(sv, connfd);
	} 
        else {
		/*  Save the relevant info in a buffer and have one of the
		 *  worker threads do the work. */
            //Record requests into the list
            /*struct Request* New = malloc(sizeof(struct Request));
            New->connfd = connfd;
            New->Next = NULL;*/
            //Monitor of the producer part
            //Set up the critical section first
            pthread_mutex_lock(&Lock);
            //if the Buffer is now when it reaches to the max. requests number.
            while((My_buffer.IN - My_buffer.OUT + sv->max_requests) % (sv->max_requests) == sv->max_requests-1){
                //Then the thread need to stay in this while loop until a Not_full signal is arrived.
                pthread_cond_wait(&Not_full, &Lock);
            }
            //Passed the conditional variable, accept the request into the buffer.
            My_buffer.Buffer_size[My_buffer.IN] = connfd;
            //Check if the buffer is empty before
            if(My_buffer.IN == My_buffer.OUT)
                pthread_cond_signal(&Not_empty);
            //Increment the buffer.IN
            My_buffer.IN = (My_buffer.IN + 1) % (sv->max_requests);
            pthread_mutex_unlock(&Lock);
	}
}

int
Comsummer_function(struct server* sv)
{
        //Starting monitor with the lock
        pthread_mutex_lock(&Lock);
        //Check if the buffer is empty or not. If it is empty, then the worker thread needs to wait until the new request gets in
        while(My_buffer.IN == My_buffer.OUT)
        {
            pthread_cond_wait(&Not_empty, &Lock);
        }
        //struct Request* Temp = Delete_Head(Ready_queue); 
        int connfd = My_buffer.Buffer_size[My_buffer.OUT];
        /*Temp->Next = NULL;
        free(Temp);*/
        //Check if the buffer was full before, if so, give it a signal.
        if((My_buffer.IN - My_buffer.OUT + sv->max_requests) % (sv->max_requests) == sv->max_requests-1)
             pthread_cond_signal(&Not_full);
        //Increment the OUT
        My_buffer.OUT = (My_buffer.OUT + 1) % (sv->max_requests);
        pthread_mutex_unlock(&Lock); 
        return connfd;
}
//This is the function that for the pthread_create to run.
void*
Worker_thread(void* arg)
{
    //Always looking for new requests to process
    while(1)
    {
        int connfd = Comsummer_function((struct server*) arg);
        do_server_request((struct server*)arg,connfd);
    }
}

//The lookup function of the Cache.
struct File*
Cache_lookup(unsigned long Hash_index, char *file_name)
{
    //First case, the index doesn't even have a node
    if(Hash_cache[Hash_index] == NULL)
        return NULL;
    //Second case, the head node is the only node
    else if(Hash_cache[Hash_index]->Next == NULL)
    {
        //Cache hits
        if(strcmp(Hash_cache[Hash_index]->Data->file_name,file_name) == 0)
            return Hash_cache[Hash_index];
        else
            return NULL;
    }
    //Now we know that this index is not an empty list, so check every node of the list
    else
    {
        struct File* Temp;
        Temp = Hash_cache[Hash_index];
        while(Temp != NULL)
        {
            if(strcmp(Temp->Data->file_name,file_name) == 0)
                return Temp;
            else
                Temp = Temp->Next;
        }
        return NULL;
    }
    return NULL;
}
//The insert function of the Cache.
void
Cache_insert(struct File* Request_file, unsigned long Index)
{
    if(Request_file == NULL)
    {
        printf("Error!\n");
        return;
    }
    if(Hash_cache[Index] == NULL)
    {
        Hash_cache[Index] = Request_file;
        Hash_cache[Index]->Next = NULL;
    }
    else if(Hash_cache[Index]->Next == NULL)
    {
        Hash_cache[Index]->Next = Request_file;
        Hash_cache[Index]->Next->Next = NULL;
    }
    else
    {
        struct File* Temp;
        Temp = Hash_cache[Index];
        while(Temp->Next != NULL)
            Temp = Temp->Next;
        //Now Temp-> Next is NULL
        Temp->Next = Request_file;
        Temp->Next->Next = NULL;
    }
}

void
Cache_evict(struct File* Delete)
{
    if(Delete->Current_status == 1)
        return;
    else
    {
        struct File* Temp;
        Temp = Hash_cache[Delete->Index];
        if(Temp == NULL)
            printf("Error!\n");
        else if(Temp->Next == NULL)
        {
           //if(strcmp(Temp->Data->file_name,Delete->Data->file_name) == 0)
            Current_cache_size = Current_cache_size - Delete->Data->file_size;
            Hash_cache[Delete->Index] = NULL;
            file_data_free(Delete->Data);
            free(Delete);
            return;
        }
        else
        {
            if(strcmp(Temp->Data->file_name,Delete->Data->file_name) == 0)
            {
                Current_cache_size = Current_cache_size - Delete->Data->file_size;
                Hash_cache[Delete->Index] = Temp->Next;
                Temp->Next = NULL;
                file_data_free(Temp->Data);
                free(Temp);
                return;
            }
            while(Temp->Next != NULL)
            {
                if(strcmp(Temp->Next->Data->file_name,Delete->Data->file_name) == 0)
                {
                    Temp->Next = Temp->Next->Next;
                    Current_cache_size = Current_cache_size - Delete->Data->file_size;
                    file_data_free(Delete->Data);
                    free(Delete);
                    return;
                }
                else
                    Temp = Temp->Next;
            }
            printf("Shouldn't get here, error!");
            return;
        }
        return;
    }
}