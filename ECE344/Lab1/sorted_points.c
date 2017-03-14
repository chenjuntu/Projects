#include <assert.h>
#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include "common.h"
#include "point.h"
#include "sorted_points.h"
#include <malloc.h>

struct sorted_points
{
	/* you can define this struct to have whatever fields you want. */
    struct sorted_points* Next;
    //struct sorted_points* Now;
    double x;
    double y;
    double length;
};

struct sorted_points *
sp_init()
{
	struct sorted_points *sp;
	sp = (struct sorted_points *)malloc(sizeof(struct sorted_points));
	assert(sp);
    sp->x = 0.0;
    sp->y = 0.0;
    sp->length = 0.0;
    sp->Next = NULL;
    
	return sp;
}

void
sp_destroy(struct sorted_points *sp)
{

    struct sorted_points* temp;
    while(sp != NULL)
    {
        temp = sp;
        sp = sp->Next;
        free(temp);
    }
    
}

int
sp_add_point(struct sorted_points *sp, double x, double y)
{
    struct sorted_points* New;
    New = (struct sorted_points*)malloc(sizeof(struct sorted_points));
    New->x = x;
    New->y = y;
    New->length = (x * x) + (y * y);
    New->length = sqrt(New->length);
    New->Next =NULL;
    struct sorted_points* Current;
    if(sp == NULL || sp->length > New->length)
    {
        New->Next = sp;
        sp = New;
        return 1;
    }
    else
    {
        Current = sp;
        while(Current->Next != NULL && Current->Next->length < New->length)
        {
            Current = Current->Next;
        }
        if(Current->Next != NULL && Current->Next->length == New->length)
        {
            while(Current->Next->x < New->x) {
                /*New->Next = Current->Next->Next;
                Current->Next->Next = New;*/
                Current = Current->Next;
                if(Current->Next == NULL || Current->Next->length != New->length)
                {
                    New->Next = Current->Next;
                    Current->Next = New;
                    return 1;
                }
            }
            if(Current->Next->x == New->x){
                if(Current->Next->y < New->y){
                    New->Next = Current->Next->Next;
                    Current->Next->Next = New;
                    return 1;
                }
                else{
                    New->Next = Current->Next;
                    Current->Next = New;
                    return 1;
                }
            }
            else{
                New->Next = Current->Next;
                Current->Next = New;
                return 1;
            }
        }
        else{
            New->Next = Current->Next;
            Current->Next = New;
            return 1;
        }
    }
	return 0;
}

int
sp_remove_first(struct sorted_points *sp, struct point *ret)
{
    struct sorted_points* Temp;
    if(sp->Next != NULL)
    {
        Temp = sp->Next;
        ret->x = sp->Next->x;
        ret->y = sp->Next->y;
        sp->Next = sp->Next->Next;
        free(Temp);
        return 1;
    }
	return 0;
}

int
sp_remove_last(struct sorted_points *sp, struct point *ret)
{
    struct sorted_points* Current;
    struct sorted_points* Temp;
    Current = sp;
    Temp = sp;
    //If there is no other elements except the sp, then nothing should be deleted.
    if(sp->Next == NULL)
        return 0;
    else
    {
            while(Temp->Next != NULL)
            {
                Current = Temp;
                Temp = Temp->Next;
            }
            Current->Next = NULL;
            ret->x = Temp->x;
            ret->y = Temp->y;
            free(Temp);
            return 1;
    }
}

int
sp_remove_by_index(struct sorted_points *sp, int index, struct point *ret)
{
    struct sorted_points *Current;
    struct sorted_points *Temp;
    Temp = sp->Next;
    Current = sp;
    int Counter = 0; //This is for indicating where Temp is at.
    if(sp->Next == NULL) //First check if this is a empty set.
        return 0;
    else
    {
        while(Temp->Next != NULL && Counter < index)
        {
            Temp = Temp->Next;
            Current = Current->Next;
            Counter++;
        }
        //This is the case that out of scope
        if(Counter != index) 
            return 0;
        else
        {
            Current->Next = Temp->Next;
            ret->x = Temp->x;
            ret->y = Temp->y;
            free(Temp);
            return 1;
        }
    }
}

int
sp_delete_duplicates(struct sorted_points *sp)
{
    int Record = 0;
    struct sorted_points* Current;
    struct sorted_points* Temp;
    Current = sp;
/*    while(Current->Next->Next != NULL)
    {
        
        if(Current->Next->x == Current->Next->Next->x)
        {
            if(Current->Next->y == Current->Next->Next->y)
            {
                Temp = Current->Next;
                Current->Next = Current->Next->Next;
                free(Temp);
                Record++;
            }
        }*/
/*        if(Current->x == Current->Next->x && Current->y == Current->Next->y)
            Current = Current;
        else
            Current = Current->Next;
    }*/
    if(Current->Next->Next == NULL || Current->Next == NULL)
        return Record;
    else
    {
        Current = Current->Next;
        while(Current->Next != NULL)
        {
            if(Current->x == Current->Next->x && Current->y == Current->Next->y)
            {
                Temp = Current->Next;
                Current->Next = Temp->Next;
                Temp->Next = NULL;
                free(Temp);
                Record++;
            }
            else
                Current = Current->Next;
        }
    }
    return Record;
}

