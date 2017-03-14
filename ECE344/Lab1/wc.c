#include <assert.h>
#include <stdio.h>
#include <stdlib.h>
#include "common.h"
#include "wc.h"
#include <ctype.h>
#include <string.h>

#define Index 3000
struct wc {
	/* you can define this struct to have whatever fields you want. */
    int Count;
    char String[30];
    struct wc* Next;
};
struct wc* Hashtable[Index];
/*
 	struct wc *wc;
	wc = (struct wc *)malloc(sizeof(struct wc));
	assert(wc);
 */
int Getkey(char* String)
{
    int i,Result;
    Result = 0;
    for(i=0; i< 10; i++)
    {
        Result = Result + (int)String[i];
    }
    return Result;
}
struct wc* Construct(char* String)
{
    struct wc* wc;
    wc = (struct wc *)malloc(sizeof(struct wc));
    assert(wc);
    wc->Count = 1;
    wc->Next = NULL;
    strcpy(wc->String, String);
    return wc;
}
struct wc *
wc_init(char *word_array, long size)
{
    int i, x;
    int z;
    for(z = 0; z < 3000; z++)
        Hashtable[z] = NULL;
    char TempStr[30];
    for(x=0; x< 10; x++)
        TempStr[x] = 0;
    int Key;
    while(i < size)
    {
        if(isspace(word_array[i]))  //Don't count the space
            i++;
        else
        {
            int j = 0;
            while(!isspace(word_array[i]))  //Copying the string to Temp. string
            {
                TempStr[j] = word_array[i];
                i++;
                j++;
            } // Finished copying it.
            Key = Getkey(TempStr);
            if(Hashtable[Key] == NULL)
            {
                Hashtable[Key] = Construct(TempStr);
                Hashtable[Key]->Next = NULL;
            }
            else //This key is not empty, therefore we need to search and count
            {
                struct wc* Temp;
                Temp = Hashtable[Key];
                int Result = 10;
                while(Temp != NULL)
                {
                    Result = strcmp(Temp->String, TempStr);
                    if(Result == 0)
                    {
                        Temp->Count++;
                        break;
                    }
                    else
                        Temp = Temp->Next;
                }
                if(Result != 0)
                {
                    Temp = Construct(TempStr);
                    Temp->Next = Hashtable[Key];
                    Hashtable[Key] = Temp;
                }
            }
        }       
    }
    struct wc* wc = NULL;
    return wc;
}

void
wc_output(struct wc *wc)
{
    struct wc* Temp;
    int i;
    for(i = 0; i< Index; i++)
    {
        if(Hashtable[i] != NULL)
        {
            Temp = Hashtable[i];
            while(Temp != NULL)
            {
                printf("%s:%d\n", Temp->String, Temp->Count);
                Temp = Temp->Next;
            }
        }
    }
    return;
}

void
wc_destroy(struct wc *wc)
{
    struct wc* Temp;
    int i;
    for(i=0; i < Index; i++)
    {
        while(Hashtable[i] != NULL)
        {
            Temp = Hashtable[i];
            Hashtable[i] = Hashtable[i]->Next;
            free(Temp);
        }
    }
    return;
}
