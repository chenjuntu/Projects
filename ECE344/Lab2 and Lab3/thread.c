#include <assert.h>
#include <stdlib.h>
#include <ucontext.h>
#include "thread.h"
#include "interrupt.h"

/* This is the thread control block */
struct thread {
    ucontext_t mycontext;
    struct thread* Next;
    Tid ID;
    int Exit;
    //This variable is decleared for future purpose. For this part,0 is not ready, 1 is ready.
    //int State;
};
//This is the pointer to the currently running thread.
struct thread* Current_thread;
//This is the queue for threads that are in ready state.
struct thread* Ready_queue;
//This is a global pointer that holds thing that just be removed.
struct thread* Removed_thread;
//This is the Array that stores pointers to per-thread stacks.
void* Thread_stacks[THREAD_MAX_THREADS];
//This is the array for checking if the ID is valid.
int ID_check[THREAD_MAX_THREADS];


struct thread* Add_to_queue(struct thread* Head, struct thread* New)
{
    struct thread* Temp = Head;
    //If the queue is empty
    if(Head == NULL)
    {
        Head = New;
        New->Next = NULL;
        return Head;
    }
    //If one or more threads in the thread queue
    while(Temp->Next != NULL)
        Temp = Temp->Next;
    Temp->Next = New;
    New->Next = NULL;
    return Head;
}

struct thread* Remove_from_queue(struct thread* Head, Tid want_tid)
{
    struct thread* Previous;
    struct thread* Current;
    Previous = NULL;
    Current = Head;
    //If the thread queue is empty to begin with
    if(Head == NULL)
        return NULL;
    //If the thread queue has only 1 element which is the head.
    else if(Head->Next == NULL)
    {
        if(Head->ID == want_tid)
        {
            Removed_thread = Head;
            return NULL;
        }
        else
            return Head;
    }
    //If more than one thread is in the thread queue
    else{
        while(Current->Next != NULL)
        {
            if(Current->ID == want_tid)
            {
                //If Previous is still NULL, it means it is still the one before Head.
                if(Previous == NULL)
                {
                    Removed_thread = Current;
                    Head = Current->Next;
                    return Head;
                }
                //This is the case that pervious is not NULL
                else
                {
                    Previous->Next = Current->Next;
                    Removed_thread = Current;
                    return Head;
                }
            }
            else
            {
                Previous = Current;
                Current = Current->Next;
            }
        }
        //If it reaches the end of the thread queue
        if(Current->Next == NULL)
        {
            if(Current->ID == want_tid)
            {
                Previous->Next = NULL;
                Removed_thread = Current;
                return Head;
            }
            else
                return Head;
        }
    }
    return Head;
}
/* thread starts by calling thread_stub. The arguments to thread_stub are the
 * thread_main() function, and one argument to the thread_main() function. */
void
thread_stub(void (*thread_main)(void *), void *arg)
{
        interrupts_on();
	Tid ret;

	thread_main(arg); // call thread_main() function with arg
	ret = thread_exit(THREAD_SELF);
	// we should only get here if we are the last thread. 
	assert(ret == THREAD_NONE);
	// all threads are done, so process should exit
	exit(0);
}

static void
call_setcontext(ucontext_t * context)
{
	int err = setcontext(context);
	assert(!err);
}
void
thread_init(void)
{
    int i,err;
    //Initialize the ID_check array.
    for (i = 0; i < THREAD_MAX_THREADS; i++)
    {
        ID_check[i] = 0; //When it sets to 1, means that ID is occupied.
    }
    //Initializing Ready_queue
    Ready_queue = NULL;
    //Creating the initial thread, which is thread 0.
    Current_thread = (struct thread*) malloc(sizeof(struct thread)); 
    //The first thread ID is 0.
    Current_thread->ID = 0;
    ID_check[0] = 1;
    Current_thread->Exit = 0;
    Current_thread->Next = NULL;
    err = getcontext(&(Current_thread->mycontext));
    assert(!err);
    return;
}

Tid
thread_id()
{
    return Current_thread->ID;
}

Tid
thread_create(void (*fn) (void *), void *parg)
{
    int Enable= interrupts_set(0);
    
    //First, we have to check if there is still any space for creating a new thread.
    int i, Check, err;
    void *sp;
    struct thread* New_thread;
    Check = 0;
    for(i = 0; i < THREAD_MAX_THREADS; i++)
    {
        if(ID_check[i] == 0)
        {
            Check = 1; //We found a free ID for the new thread
            break;  //Now i also is the ID of the new thread.
        }
    }
    if(Check == 0) //It only gets into this if statement because there is no ID for the new thread
    {   
        interrupts_set(Enable);
        return THREAD_NOMORE;
    }
    //Now we allocate a stack for the thread.
    sp = (void*) malloc (THREAD_MIN_STACK + 16);
    //If there is no more memory to malloc.
    if(sp == NULL)
    {
        interrupts_set(Enable);
        return THREAD_NOMEMORY;
    }
    //Now we create the new thread.
    New_thread = (struct thread*) malloc(sizeof(struct thread));
    err = getcontext(&(New_thread->mycontext));
    assert(!err);
    New_thread->ID = i; //Assign the ID to the new thread.
    //After allocating the new thread, start changing register values manually.
    New_thread->mycontext.uc_mcontext.gregs[REG_RIP] = (unsigned long)&thread_stub;  //This is the function that a new thread should run first
    New_thread->mycontext.uc_mcontext.gregs[REG_RDI] = (unsigned long)fn;       //This is the first argument
    New_thread->mycontext.uc_mcontext.gregs[REG_RSI] = (unsigned long)parg;     //This is the second argument
    New_thread->mycontext.uc_mcontext.gregs[REG_RSP] = (unsigned long)(sp+THREAD_MIN_STACK + 8); //makes the stack pointer points to the head of stack
    //Finally we can put this thread into the ready_queue.
    Ready_queue = Add_to_queue(Ready_queue, New_thread);
    ID_check[i] = 1;
    New_thread->Exit = 0;
    interrupts_set(Enable);
    return (Tid)i;
}
/* What do we need to do when yielding to another thread?
 *      first we need to save the current thread's context by using getcontext. 
 */
Tid
thread_yield(Tid want_tid)
{
    int Enable= interrupts_set(0);
    
    //If this function is asked to yield to itself.
    if(want_tid == THREAD_SELF)
    {
        Tid Return = thread_id();
        interrupts_set(Enable);
        return Return;
    }
    //If the want_tid is Current running thread's ID, return the ID.
    else if(want_tid == Current_thread->ID)
    {
        Tid Return = thread_id();
        interrupts_set(Enable);
        return Return;
    }
    //If this function is asked to yield to any thread that is on the ready queue.
    else if(want_tid == THREAD_ANY)
    {   
        struct thread* Head;
        //First, check if there exists other threads that can be yielded to.
        if(Ready_queue == NULL)
        {
            interrupts_set(Enable);
            return THREAD_NONE;
        }
        //Now we have ensured that there is at least 1 thread in the ready queue.
        else
        {
            int err;
            int setcontext_called = 0;
            err = getcontext(&(Current_thread->mycontext));
            assert(!err);
            //This if statement is for when the thread is yielding back.
            if (setcontext_called == 1) 
            {
                interrupts_set(Enable);
                return thread_id();
            }
            //Store the current thread into the ready_queue.
            /*while(Head->Next != NULL)
                Head = Head->Next;
            Head->Next = Current_thread;*/
            Ready_queue = Add_to_queue(Ready_queue, Current_thread);
            Head = Ready_queue;
            //There exists at lease one thread that is in the ready_queue. Therefore we choose the head of ready_queue to yield.
            Ready_queue = Head->Next;
            Head->Next = NULL;
            Current_thread = Head;
            setcontext_called = 1;
            //Check if this thread should be destroyed or not.
            if(Current_thread->Exit == 1)
                thread_exit(THREAD_SELF);
            //Now we do the switching thread job.
            else
                call_setcontext(&(Head->mycontext));
        }
    }
    //If this function is asked to yield to one specific thread.
    else
    {
        int Found = 0;
        struct thread* Current;
        struct thread* Temp;
        Current = Ready_queue;
        Temp = Ready_queue;
        //First we have to check if the identifier is valid or not.
        if(want_tid < 0 || want_tid > THREAD_MAX_THREADS-1)
        {
            interrupts_set(Enable);
            return THREAD_INVALID;
        }
        while(Current != NULL)
        {
            //If we found the thread we want, we mark the "Current" pointer to it, and signal the "Found" to be true.
            if(want_tid == Current->ID)
            {
                Found = 1;
                break;
            }
            //Else we continue to next thread in the Ready_queue.
            else
                Current = Current->Next;
        }
        //If the Thread is not in the ready queue, return INVALID.
        if(Found == 0)
        {
            interrupts_set(Enable);
            return THREAD_INVALID;
        }
        //Here is the situation that we found the correct thread to yield, and that thread is pointing by the "Current" pointer.
        else
        {
            int setcontext_called = 0;
            int err;
            err = getcontext(&(Current_thread->mycontext));
            assert(!err);
            //This if statement is for when the thread is yielding back.
            if (setcontext_called == 1) 
            {
                interrupts_set(Enable);
                return thread_id();
            }
            //Store the current thread into the ready_queue.
            /*while(Temp->Next != NULL)
                Temp = Temp->Next;
            Temp->Next = Current_thread;*/
            Ready_queue = Add_to_queue(Ready_queue, Current_thread);
            Temp = Ready_queue;
            //Remove the thread from Ready_queue.
            //first case, if the head of the ready_queue is the thread we want.
            if(Ready_queue->ID == want_tid)
                {
                    Ready_queue = Temp->Next;
                    Temp->Next = NULL;
                    Current_thread = Temp; //Temp and Current are pointing to the same thing.
                }
            else
            {
                while(Temp->Next != NULL)
                {
                //This is the case that the thread is in middle of the list. Now "Current" and "Temp->Next" point to the same thing.
                    if(Temp->Next->ID == want_tid)
                    {
                        Temp->Next = Current->Next;
                        Current->Next = NULL;
                        //Remove it from the ready_queue.
                        Current_thread = Current;
                        break;
                    }
                    else
                        Temp = Temp->Next;
                }
            }
            setcontext_called = 1;
            //Check if this thread should be destroyed or not
            if(Current_thread->Exit == 1)
                thread_exit(THREAD_SELF);
            //Do the switching function here.
            else
                call_setcontext(&(Current->mycontext));
        }
    }
    interrupts_set(Enable);
    return -1;
}

Tid
thread_exit(Tid tid)
{
    int Enable= interrupts_off();
    
    //First case, destroying all the thread except the caller thread
    if(tid == THREAD_ANY)
    {
        //If there is no more thread other than the running thread, we can't destroy threads anymore
        if(Ready_queue == NULL)
        {
            interrupts_set(Enable);
            return THREAD_NONE;
        }
        //If there is at least one more thread in the ready_queue
        while(Ready_queue != NULL)
        {
            Ready_queue->Exit = 1;
            interrupts_set(Enable);
            return Ready_queue->ID;
        }
    }
    //Terminating itself
    else if(tid == THREAD_SELF || tid == Current_thread->ID)
    {
        //If there is no more thread in the ready_queue, means this is the last thread.
        if(Ready_queue == NULL)
        {
            interrupts_set(Enable);
            return THREAD_NONE;
        }
        //Now, at least 1 thread in the ready queue.
        else
        {
            Tid TID;
            struct thread* Temp;
            struct thread* Delete;
            //Update the ready_queue
            Ready_queue = Remove_from_queue(Ready_queue,Ready_queue->ID);
            Temp = Removed_thread;
            //What we want to destroy, is the Current_thread.
            Delete = Current_thread;
            Current_thread = Temp;
            int i = (int)Delete->ID;
            ID_check[i] = 0; //Make this ID avaliable again.
            Delete->Next = NULL;
            Delete->Exit = 1;
            TID = Delete->ID;
            free(Delete);
            //Check if the Current_thread should be deleted or not.
            if(Current_thread->Exit == 1)
                thread_exit(THREAD_SELF);
            else
                setcontext(&(Current_thread->mycontext));
            interrupts_set(Enable);
            return TID;
        }
    }
    //Terminating by ID
    else
    {
        struct thread* Current;
        //First, check the ID is valid or not
        if(tid < 0 || tid > THREAD_MAX_THREADS - 1)
        {
            interrupts_set(Enable);
            return THREAD_INVALID;
        }
        //This ID is invalid since Ready_queue is empty and this ID doesn't match to the current_thread.
        if(Ready_queue == NULL)
        {
            interrupts_set(Enable);
            return THREAD_INVALID;
        }
        //Find out the thread that needs to be removed.
        Current = Ready_queue;
        while(Current != NULL)
        {
            if(Current->ID == tid)
            {
                Current->Exit = 1;
                break;
            }
            else
                Current = Current->Next;
        }
        //To detect if there is such a thread.
        if(Current == NULL)
        {
            interrupts_set(Enable);
            return THREAD_INVALID;
        }
        else
        {
            interrupts_set(Enable);
            return Current->ID;
        }
    }
        interrupts_set(Enable);
	return THREAD_FAILED;
}

/*******************************************************************
 * Important: The rest of the code should be implemented in Lab 3. *
 *******************************************************************/

/* This is the wait queue structure */
struct wait_queue {
    struct thread* Blocked_queue;
};

struct wait_queue *
wait_queue_create()
{
	struct wait_queue *wq;

	wq = malloc(sizeof(struct wait_queue));
	assert(wq);
        wq->Blocked_queue = NULL;
	return wq;
}

void
wait_queue_destroy(struct wait_queue *wq)
{
    if(wq->Blocked_queue == NULL)
	free(wq);
}

Tid
thread_sleep(struct wait_queue *queue)
{
    int Enable;
    Enable = interrupts_set(0);  //Turn off the signal interrupts first.
    //There are three cases
    //First, if the Ready_queue is empty, which means there is no other threads, we don't sleep any threads
    if(Ready_queue == NULL)
    {
        interrupts_set(Enable); // Turn on the interrupts again.
        return THREAD_NONE;
    }
    //The second case is that there is 
    
	return THREAD_FAILED;
}

/* when the 'all' parameter is 1, wakeup all threads waiting in the queue.
 * returns whether a thread was woken up on not. */
int
thread_wakeup(struct wait_queue *queue, int all)
{
    /*int Enable;
    Enable = interrupts_set(0);*/
    
	return 0;
}

struct lock {
	/* ... Fill this in ... */
};

struct lock *
lock_create()
{
	struct lock *lock;

	lock = malloc(sizeof(struct lock));
	assert(lock);

	TBD();

	return lock;
}

void
lock_destroy(struct lock *lock)
{
	assert(lock != NULL);

	TBD();

	free(lock);
}

void
lock_acquire(struct lock *lock)
{
	assert(lock != NULL);

	TBD();
}

void
lock_release(struct lock *lock)
{
	assert(lock != NULL);

	TBD();
}

struct cv {
	/* ... Fill this in ... */
};

struct cv *
cv_create()
{
	struct cv *cv;

	cv = malloc(sizeof(struct cv));
	assert(cv);

	TBD();

	return cv;
}

void
cv_destroy(struct cv *cv)
{
	assert(cv != NULL);

	TBD();

	free(cv);
}

void
cv_wait(struct cv *cv, struct lock *lock)
{
	assert(cv != NULL);
	assert(lock != NULL);

	TBD();
}

void
cv_signal(struct cv *cv, struct lock *lock)
{
	assert(cv != NULL);
	assert(lock != NULL);

	TBD();
}

void
cv_broadcast(struct cv *cv, struct lock *lock)
{
	assert(cv != NULL);
	assert(lock != NULL);

	TBD();
}
