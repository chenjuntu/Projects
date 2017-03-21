#include <iostream>
#include <string>

using namespace std;
class Solution {
public:
    string reverseString(string s) {
        string str = s;
        int i = 0;
        for(string::reverse_iterator ritel = s.rbegin(); ritel != s.rend(); ritel++){
            str[i] = *ritel;
            i++;
        }
        return str;
    }
};

int main (void){
    Solution Result;
    string Hold;
    Hold = Result.reverseString("Hello!");
    cout<< Hold << endl;
    return 0;
}