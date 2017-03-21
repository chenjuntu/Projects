#include <iostream>
#include <vector>
#include <string>

using namespace std;
class Solution {
public:
    vector<string> fizzBuzz(int n) {
        vector<string> Result;
        for(int i = 1; i <= n; i++){
            if(i % 3 == 0){
                if(i % 5 == 0){
                    Result.push_back("FizzBuzz");
                    continue;
                }
                else{
                    Result.push_back("Fizz");
                    continue;
                }
            }
            else if(i % 5 == 0){
                Result.push_back("Buzz");
                continue;
            }
            Result.push_back(to_string(i));
        }
        return Result;
    }
};

int main (void){
    int n;
    Solution Result;
    vector<string> Result_hold;
    cout << "Welcome to Fizz Buzz, please indicate the size of numbers:" << endl;
    cin >> n;
    Result_hold = Result.fizzBuzz(n);
    int length = Result_hold.size();
    cout << length <<endl;
    for (int i = 0; i < Result_hold.size(); ++i)
        cout << Result_hold[i] << endl;
    return 0;
}