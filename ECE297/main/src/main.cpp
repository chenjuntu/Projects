#include "StreetsDatabaseAPI.h"
#include <iostream>
#include "m3.h"
#include "graphics.h"
#include <sstream>
using namespace std;
extern unsigned grouped_streets[22464];
int main() {
    cout<<"Input the city you want the map for\n> ";
    string city;
    cin>>city;
    string file_name;
    cin.ignore(256,'\n');
    file_name = "/cad2/ece297s/public/maps/"+city+".bin";
    draw_map(file_name);
    close_graphics();
    close_map();
    return 0;
}
