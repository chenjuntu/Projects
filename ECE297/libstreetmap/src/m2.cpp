#include "m4.h"
#include "graphics.h"
#include "LatLon.h"
#include <iostream>
#include <cfloat>
#include <chrono>
#include <cstdlib>
#include <vector>
#include <thread>
#include <unordered_map>
#include <cmath>
#include <sstream>
using namespace std;


extern unordered_map<string, unsigned> intersectionTable; //pair intersection name with its ID
extern unordered_map<string, unsigned> streetTable; //pair street name with its ID
extern unordered_map<string, vector<unsigned>> SegmentsOfStreet; //pair a street with all its segments
extern unordered_map<unsigned, vector<unsigned>> intersection_segment_table; //pair a intersection with all connected segments
extern unordered_map<unsigned, vector<string>> intersection_street_table; //pair a intersection with all connected street names
extern unordered_map<string, vector<unsigned>> adjacent_intersection_table; //pair a intersection with all its adjacent ones
extern unordered_map<unsigned, double> segment_length_table; //pair a segment with its length
extern unordered_map<string, vector<unsigned>> street_intersection_table; //pair a street with all its intersections
extern unordered_map<string,vector<unsigned>> POI_id_list;
extern vector<unsigned> highway_segment; //store the street segments belong to highway
vector<unsigned> grouped_streets; //indices are street ids, elements are the group number
vector<unsigned> shown_POI_names; //used to store what POI names are shown currently
vector<unsigned> marked_intersections; //used to store what intersections have been marked
vector<t_color> segment_color; //used to store highlighted streets (useful in milestone3)
vector<LatLon> occupied;
float original_area; //store the area of the map at launch
bool POI_shown; //allows the user to toggle points of interest on or off
bool aligned_names; //allows the user to align street names with streets
unsigned marked_intersection_number; //used to store the number of marked intersections
int starting_int;//start intersection
int des_int;//destination intersection
int last_marked_intersection;
vector<unsigned> the_path;
extern unsigned turns;
bool help_enabled;

void draw_map(std::string map_path) {
    load_map(map_path); //load data from bin
    group_streets(); //set level by the length of streets
    intialize_status();
    t_bound_box initial_coords = find_bound();
    t_color initial(233, 229, 220); //background color
    init_graphics("Map", initial);
    set_visible_world(initial_coords);
    original_area = get_visible_world().area();
    update_message("Welcome!");
    buttons();
    while(true){
        starting_int = 0;
        des_int = 5455;
        event_loop(act_on_button_press, NULL, NULL, draw_screen); //start drawing the map
        string set;
        if(starting_int==-1){
            set = "no";
        }
        else if(starting_int!=-1){
        cout<<"Do you already have the starting intersection set?(yes/no)\n> ";
        cin>>set;
        cin.ignore(256,'\n');
        while(set!="yes"&&set!="no"){
                cout<<"Please input yes or no\n";
                cin>>set;
                cin.ignore(256,'\n');
            }
        }
        
        string input;
        string first_street;
        vector<unsigned> street_list;
        vector<unsigned> street_list2;
        string second_street;
        int first_intersection;
        int second_intersection;
        unsigned size;
        
        vector<unsigned> potential_ints;
        
        
        
        if(set=="no")
        {
        cout<<"Specify the intersections with two street names (input the first one and press enter)"<<endl;
        cout<<endl<<"Specify the first street of the start intersection (input exit to go back to map)"<<endl<<"> ";
        getline(cin,input);
        if(input=="exit"){
            continue;
        }
        street_list = find_street(input);
        size = street_list.size();
        
        while(size==0){
            cout<<"Invalid input"<<endl<<"Try again\n> ";
            getline(cin,input);
        if(input=="exit"){
            continue;
        }
        street_list = find_street(input);
        size = street_list.size();
        }
        cout<<endl<<"Specify the second street (input exit to go back to map)"<<endl<<"> ";
        getline(cin,input);
        if(input=="exit"){
            continue;
        }
        street_list2 = find_street(input);
        size = street_list2.size();
        while(size==0){
            cout<<"Invalid input"<<endl<<"Try again\n> ";
            getline(cin,input);
        if(input=="exit"){
            continue;
        }
        street_list2 = find_street(input);
        size = street_list2.size();
        }
        potential_ints = find_common_intersection(street_list,street_list2);
        if(potential_ints.size()==0){
            cout<<"No such intersection!\n";
            continue;
        }
        if(potential_ints.size()==1){
        first_intersection = potential_ints[0];
        }
        else if(potential_ints.size()>1){
            cout<<"Did you mean: "<<endl;
            for(unsigned i =0;i<potential_ints.size();i++){
                        cout<<(i+1)<<". "<<getIntersectionName(potential_ints[i])<<endl;
                    }
            cout<<"Input number to choose intersection\n> ";
            unsigned number;
             cin>>number;
            while(number<1||number>potential_ints.size()){
                cout<<"Please input a number between 1 and "<<potential_ints.size()<<endl<<"> ";
                cin>>number;
            }
            cin.ignore(256,'\n');
            first_intersection = potential_ints[number-1];
        }
        
        cout<<"Start intersection set to be "<<getIntersectionName(first_intersection)<<endl;
        }
        else if(set == "yes"){
            first_intersection = starting_int;
            cout<<"Start intersection set to be "<<getIntersectionName(first_intersection)<<endl;
        }
        
        cout<<endl<<"Is your destination an intersection or a POI?\nType i for intersection, p for POI.\n> ";
        
        char option;
        cin>>option;
        cin.ignore(256,'\n');
        while(option!='i'&&option!='p'){
                cout<<"Please input i or p\n";
                cin>>option;
                cin.ignore(256,'\n');
            }
        
        if(option == 'i'){
            if(des_int!=-1){
            cout<<"Do you already have your destination set?(yes/no)\n> ";
            cin>>set;
            cin.ignore(256,'\n');
            while(set!="yes"&&set!="no"){
                cout<<"Please input yes or no\n";
                cin>>set;
                cin.ignore(256,'\n');
            }
            }
            
            else if(des_int==-1){
                set="no";
            }
        
        if(set == "no"){
        cout<<endl<<"Specify the first street of the destination (input exit to go back to map)\n> ";
        getline(cin,input);
        if(input=="exit"){
            continue;
        }
        street_list = find_street(input);
        size = street_list.size();
        
        while(size==0){
            cout<<"Invalid input\nTry again"<<endl<<"> ";
            getline(cin,input);
        if(input=="exit"){
            continue;
        }
        street_list = find_street(input);
        size = street_list.size();
        }
        cout<<endl<<"Specify the second street (input exit to go back to map)"<<endl<<"> ";
        getline(cin,input);
        if(input=="exit"){
            continue;
        }
        street_list2 = find_street(input);
        size = street_list2.size();
        while(size==0){
            cout<<"Invalid input\nTry again"<<endl<<"> ";
            getline(cin,input);
        if(input=="exit"){
            continue;
        }
        street_list2 = find_street(input);
        size = street_list2.size();
        }
        potential_ints = find_common_intersection(street_list,street_list2);
        if(potential_ints.size()==0){
            cout<<"No such intersection!\n";
            continue;
        }
        if(potential_ints.size()==1){
        second_intersection = potential_ints[0];
        }
        else if(potential_ints.size()>1){
            cout<<"Did you mean: "<<endl;
            for(unsigned i =0;i<potential_ints.size();i++){
                        cout<<(i+1)<<". "<<getIntersectionName(potential_ints[i])<<endl;
                    }
            cout<<"Input number to choose intersection\n> ";
            unsigned number;
             cin>>number;
            while(number<1||number>potential_ints.size()){
                cout<<"Please input a number between 1 and "<<potential_ints.size()<<endl<<"> ";
                cin>>number;
            }
            cin.ignore(256,'\n');
            second_intersection = potential_ints[number-1];
        }
        
        cout<<"Destination intersection set to be "<<getIntersectionName(second_intersection)<<endl;
        }
        
        
        else if(set=="yes"){
            second_intersection = des_int;
        }
        
        starting_int = first_intersection;
        des_int = second_intersection;
        the_path = find_path_between_intersections(starting_int,des_int);
        auto_zoom();
        }
        
        else if(option=='p'){
            cout<<"Please input the name of the point of interest (input exit to go back to map)\n> ";
            string POI_name;
            getline(cin,POI_name);
            if(POI_name=="exit"){
            continue;
            }
            vector<string> POIs = find_POI(POI_name);
            while(POIs.size()==0){
                cout<<"No such point of interest\nTry again\n>";
                getline(cin,POI_name);
                if(POI_name=="exit"){
                 continue;
                }
                POIs = find_POI(POI_name);
            }
            
            
            cout<<"Did you mean:\n";
            for(unsigned i =0; i<POIs.size();i++){
                cout<<i+1<<". "<<POIs[i]<<endl;
            }
            cout<<"Input number to choose the point of interest\n> ";
            unsigned number;
            cin>>number;
            while(number<0||number>POIs.size()){
                cout<<"Please input a number between 1 and "<<POIs.size()<<endl<<"> ";
                cin>>number;
            }
            cin.ignore(256,'\n');
            unsigned POI_id = find_nearest_POI(getIntersectionPosition(first_intersection),POIs[number-1]);
            shown_POI_names[POI_id]=1;
            starting_int = first_intersection;
            des_int = find_nearest_intersection(getPointOfInterestPosition(POI_id));
            the_path = find_path_between_intersections(starting_int,des_int);
            auto_zoom();
        }
    }
}
void buttons() {
    //create all the buttons needed
    create_button("Window", "POI", toggle_POI);
    create_button("Window", "Clear", clear);
    create_button("POI", "Speed Limit", speed_limit);
    create_button("POI", "Aligned Names", align);
    create_button("Speed Limit", "Start", mark_start);
    create_button("Start", "End", mark_end);
    create_button("End", "Find Path", find_path);
    create_button("Find Path","Help",help_button);
}



void draw_screen(void) {
    //draw screen by implementing the functions below
    clearscreen();
    unsigned zoom = zoom_extent();
    draw_features();
    draw_streets(zoom);
    draw_POI(zoom);
    mark_intersections();
    draw_path_ends(zoom);
    highlight_path(the_path);
    print_street_names(zoom);
    help_window();
}

void draw_features() {
    //draw different attributes on the map
    unsigned feature_count = getFeatureCount();
    for (unsigned i = 0; i < feature_count; i++) {
        //check natural attributes
        string attribute = getFeatureAttribute(i, "natural");
        if (attribute == "wood") {
            t_color color(200, 220, 200);
            draw_feature(i, color, 1);
        }

        if (attribute == "grassland") {
            draw_feature(i, GREEN, 1);
        }

        if (attribute == "beach") {
            t_color color(200, 164, 8);
            draw_feature(i, color, 1);
        }
        //check water attributes
        attribute = getFeatureAttribute(i, "water");
        if (attribute == "lake" || attribute == "pond") {
            draw_feature(i, CYAN, 1);
        }

        //check land attributes
        attribute = getFeatureAttribute(i, "land");
        if (attribute == "island") {
            draw_feature(i, DARKGREY, 1);
        }
        //check leisure attributes
        attribute = getFeatureAttribute(i, "leisure");
        if ((attribute == "park" || attribute == "garden")) {
            t_color color(202, 223, 170);
            draw_feature(i, color, 1);
        }
        //check waterway attributes

        attribute = getFeatureAttribute(i, "waterway");
        if ((attribute == "stream" || attribute == "boatyard")) {
            t_color color(0, 168, 249);
            draw_feature(i, color, 1);
        }
        if (attribute == "river") {
            t_color color(0, 168, 249);
            draw_feature(i, color, 2);
        }

    }
}

void draw_open_feature(t_point* points, unsigned number, t_color color) {
    //draw specific open features with specified color
    for (unsigned i = 0; i < number - 1; i++) {
        setcolor(color);
        drawline(points[i], points[i + 1]);
    }
}

//function that is used to draw closed features

void draw_feature(unsigned feature_id, t_color color, int line_width) {
    setlinewidth(line_width);
    unsigned point_number = getFeaturePointCount(feature_id);
    //construct a t_points array for drawing poly
    t_point points[point_number];
    //fill data to t_point array
    for (unsigned j = 0; j < point_number; j++) {
        LatLon position = getFeaturePoint(feature_id, j);
        points[j].x = position.lon;
        points[j].y = position.lat;
    }
    setcolor(color);
    //check if it is open feature
    if ((points[0].x == points[point_number - 1].x) && (points[0].y == points[point_number - 1].y)) {
        fillpoly(points, point_number);
    } else {
        draw_open_feature(points, point_number, t_color(0, 168, 249));
    }
    setlinewidth(1);
}

t_bound_box find_bound() {
    //find the initial bound of the map, determined by the farthest points of interest
    unsigned POI_number = getNumberOfPointsOfInterest();
    double left, right, top, bottom;
    bool first = true;
    for (unsigned i = 0; i < POI_number; i++) {
        LatLon current = getPointOfInterestPosition(i);
        //Initializing the original point and use this to compare
        if (first) {
            first = false;
            left = current.lon;
            right = current.lon;
            top = current.lat;
            bottom = current.lat;
            continue;
        }
        //Comparison
        if (current.lon < left)
            left = current.lon;
        if (current.lon > right)
            right = current.lon;
        if (current.lat > top)
            top = current.lat;
        if (current.lat < bottom)
            bottom = current.lat;
    }
    t_bound_box bound(left, bottom, right, top);
    return bound;
}

unsigned zoom_extent(void) {
    //determine how much the map is zoomed
    if (get_visible_world().area() == original_area) {
        return 1;
    }
    if (get_visible_world().area() <= original_area * pow(0.36, 9)) {
        return 10;
    }
    if (get_visible_world().area() <= original_area * pow(0.36, 8)) {
        return 9;
    }
    if (get_visible_world().area() <= original_area * pow(0.36, 7)) {
        return 8;
    }
    if (get_visible_world().area() <= original_area * pow(0.36, 6)) {
        return 7;
    }
    if (get_visible_world().area() <= original_area * pow(0.36, 5)) {
        return 6;
    }
    if (get_visible_world().area() <= original_area * pow(0.36, 4)) {
        return 5;
    }
    if (get_visible_world().area() <= original_area * pow(0.36, 3)) {
        return 4;
    }
    if (get_visible_world().area() <= original_area * pow(0.36, 2)) {
        return 3;
    }
    if (get_visible_world().area() <= original_area * pow(0.36, 1)) {
        return 2;
    }
    return 1;
}

void group_streets() {
    //categorize streets into 9 groups based on their length, which decides when the streets appear
    unsigned number_of_streets = getNumberOfStreets();
    unsigned count;
    for (count = 0; count < number_of_streets; count++) {
        string name = getStreetName(count);
        double length = find_street_length(name);
        //for some streets that has the name unknown, group them in level nine
        if (name == "(unknown)") {
            grouped_streets.push_back(9);
            continue;
        }
        //street length more than 20km
        if (length > 20000) {
            grouped_streets.push_back(1);
            continue;
        }
        //street length more than 10km
        if (length > 10000) {
            grouped_streets.push_back(2);
            continue;
        }
        //street length more than 8km
        if (length > 8000) {
            grouped_streets.push_back(3);
            continue;
        }
        //street length more than 6km
        if (length > 6000) {
            grouped_streets.push_back(4);
            continue;
        }
        //street length more than 4km
        if (length > 4000) {
            grouped_streets.push_back(5);
            continue;
        }
        //street length more than 3km
        if (length > 3000) {
            grouped_streets.push_back(6);
            continue;
        }
        //street length more than 1km
        if (length > 1000) {
            grouped_streets.push_back(7);
            continue;
        }
        //street length more than 0.5km
        if (length > 500) {
            grouped_streets.push_back(8);
            continue;
        } else {
            grouped_streets.push_back(9);
            continue;
        }
    }
}

void draw_streets(unsigned zoom) {
    //draw streets that should appear, which means they belong to the group to be shown
    //in this zoom level
    unsigned long first_intersection_id, second_intersection_id;
    unsigned number_of_curvepoints;
    unsigned number = getNumberOfStreetSegments();
    for (unsigned street_segment_id = 0; street_segment_id < number; street_segment_id++) {

        unsigned street_id = getStreetSegmentStreetID(street_segment_id);

        if (grouped_streets[street_id] <= zoom + 1) {
            //first determine if there are curve points
            number_of_curvepoints = getStreetSegmentCurvePointCount(street_segment_id);
            first_intersection_id = getStreetSegmentEnds(street_segment_id).from;
            second_intersection_id = getStreetSegmentEnds(street_segment_id).to;
            double xstart, ystart, xfinish, yfinish;
            //find the position of the two intersections
            xstart = getIntersectionPosition(first_intersection_id).lon;
            ystart = getIntersectionPosition(first_intersection_id).lat;
            xfinish = getIntersectionPosition(second_intersection_id).lon;
            yfinish = getIntersectionPosition(second_intersection_id).lat;
            //condition when the number of curve points is 0
            if (number_of_curvepoints == 0) {
                //for different levels of streets, set different linewidth
                setcolor(segment_color[street_segment_id]);
                setlinewidth(5);
                if (zoom < 4 && grouped_streets[street_id] == zoom) {
                    setlinewidth(3);
                }
                if (grouped_streets[street_id] == zoom + 1) {
                    setlinewidth(1);
                }
                drawline(xstart, ystart, xfinish, yfinish);

            } else {
                //when the segment has curve points
                LatLon firstcurvepoint = getStreetSegmentCurvePoint(street_segment_id, 0);
                setlinewidth(5);
                if (zoom < 4 && grouped_streets[street_id] == zoom) {
                    setlinewidth(3);
                }
                if (grouped_streets[street_id] == zoom + 1) {
                    setlinewidth(1);
                }
                //draw the line from the first intersection to the first curve point
                setcolor(segment_color[street_segment_id]);
                drawline(xstart, ystart, firstcurvepoint.lon, firstcurvepoint.lat);
                for (unsigned i = 1; i < number_of_curvepoints; i++) {
                    //draw the line between curve points
                    LatLon curvepoint1 = getStreetSegmentCurvePoint(street_segment_id, i - 1);
                    LatLon curvepoint2 = getStreetSegmentCurvePoint(street_segment_id, i);
                    setcolor(segment_color[street_segment_id]);
                    setlinewidth(5);
                    if (zoom < 4 && grouped_streets[street_id] == zoom) {
                        setlinewidth(3);
                    }
                    if (grouped_streets[street_id] == zoom + 1) {
                        setlinewidth(1);
                    }
                    drawline(curvepoint1.lon, curvepoint1.lat, curvepoint2.lon, curvepoint2.lat);

                }
                //draw the line from the last curve point to the last intersection 
                LatLon lastcurvepoint = getStreetSegmentCurvePoint(street_segment_id, number_of_curvepoints - 1);
                setcolor(segment_color[street_id]);
                setlinewidth(5);
                if (zoom < 4 && grouped_streets[street_id] == zoom) {
                    setlinewidth(3);
                }
                if (grouped_streets[street_id] == zoom + 1) {
                    setlinewidth(1);
                }
                drawline(lastcurvepoint.lon, lastcurvepoint.lat, xfinish, yfinish);

            }
        } else {
            continue;
        }

    }
    setlinewidth(1);
}

void draw_POI(unsigned zoom) {
    //draw all points of interest after the user zooms eight times
    if (zoom < 8 || !POI_shown) {
        return;
    }
    unsigned number_of_POI = getNumberOfPointsOfInterest();
    for (unsigned count = 0; count < number_of_POI; count++) {
        LatLon position = getPointOfInterestPosition(count);
        drawarc(position.lon, position.lat, 0.00005, 0, 360);
        setcolor(MAGENTA);
        if (shown_POI_names[count] == 1) {
            setcolor(RED);
        }
        fillarc(position.lon, position.lat, 0.00005, 0, 360);

        if (shown_POI_names[count] == 1) {
            setfontsize(10);
            setcolor(BLUE);
            drawtext(position.lon, position.lat, getPointOfInterestName(count), 1000, 1000);
            setcolor(BLACK);
        }
    }
    return;
}

void act_on_button_press(float x, float y, t_event_buttonPressed event) {
    //click on a point of interest shows its name and turns its color to red. click at a intersection marks it. Click again undoes.
    if (zoom_extent() < 7) {
        return;
    }
    LatLon click;
    click.lon = x;
    click.lat = y;
    unsigned POI_id = find_nearest_point_of_interest(click);
    LatLon POI_position = getPointOfInterestPosition(POI_id);
    if (inside_range(POI_position, click)) {
        if (shown_POI_names[POI_id] == 0) {
            setfontsize(10);
            setcolor(RED);
            fillarc(POI_position.lon, POI_position.lat, 0.00005, 0, 360);
            setcolor(BLUE);
            drawtext(POI_position.lon, POI_position.lat, getPointOfInterestName(POI_id), 1000, 1000);
            update_message(getPointOfInterestName(POI_id) + " (click again to dismiss name)");
            setcolor(BLACK);
            shown_POI_names[POI_id] = 1;
            
            
            last_marked_intersection =-1;
            
        } else if (shown_POI_names[POI_id] == 1) {
            shown_POI_names[POI_id] = 0;
           
            draw_screen();
            update_message("Name dismissed");
        }
    } else {
        unsigned intersection_id = find_nearest_intersection(click);
        LatLon intersection_position = getIntersectionPosition(intersection_id);
        if (inside_range(intersection_position, click)) {
            if (marked_intersections[intersection_id] == 0) {
                setcolor(RED);
                drawarc(intersection_position.lon, intersection_position.lat, 0.0001, 0, 360);
                marked_intersections[intersection_id] = 1;
                marked_intersection_number++;
                string message = "marked intersection: " + getIntersectionName(intersection_id) + to_string(intersection_id)+"  (click again to unmark)";
                update_message(message);
                last_marked_intersection=intersection_id;
                setcolor(BLACK);
            } 
            else if (marked_intersections[intersection_id] == 1) {
                marked_intersections[intersection_id] = 0;
                string message = "unmarked intersection: " + getIntersectionName(intersection_id);
                marked_intersection_number--;
                update_message(message);
                last_marked_intersection=-1;
                draw_screen();
            }
        }
    }
    return;
}

unsigned find_nearest_point_of_interest(LatLon my_position) {
    unsigned long long number_of_interests = getNumberOfPointsOfInterest();
    unsigned long long count;
    unsigned long long interest_id = 0;
    double distance;
    double mindistance = find_distance_between_two_points(my_position, getPointOfInterestPosition(0));
    //compare the distance between your position and all of the interests and find the closet one
    for (count = 1; count < number_of_interests; count++) {
        distance = find_distance_between_two_points(my_position, getPointOfInterestPosition(count));
        if (distance < mindistance) {
            mindistance = distance;
            interest_id = count;
        }
    }
    //return the id of the nearest point of interest
    return interest_id;
}

bool inside_range(LatLon point1, LatLon point2) {
    //check if the click and the intersection/point of interest are within a distance of 0.0001
    double distance = (point1.lon - point2.lon)*(point1.lon - point2.lon);
    distance = distance + (point1.lat - point2.lat)*(point1.lat - point2.lat);
    distance = sqrt(distance);
    if (distance <= 0.0001) {
        return true;
    } else {
        return false;
    }
}

void intialize_status() {
    //initialize all data structures and switches
    unsigned number = getNumberOfPointsOfInterest();
    for (unsigned count = 0; count < number; count++) {
        shown_POI_names.push_back(0);
    }
    number = getNumberOfIntersections();
    for (unsigned count = 0; count < number; count++) {
        marked_intersections.push_back(0);
    }
    number = getNumberOfStreetSegments();
    for (unsigned count = 0; count < number; count++) {
        segment_color.push_back(WHITE);
    }
    POI_shown = true;
    aligned_names = false;
    marked_intersection_number = 0;
    starting_int =-1;
    des_int=-1;
    last_marked_intersection=-1;
    help_enabled = false;
    return;
}

unsigned find_nearest_intersection(LatLon my_position) {
    //find the nearest intersection of a click
    unsigned long long number_of_intersections = getNumberOfIntersections();
    unsigned long long count;
    unsigned long long intersection_id = 0;
    double distance;
    double mindistance = find_distance_between_two_points(my_position, getIntersectionPosition(0));
    //compare the distance between your position and all of the interests and find the closet one
    for (count = 1; count < number_of_intersections; count++) {
        distance = find_distance_between_two_points(my_position, getIntersectionPosition(count));
        if (distance < mindistance) {
            mindistance = distance;
            intersection_id = count;
        }
    }
    return intersection_id;
}

void mark_intersections() {
    //mark all intersections that have been marked by the user when re-drawing the screen
    unsigned number_of_intersections = getNumberOfIntersections();
    setcolor(RED);
    for (unsigned count = 0; count < number_of_intersections; count++) {
        if (marked_intersections[count] == 1) {
            LatLon intersection_position = getIntersectionPosition(count);
            drawarc(intersection_position.lon, intersection_position.lat, 0.0001, 0, 360);
        }
    }
    setcolor(BLACK);
    return;
}

void toggle_POI(void (*drawscreen_ptr) (void)) {
    //toggle points of interest on or off
    if (POI_shown) {
        POI_shown = false;
        update_message("Points of Interest off");
        draw_screen();
        return;
    } else if (!POI_shown) {
        POI_shown = true;
        update_message("Points of Interest on");
        draw_screen();
        return;
    }
}

void clear(void (*drawscreen_ptr) (void)) {
    //implemented for the button "Clear" to clear the screen
    unsigned number = getNumberOfPointsOfInterest();
    for (unsigned count = 0; count < number; count++) {
        shown_POI_names[count] = 0;
    }
    number = getNumberOfIntersections();
    for (unsigned count = 0; count < number; count++) {
        marked_intersections[count] = 0;
    }
    number = getNumberOfStreetSegments();
    for (unsigned count = 0; count < number; count++) {
        segment_color[count] = WHITE;
    }
    marked_intersection_number = 0;
    starting_int =-1;
    des_int=-1;
    last_marked_intersection=-1;
    help_enabled = false;
    the_path.clear();
    draw_screen();
    update_message("All cleared");
    return;
}

void speed_limit(void (*drawscreen_ptr) (void)) {
    //implemented for the button "speed limit" to show the speed limit of a specific segement
    if (marked_intersection_number < 2) {
        update_message("Two intersections have to be marked!");
        return;
    } else if (marked_intersection_number > 2) {
        update_message("More than two intersections have been marked!");
        return;
    }
    unsigned intersection1;
    unsigned intersection2;
    vector<unsigned> segments_of_intersection1;
    vector<unsigned> segments_of_intersection2;
    bool first = true;
    unsigned total_intersections = marked_intersections.size();
    unsigned count;
    for (count = 0; count < total_intersections; count++) {
        if (marked_intersections[count] == 1 && first) {
            intersection1 = count;
            first = false;
            continue;
        } else if (marked_intersections[count] == 1 && !first) {
            intersection2 = count;
            break;
        }
    }
    string name1 = getIntersectionName(intersection1);
    string name2 = getIntersectionName(intersection2);
    segments_of_intersection1 = intersection_segment_table.find(intersection1)->second;
    segments_of_intersection2 = intersection_segment_table.find(intersection2)->second;
    unsigned size1 = segments_of_intersection1.size();
    unsigned size2 = segments_of_intersection2.size();
    unsigned i, j;
    unsigned common_segment;
    bool found = false;
    for (i = 0; i < size1; i++) {
        for (j = 0; j < size2; j++) {
            if (segments_of_intersection1[i] == segments_of_intersection2[j]) {
                common_segment = segments_of_intersection1[i];
                found = true;
                break;
            }
        }
        if (found) {
            break;
        }
    }
    if (found) {
        int speed = (int) getStreetSegmentSpeedLimit(common_segment);
        string message = "The speed limit between the two marked intersections is " +
                to_string(speed) + "km/h";
        update_message(message);
        return;
    } else if (!found) {
        update_message("The two marked intersections are not directly connected!");
        return;
    }

}

void align(void (*drawscreen_ptr) (void)) {
    //implemented for the button "aligned names"
    if (aligned_names) {
        aligned_names = false;
        update_message("All street names set to be horizontal");
        draw_screen();
        return;
    } else {
        aligned_names = true;
        update_message("All street names aligned to street segments");
        draw_screen();
    }
}

void print_street_names(unsigned zoom) {
    //print the street name of streets that satisfy certain conditions
    if (zoom >= 3) { //print names after 3 clicks on zoom in
        unsigned number_of_streets = getNumberOfStreets();
        unsigned count;
        for (count = 0; count < number_of_streets; count++) {
            if ((zoom == 3 && grouped_streets[count] != 1) || (zoom == 4 && grouped_streets[count] > 1)) {
                continue;
            }
            if (grouped_streets[count] <= zoom - 1 || zoom == 9) {
                string name = getStreetName(count);
                if (name == "(unknown)") { //does not print names for unknown streets
                    continue;
                }


                unsigned number_of_segments = SegmentsOfStreet.find(name)->second.size();

                for (unsigned i = 0; i < number_of_segments; i++) {
                    //print street names belong to highway after the user zoom in 8 times
                    unsigned target_segment_id = (SegmentsOfStreet.find(name)->second)[i];
                    if (getStreetSegmentSpeedLimit(target_segment_id) > 60 && zoom <= 8) {
                        continue;
                    }

                    if (highway_segment[target_segment_id] == 1 && zoom <= 9) {
                        continue;
                    }

                    StreetSegmentEnds ends = getStreetSegmentEnds(target_segment_id);
                    LatLon end1, end2;
                    end1 = getIntersectionPosition(ends.from);
                    end2 = getIntersectionPosition(ends.to);
                    t_bound_box current_world = get_visible_world();
                    if (!current_world.intersects(end1.lon, end1.lat) || !current_world.intersects(end2.lon, end2.lat)) {

                        continue;
                        //only print the name on a segment with both ends in bound
                    }
                    if (getStreetSegmentCurvePointCount((SegmentsOfStreet.find(name)->second)[i]) != 0) {
                        end2 = getStreetSegmentCurvePoint(SegmentsOfStreet.find(name)->second[i], 0);
                    }
                    double target_x, target_y;
                    target_x = ((end1.lon)+(end2.lon)) / 2;
                    target_y = ((end1.lat)+(end2.lat)) / 2;
                    double dx, dy;
                    dy = (end1.lat - end2.lat);
                    dx = (end1.lon - end2.lon);
                    if (aligned_names) {
                        double angle;
                        angle = 180 * atan(dy / dx) / 3.1415926;
                        settextrotation(angle);
                        if (getStreetSegmentOneWay(target_segment_id) && grouped_streets[count] > 2) {
                            if (end1.lon <= end2.lon) {
                                t_color font_color(108, 100, 86);
                                setcolor(font_color);
                                setfontsize(8);
                                drawtext(target_x, target_y, name + " (>>)", 10000, 10000);
                                break;
                            } else {
                                t_color font_color(108, 100, 86);
                                setcolor(font_color);
                                setfontsize(8);
                                if(in_path(target_segment_id)){
                                setcolor(BLACK);
                                }
                                drawtext(target_x, target_y, name + " (<<)", 10000, 10000);
                                break;
                            }
                        }
                    }
                    t_color font_color(108, 100, 86);
                    setcolor(font_color);
                    if(in_path(target_segment_id)){
                        setcolor(BLACK);
                    }
                    setfontsize(8);
                    drawtext(target_x, target_y, name, 10000, 10000);
                    break;
                }
            }
        }
    }
    setcolor(BLACK);
    settextrotation(0);
}

vector<unsigned> find_street(string input){
    unsigned number = getNumberOfStreets();
    unsigned max_match=0;
    vector<unsigned> matching_streets;
    unsigned input_size = input.size();
    
    for(unsigned i = 0;i<number;i++){
        
        unsigned current_match=0;
        string current_street = getStreetName(i);
        unsigned output_size = current_street.size();
        
        for(unsigned j=0;(j<input_size) && (j<output_size);j++){
            
            if(current_street[j]==input[j]){
                current_match++;
            }
            else{
                break;
            }
        }
        if(current_match>max_match){
            matching_streets.clear();
            matching_streets.push_back(i);
            max_match = current_match;
        }
        else if(current_match==max_match){
            matching_streets.push_back(i);
        }
        
    }
    if(max_match==0){
        vector<unsigned> empty;
        return empty;
    }
    return matching_streets;
}

int find_intersection(string first_street, string second_street){
    vector<unsigned> first_intersections = street_intersection_table.find(first_street)->second;
    vector<unsigned> second_intersections = street_intersection_table.find(second_street)->second;
    bool found = false;
    int common_intersection;
    unsigned size1 = first_intersections.size();
    unsigned size2 = second_intersections.size();
    for(unsigned i = 0; i<size1; i++){
        
        for(unsigned j = 0; j<size2; j++){
            if(first_intersections[i] == second_intersections[j]){
                found = true;
                common_intersection = first_intersections[i];
                break;
            }
        }
        
        if(found){
            break;
        }
    }
    if(found){
        return common_intersection;
    }
    else if(!found){
        return -1;
    }
}

void draw_path_ends(unsigned zoom){
            double radius=0;
            if(zoom==1){
                radius = 0.003;
            }
            else if(zoom==2){
                radius = 0.0015;
            }
            else if(zoom==3){
                radius = 0.001;
            }
            else if(zoom==4){
                radius = 0.001;
            }
            else if(zoom==5){
                radius = 0.0008;
            }
            else if(zoom==6){
                radius = 0.0005;
            }
            else if(zoom==7){
                radius = 0.0002;
            }
            else if(zoom==8){
                radius = 0.0001;
            }
            else if(zoom==9){
                radius = 0.00005;
            }
            else if(zoom>=10){
                radius = 0.00003;
            }
            if(starting_int!=-1){
            LatLon intersection_position = getIntersectionPosition(starting_int);
            drawarc(intersection_position.lon, intersection_position.lat, radius, 0, 360);
            setcolor(GREEN);
            fillarc(intersection_position.lon, intersection_position.lat, radius, 0, 360);
            }
            if(des_int!=-1){
            LatLon intersection_position = getIntersectionPosition(des_int);
            drawarc(intersection_position.lon, intersection_position.lat, radius, 0, 360);
            setcolor(RED);
            fillarc(intersection_position.lon, intersection_position.lat, radius, 0, 360);
            }
    return;
}

void mark_start(void (*drawscreen_ptr) (void)){
    if(last_marked_intersection!=-1){
        starting_int = last_marked_intersection;
        string message = "Intersection " + getIntersectionName(starting_int) + " marked as starting point";
        update_message(message);
        marked_intersections[starting_int]=0;
        marked_intersection_number--;
        the_path.clear();
        draw_screen();
        return;
    }
    else{
        update_message("Click on the intersection to mark first");
        return;
    }
}

void mark_end(void (*drawscreen_ptr) (void)){
    if(last_marked_intersection!=-1){
        des_int = last_marked_intersection;
        string message = "Intersection " + getIntersectionName(des_int) + " marked as destination";
        update_message(message);
        marked_intersections[des_int]=0;
        marked_intersection_number--;
        the_path.clear();
        draw_screen();
        return;
    }
    else{
        update_message("Click on the intersection or a point of interest to mark first");
        return;
    }
}


vector<string> find_POI(string name){
    vector<string> POI_list;
    unsigned total_POI = getNumberOfPointsOfInterest();
    unsigned max_match=0;
    unsigned name_size = name.size();
    
    for(unsigned i =0; i<total_POI;i++){
        unsigned current_match=0;
        string current_name = getPointOfInterestName(i);
        unsigned current_size = current_name.size();
        for(unsigned j = 0; (j<name_size)&&(j<current_size); j++){
            if(name[j]==current_name[j]){
                current_match++;
            }
            else if(name[j]!=current_name[j]){
                break;
            }
        }
        if(current_match>max_match){
            POI_list.clear();
            POI_list.push_back(current_name);
            max_match = current_match;
            continue;
        }
        else if(current_match==max_match){
            unsigned current_size = POI_list.size();
            bool repeated = false;
            for(unsigned j =0;j<current_size;j++){
                if(current_name == POI_list[j]){
                    repeated = true;
                    break;
                }
            }
            if(repeated){
                continue;
            }
             POI_list.push_back(current_name);
             continue;
        }
        else{
            continue;
        }
    }
    if(max_match==0){
        vector<string> empty;
        return empty;
    }
    return POI_list;
}

unsigned find_nearest_POI(LatLon start,string POI_name){
    vector<unsigned> locations = POI_id_list.find(POI_name)->second;
    unsigned number_of_locations = locations.size();
    double min_dis = find_distance_between_two_points(start,getPointOfInterestPosition(locations[0]));
    unsigned target_location = locations[0];
    for(unsigned i =1;i<number_of_locations;i++){
        double current_dis = find_distance_between_two_points(start,getPointOfInterestPosition(locations[i]));
        if(min_dis>current_dis){
            target_location = locations[i];
            min_dis = current_dis;
            continue;
        }
    }
    return target_location;
}

void find_path(void (*drawscreen_ptr) (void)){
    the_path = find_path_between_intersections(starting_int,des_int);
    auto_zoom();
    draw_screen();
    return;
}

void highlight_path(vector<unsigned> path){
    unsigned size = path.size();
    unsigned long first_intersection_id, second_intersection_id;
    unsigned number_of_curvepoints;
    for(unsigned i=0;i<size;i++){
        number_of_curvepoints = getStreetSegmentCurvePointCount(path[i]);
            first_intersection_id = getStreetSegmentEnds(path[i]).from;
            second_intersection_id = getStreetSegmentEnds(path[i]).to;
            double xstart, ystart, xfinish, yfinish;
            //find the position of the two intersections
            xstart = getIntersectionPosition(first_intersection_id).lon;
            ystart = getIntersectionPosition(first_intersection_id).lat;
            xfinish = getIntersectionPosition(second_intersection_id).lon;
            yfinish = getIntersectionPosition(second_intersection_id).lat;
            //condition when the number of curve points is 0
            if (number_of_curvepoints == 0) {
                setcolor(ORANGE);
                setlinewidth(5);
                drawline(xstart, ystart, xfinish, yfinish);
            } 
            else {
                //when the segment has curve points
                LatLon firstcurvepoint = getStreetSegmentCurvePoint(path[i], 0);
                setlinewidth(5);
                setcolor(ORANGE);
                drawline(xstart, ystart, firstcurvepoint.lon, firstcurvepoint.lat);
                for (unsigned j= 1; j < number_of_curvepoints; j++) {
                    //draw the line between curve points
                    LatLon curvepoint1 = getStreetSegmentCurvePoint(path[i], j - 1);
                    LatLon curvepoint2 = getStreetSegmentCurvePoint(path[i], j);
                    setcolor(ORANGE);
                    setlinewidth(5);
                    drawline(curvepoint1.lon, curvepoint1.lat, curvepoint2.lon, curvepoint2.lat);

                }
                //draw the line from the last curve point to the last intersection 
                LatLon lastcurvepoint = getStreetSegmentCurvePoint(path[i], number_of_curvepoints - 1);
                setcolor(ORANGE);
                setlinewidth(5);
                drawline(lastcurvepoint.lon, lastcurvepoint.lat, xfinish, yfinish);
            }
}
    if(starting_int!=-1&&des_int!=-1){
    double travel_time = compute_path_travel_time(the_path);
    string message = "The path shown takes approximately "+to_string(travel_time)+" minute(s) with "+to_string(turns)+" turn(s)";
    update_message(message);
    }
    return;
}
vector<unsigned> find_common_intersection(vector<unsigned> candidates1, vector<unsigned> candidates2){
    unsigned size1 = candidates1.size();
    unsigned size2 = candidates2.size();
    vector<unsigned> result;
    for(unsigned i = 0; i<size1;i++){
        for(unsigned j =0; j<size2;j++){
            string name1 = getStreetName(candidates1[i]);
            string name2 = getStreetName(candidates2[j]);
            int intersection_id = find_intersection(name1,name2);
            if(intersection_id!=-1){
                result.push_back(intersection_id);
            }
        }
    }
    return result;
}




void help_button(void (*drawscreen_ptr) (void)){
    if(!help_enabled){
        help_enabled = true;
        help_window();
    }
    else if(help_enabled){
        help_enabled = false;
        draw_screen();
    }
    return;
}

void help_window(){
    if(!help_enabled){
        return;
    }
    unsigned zoom = zoom_extent();
    t_bound_box current = get_visible_world();
    float left,right,top,bottom;
    left = current.left() + 0.1* (current.right() - current.left());
    right = current.right() - 0.1 *(current.right() - current.left());
    bottom = current.bottom() + 0.1*(current.top() - current.bottom());
    top = current.top() - 0.1*(current.top() - current.bottom());
    t_bound_box text_box(left,bottom,right,top);
    t_point points[4];
    points[0].x = left;
    points[0].y = bottom;
    points[1].x = left;
    points[1].y = top;
    points[2].x = right;
    points[2].y = top;
    points[3].x = right;
    points[3].y = bottom;
    setcolor(WHITE);
    fillpoly(points,4);
    double offset;
    if(zoom==1){
        offset =0.02;
    }
    if(zoom==2){
        offset=0.01;
    }
    if(zoom==3){
        offset = 0.008;
    }
    if(zoom==4){
        offset = 0.006;
    }
    if(zoom==5){
        offset = 0.004;
    }
    if(zoom==6){
        offset = 0.002;
    }
    if(zoom==7){
        offset = 0.001;
    }
    if(zoom==8){
        offset = 0.0008;
    }
    if(zoom>=9){
        offset = 0.0004;
    }
    setfontsize(15);
    setcolor(BLACK);
    string message;
    message = "1. Click near an intersection to mark, or near a point of interest to see its name";
    drawtext(text_box.get_xcenter(),text_box.get_ycenter()+4*offset,message,10000,10000);
    message = "2. Click clear to Clear all changes made to the map;";
    drawtext(text_box.get_xcenter(),text_box.get_ycenter()+3*offset,message,10000,10000);
    message = "3.Click POI to toggle points of interset on or off;";
    drawtext(text_box.get_xcenter(),text_box.get_ycenter()+2*offset,message,10000,10000);
    message = "4. Click Aligned Name to set street names horizontal or aligned with the street segment;";
    drawtext(text_box.get_xcenter(),text_box.get_ycenter()+offset,message,10000,10000);
    message = "5. Click Speed Limit for the speed limit between the segment with two marked intersections;";
    drawtext(text_box.get_xcenter(),text_box.get_ycenter(),message,10000,10000);
    message = "6. Click Start to set the starting point after marking an intersection;";
    drawtext(text_box.get_xcenter(),text_box.get_ycenter()-offset,message,10000,10000);
    message = "7. Click End to set the destination after marking an intersection;";
    drawtext(text_box.get_xcenter(),text_box.get_ycenter()-2*offset,message,10000,10000);
    message = "8. Click Find Path to find the best path between the starting point and the destination;";
    drawtext(text_box.get_xcenter(),text_box.get_ycenter()-3*offset,message,10000,10000);
    message = "9. Click Help to view or dismiss this help window;";
    drawtext(text_box.get_xcenter(),text_box.get_ycenter()-4*offset,message,10000,10000);
    message = "10. Click proceed to input starting point and destination information.";
    drawtext(text_box.get_xcenter(),text_box.get_ycenter()-5*offset,message,10000,10000);
}

void auto_zoom(){
    if(starting_int==-1||des_int==-1){
        return;
    }
    LatLon st_pos = getIntersectionPosition(starting_int);
    LatLon des_pos = getIntersectionPosition(des_int);
    float left,right,top,bottom;
    float lon_dif = abs(st_pos.lon-des_pos.lon);
    float lat_dif = abs(st_pos.lat-des_pos.lat);
    float mid_lon = (st_pos.lon + des_pos.lon)/2;
    float mid_lat = (st_pos.lat + des_pos.lat)/2;
    left = mid_lon - lon_dif;
    right = mid_lon + lon_dif;
    top = mid_lat + lat_dif;
    bottom = mid_lat - lat_dif;
    set_visible_world(left, bottom, right, top);
}

bool in_path(unsigned segment_id){
    unsigned size = the_path.size();
    for(unsigned i = 0;i<size;i++){
        if(segment_id == the_path[i]){
            return true;
        }
    }
    return false;
}