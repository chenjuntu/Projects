#include <stdio.h>

/*If I want my friend always lose, I need to ensure that I am right at n when I am doing the last move. Therefore I need to make him at most can get to n-1. 
*/
bool canWinNim(int n) {
    return (n % 4 != 0);
}