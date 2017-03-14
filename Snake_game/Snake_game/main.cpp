/* 
 * File:   main.cpp
 * Author: Juntu
 *
 * Created on March 7, 2017, 2:29 PM
 * Included ncurses.h lib, so need to install this lib before compiling it.
 * When compiling it, need to have -lncurses suffix
 */
#include <unistd.h>
#include <iostream>
#include <locale>
#include <ncurses.h>
#include "Class_header.h"
#include <time.h>

using namespace std;
/*
 * 
 */

int main(int argc, char** argv) {
    char Board[15][80]; 
    int Command = -1;
    int Score = 0;
    int flag = 0;
    char Input;
    unsigned int Microseconds;
    locale loc;
    //Initializing the Board.
    for(int i = 1; i < 14; i++){
        for(int j = 1; j < 79; j++){
            Board[i][j] = ' ';
        }
    }
    for(int k = 0; k < 15; k = k + 14){
        for(int z = 0; z < 80; z++){
            Board[k][z] = '#';
        }
    }
    for(int y = 0; y < 80; y = y + 79){
        for(int x = 0; x < 15; x++){
            Board[x][y] = '#';
        }
    }
    cout << "Welcome to Chen's C++ Snake Game! " << endl;
    cout << "Press Ctrl + C to exit at any time. " << endl;
    cout << "Please select a difficulty: E - Easy  N - Normal  H - Hard  I - Insane" << endl;
    cin >> Input;
    Input = tolower(Input, loc);
    switch(Input){
        case 'e':
            Microseconds = 250000;
            break;
        case 'n':
            Microseconds = 180000;
            break;
        case 'h':
            Microseconds = 110000;
            break;
        case 'i':
            Microseconds = 70000;
            break;
        default:
            cout << "Invalid Input, terminating the game." << endl;
            return 0;
    }
    srand (time(NULL));
    Snake Player(Board);
    Egg_generation(Board);
    Print_screen(Board);
    while(1){
        usleep(Microseconds);
        initscr();
        cbreak();
        timeout(10);
        Command = getch();
        endwin();
        /* Only turn when valid command is inputed. Otherwise, do nothing due to having same direction / invalid input
         */
        if ((char)Command == 'w' || (char)Command == 'a' || (char)Command == 's' || (char)Command == 'd' || (char)Command == 'W' || (char)Command == 'A' || (char)Command == 'S' || (char)Command == 'D'){
            Command = (int)(tolower((char)Command, loc));
            if ((char)Command != Player.Head->Direction)
                Player.Turn((char)Command);
        }        
        //Now, we moves.
        flag = Player.Move(Board);
        if(flag == 1){
            Egg_generation(Board);
            Score = Score + 50 * (1+ Player.Length / 10);
            Player.Growth();
        }
        else if(flag == 2)
            break;
        Score = Score + Player.Length * (2 + (Player.Length - 4)) - ((Microseconds / 180000) - 1);
        system("clear");
        cout << "Score: " << Score <<endl;
        Print_screen(Board);
    }
    cout << "Game over! Your final score is: " << Score << endl;
    return 0;
}

