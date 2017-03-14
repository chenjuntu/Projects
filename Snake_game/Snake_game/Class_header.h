/* 
 * File:   Class_header.h
 * Author: Juntu
 *
 * Created on March 7, 2017, 4:09 PM
 */

#ifndef CLASS_HEADER_H
#define CLASS_HEADER_H

#include <string>

struct Node {
    int x;
    int y;
    char Symbol = '*';
    char Direction;
    Node *Next = NULL;
};

class Snake {
public:
    int Length;
    Node *Head;
    Node *Tail;

    //Member functions
    Snake(char (*Board)[80]);
    ~Snake();
    void Turn(char Command);
    void Growth(void);
    int Move(char (*Board)[80]);

};

void Egg_generation(char Board[][80]);

void Print_screen(char Board[][80]);

#endif /* CLASS_HEADER_H */

