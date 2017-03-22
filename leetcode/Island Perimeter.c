#include <stdio.h>
#include <stdlib.h>

int islandPerimeter(int** grid, int gridRowSize, int gridColSize) {
    int Result = 0;
    int Length = 0;
    for(int i = 0; i < gridRowSize; i++){
        for(int j = 0; j < gridColSize; j++){
            Length = 0;
            if(grid[i][j] == 1){
                Length = 4;
                if((i + 1) < gridRowSize && grid[i+1][j] == 1)
                    Length--;
                if((i - 1) >= 0 && grid[i-1][j] == 1)
                    Length--;
                if((j + 1) < gridColSize && grid[i][j+1] == 1)
                    Length--;
                if((j - 1) >= 0 && grid[i][j-1] == 1)
                    Length--;
            }
            printf("%d", grid[i][j]);
            Result = Result + Length;
        }
        printf("\n");
    }
    return Result;
}

void main(void){
    int Rows, Cols;
    int **Grid;
    int Result;

    Rows = 10;
    Cols = 10;
    Grid = (int **)malloc(Rows * sizeof *Grid);
    for (int i = 0; i < Rows; i++)
    {
        Grid[i] = (int *)malloc(Cols * sizeof **Grid);
    }
     for(int i = 0; i < Rows; i++){
        for(int j = 0; j < Cols; j++){
            Grid[i][j] = 0;
        }
     }
     Grid[5][5] = 1;
     Grid[5][6] = 1;
     Grid[4][6] = 1;
     Grid[7][6] = 1;
     Grid[5][4] = 1;
    Result = islandPerimeter(Grid, Rows, Cols);
    printf("\n");
    printf("Result is: %d\n", Result);
    for (int i=0; i<Rows; i++)
    {
        free(Grid[i]);
    }
    free(Grid);
}