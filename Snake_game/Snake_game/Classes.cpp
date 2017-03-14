/* 
 * File:   Classes.cpp
 * Author: Juntu
 *
 * Created on March 8, 2017, 10:16 AM
 */
#include "Class_header.h"
#include <iostream>
#include <cstdlib>


void Print_screen(char Board[][80]){
    for(int i = 0; i < 15; i++){
        for(int j = 0; j < 80; j++){
            std::cout << Board[i][j];
        }
        std::cout << std::endl;
    }
}

void Egg_generation(char Board[][80]){
    int x, y;
    do{
    x = rand() % 78 + 1;
    y = rand() % 13 + 1;
    }while(Board[y][x] != ' ');
    Board[y][x] = '$';
}

Snake::Snake(char (*Board)[80]){
    Head = new Node;
    //Head->Coordinate = &(Board[10][40]);
    Head->x = 40;
    Head->y = 10;
    Head->Symbol = '@';
    Head->Direction = 'w';
    Board[10][40] = Head->Symbol;
    Node *Current = Head;
    for(int i = 0; i < 3; i++){
        Current->Next = new Node;
        Current->Next->x = Current->x - 1;
        Current->Next->y = Current->y;
        Current = Current->Next;
        Board[Current->y][Current->x] = Current->Symbol;
        Current->Next = NULL;
    }
    Tail = Current;
    Length = 4;
} 

Snake::~Snake(){
    Node *Temp = Head;
    for (int i = 0; i < Length; i++){
        Head = Temp->Next;
        delete Temp;
        Temp = Head;
    }
    Tail = NULL;
}

void Snake::Turn(char Command){
    switch(Command){
        case 'w':
            if(Head->Direction != 's')
                Head->Direction = Command;
            break;
        case 's':
            if(Head->Direction != 'w')
                Head->Direction = Command;
            break;
        case 'a':
            if(Head->Direction != 'd')
                Head->Direction = Command;
            break;
        case 'd':
            if(Head->Direction != 'a')
                Head->Direction = Command;
            break;
        default:
            break;
    }
}

int Snake::Move(char (*Board)[80]){
    int Result;
    int old_x, temp_x;
    int old_y, temp_y;
    Node *Current = Head;
    old_x = Head->x;
    old_y = Head->y;
    Result = 0;
    switch(Head->Direction){
        case 'w':
            Head->y--;
            
            if(Board[Head->y][Head->x] == '$')
                Result = 1;
            else if(Board[Head->y][Head->x] == '#' || Board[Head->y][Head->x] == '*')
                return 2;
            Board[Head->y][Head->x] = Head->Symbol;
            break;
        case 's':
            Head->y++;
            if(Board[Head->y][Head->x] == '$')
                Result = 1;
            else if(Board[Head->y][Head->x] == '#' || Board[Head->y][Head->x] == '*')
                return 2;
            Board[Head->y][Head->x] = Head->Symbol;
            break;
        case 'a':
            Head->x--;
            if(Board[Head->y][Head->x] == '$')
                Result = 1;
            else if(Board[Head->y][Head->x] == '#' || Board[Head->y][Head->x] == '*')
                return 2;
            Board[Head->y][Head->x] = Head->Symbol;
            break;
        case 'd':
            Head->x++;
            if(Board[Head->y][Head->x] == '$')
                Result = 1;
            else if(Board[Head->y][Head->x] == '#' || Board[Head->y][Head->x] == '*')
                return 2;
            Board[Head->y][Head->x] = Head->Symbol;
            break;
        default:
            std::cout << "An unknown bug has been found, please contact author to fix it." << std::endl;
            return 2;
            break;
    }
    Board[Tail->y][Tail->x] = ' ';
    for(int i = 1; i < Length; i++){
        temp_x = Current->Next->x;
        temp_y = Current->Next->y;
        Current->Next->x = old_x;
        Current->Next->y = old_y;
        Board[old_y][old_x] = Current->Next->Symbol;        
        Current = Current->Next;
        old_x = temp_x;
        old_y = temp_y;
        if(Current->Next == NULL)
            Tail = Current;
    }
    return Result;
}

void Snake::Growth(void){
    Tail->Next = new Node;
    //Just copy the last one's coordinate, it will show up after next move()
    Tail->Next->x = Tail->x;
    Tail->Next->y = Tail->y;
    Tail = Tail->Next;
    Tail->Next = NULL;
    Length++;
}