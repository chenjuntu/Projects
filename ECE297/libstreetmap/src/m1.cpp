#include "m1.h"
#include <unordered_map>
#include "StreetsDatabaseAPI.h"
#include "LatLon.h"
#include "StreetSegmentEnds.h"
#include <iostream>


#include <cmath>
using namespace std;


#include "StreetsDatabaseAPI.h"
#include "m3.h"
#include <unordered_map>



unordered_map<string,unsigned> intersectionTable;//pair intersection name with its ID
unordered_map<string,unsigned> streetTable;//pair street name with its ID
unordered_map<string,vector<unsigned>> SegmentsOfStreet;//pair a street with all its segments
unordered_map<unsigned,vector<unsigned>> intersection_segment_table;//pair a intersection with all connected segments
unordered_map<unsigned,vector<string>> intersection_street_table;//pair a intersection with all connected street names
unordered_map<string,vector<unsigned>> adjacent_intersection_table;//pair a intersection with all its adjacent ones
unordered_map<unsigned,double> segment_length_table;//pair a segment with its length
unordered_map<string,vector<unsigned>> street_intersection_table;//pair a street with all its intersections
unordered_map<string,vector<unsigned>> POI_id_list;
vector<unsigned> highway_segment; //store the segments belong to highway 

//load the map


bool load_map(std::string map_name) {

    bool load_success = loadStreetDatabaseBIN(map_name);
    unsigned number = getNumberOfIntersections();
    unsigned count; //used to traverse the data structures
    //load all data into data structures created by the team
    for(count = 0; count<number; count++){
        intersectionTable.insert(make_pair(getIntersectionName(count),count));
    }
   
    number = getNumberOfStreets();
    for(count = 0; count<number; count++){
        streetTable.insert(make_pair(getStreetName(count),count));
    }
    
    number = getNumberOfIntersections();
    for(count = 0; count<number; count++){
        vector<unsigned> segments = find_intersection_street_segments_Helper(count);
        intersection_segment_table.insert(make_pair(count,segments));
    }
    
    number = getNumberOfIntersections();
    for(count = 0; count<number; count++){
        vector<string> streetNames = find_intersection_street_names_Helper(count);
        intersection_street_table.insert(make_pair(count,streetNames));
    }
    
    number = getNumberOfIntersections();
    for(count = 0; count<number; count++){
        string name = getIntersectionName(count);
        vector<unsigned> adjacent = find_adjacent_intersections_Helper(name);
        adjacent_intersection_table.insert(make_pair(name,adjacent));        
    }
    
    number = getNumberOfStreetSegments();
    for(count = 0; count<number; count++){
        segment_length_table.insert(make_pair(count,find_street_segment_length_Helper(count)));
    }
    
    load_POI();
    load_street_segments(); //load data into the SegmentsOfStreet table
    load_street_intersections(); //load data into street_intersection_table
    load_highway();
    return load_success;
}

//find the street segments belong to highway
void load_highway(){
    
    unsigned long long number=getNumberOfStreetSegments();
    unsigned long long segment_id=0;
    for(segment_id=0; segment_id<number; segment_id++){
        if (check_highway(segment_id)){
            highway_segment.push_back(1);
            continue;
        }
        else{
        highway_segment.push_back(0);
        }
        
    }
}

//function returns true if the segment belongs to highway
bool check_highway(unsigned segment_id){
    string check1="Ramp to";
    string check2="To Highway";
    unsigned i=0;
    unsigned j=0;
    string streetname=getStreetName(getStreetSegmentStreetID(segment_id));
    for(i=0; i<7; i++){
        if (check1[i]==streetname[i]){
            continue;
        }
        break;
    }
    for(j=0; j<10; j++){
        if (check2[j]==streetname[j]){
            continue;
        }
        break;
    }
    if(i==7){ 
        return true;
    }
    if(j==10){
        return true;
    }
    return false;
}

void load_street_segments(){
    unsigned number = (unsigned)getNumberOfStreets();
    
    unsigned segmentNumber = (unsigned)getNumberOfStreetSegments();
    unsigned count;//used to traverse all streets and segments
    vector<unsigned> empty;//an empty vector ready for filling in segments
    for(count = 0;count<number;count++){
        string name = getStreetName(count);
        SegmentsOfStreet.insert(make_pair(name,empty));
        
    }
    for(count = 0; count<segmentNumber;count++){
        string name = getStreetName(getStreetSegmentStreetID(count));
        (SegmentsOfStreet.find(name)->second).push_back(count);
        
    }
}


void load_street_intersections(){
    unsigned number = (unsigned)getNumberOfStreets();
    
    unsigned intersectionNumber = (unsigned)getNumberOfIntersections();
    unsigned count;//used to traverse all streets and intersections
    vector<unsigned> empty;//an empty vector ready for filling in intersections
    
    for(count = 0;count<number;count++){
        string name = getStreetName(count);
        street_intersection_table.insert(make_pair(name,empty));
    }
    
    for(count = 0;count<intersectionNumber;count++){
        vector<string> streetNames = find_intersection_street_names(count);
        unsigned number_of_streets = streetNames.size();
        unsigned i;//used to traverse all streets at an intersection
        for(i=0;i<number_of_streets;i++){
            //find the name in the table and fill the intersection ID
            //in the corresponding vector
            (street_intersection_table.find(streetNames[i])->second).push_back(count);
        }
    }
    
}

void load_POI(){
    unsigned total = getNumberOfPointsOfInterest();
    vector<unsigned> empty;
    for(unsigned i = 0;i<total;i++){
        string name = getPointOfInterestName(i);
        if(POI_id_list.find(name) == POI_id_list.end()){
            POI_id_list.insert(make_pair(name,empty));
        }
        else{
            continue;
        }
    }
    for(unsigned i = 0;i <total;i++){
        string name = getPointOfInterestName(i);
        POI_id_list.find(name)->second.push_back(i);
    }
}
//close the map
void close_map() { // The job is done when this function is called.
    closeStreetDatabase();
    return;        
}



unsigned find_intersection_id_from_name(std::string intersection_name){ // This is the function that 
    return intersectionTable.find(intersection_name)-> second;

}

unsigned find_street_id_from_name(std::string street_name){
    return streetTable.find(street_name) -> second;
}


std::vector<unsigned> find_intersection_street_segments(std::string intersection_name){
    unsigned ID = find_intersection_id_from_name(intersection_name);
    return intersection_segment_table.find(ID)->second;
}

std::vector<unsigned> find_intersection_street_segments_Helper(unsigned intersection_id){
   std::vector<unsigned> result;
    unsigned number = getIntersectionStreetSegmentCount(intersection_id);
    for(unsigned count = 0;count<number;count++){
        result.push_back(getIntersectionStreetSegment(intersection_id,count));
    }//traverse all segments at an intersection and pair them with the intersection
    return result;
    
}//this function used to load data into the new data structure

std::vector<unsigned> find_intersection_street_segments(unsigned intersection_id){
    return intersection_segment_table.find(intersection_id)->second;
}

std::vector<std::string> find_intersection_street_names(std::string intersection_name){
    unsigned ID= find_intersection_id_from_name(intersection_name);
    return intersection_street_table.find(ID)->second;
}

std::vector<std::string> find_intersection_street_names_Helper(unsigned intersection_id){
    std::vector<unsigned> segments = find_intersection_street_segments(intersection_id);
    std::vector<std::string> streets;
    unsigned count;//used to traverse all street segments at the specified intersection
    unsigned number = segments.size();
    unsigned NumOfStreetAdded = 0;
    for(count=0;count<number;count++){
   std::string name = getStreetName(getStreetSegmentStreetID(segments[count]));
        
        if(NumOfStreetAdded == 0){
            streets.push_back(name);
            NumOfStreetAdded++;
            continue;
        }//no street added, no need to check if the street is already in the vector
   
        else{
            bool repeated = false;//check if the street the segments belongs to has already been added
        for(unsigned i = 0; i<NumOfStreetAdded;i++){
            if(streets[i] == name){
                repeated = true;
                break;
            }
        }
            if(!repeated){
                streets.push_back(name);//add the name to the vector if not repeated
                NumOfStreetAdded++;
            }
        }
    }
 
    return streets;
}//this function used to load data into the new data structure


std::vector<std::string> find_intersection_street_names(unsigned intersection_id){
    return intersection_street_table.find(intersection_id)->second;
}
bool are_directly_connected(std::string intersection_name1, std::string intersection_name2){
    if(intersection_name1==intersection_name2){
        return true;//the same intersection is considered directly connected to itself
    }
    vector<unsigned> adjacent = find_adjacent_intersections(intersection_name1);
    unsigned des_ID = find_intersection_id_from_name(intersection_name2);
    unsigned number_of_adjacent = adjacent.size();
    unsigned count;//used to traverse the adjacent intersections of intersection1
    for(count=0;count<number_of_adjacent;count++){
        if(adjacent[count]==des_ID){
            return true;//found, return true
        }
    }
    return false;//Getting out of the for loop means not directly connected
}

std::vector<unsigned> find_adjacent_intersections_Helper(std::string intersection_name){
    unsigned intersectionID = find_intersection_id_from_name(intersection_name);
    unsigned SegmentNumber = getIntersectionStreetSegmentCount(intersectionID);
    unsigned count;//traverse all segments at the specified intersection
    std::vector<unsigned> result;//used to store the result found
    for(count = 0;count<SegmentNumber;count++){
        unsigned segmentID = getIntersectionStreetSegment(intersectionID,count);
        StreetSegmentEnds end = getStreetSegmentEnds(segmentID);//find the ends of an segment
        if(!getStreetSegmentOneWay(segmentID)){   //check if it is one way
            if(end.from != intersectionID){       //check which end is the specified intersection
                result.push_back(end.from);       //so it is not added to the data structure
                continue;
            }
            else{
                result.push_back(end.to);
                continue;
            }
        }
        
        else{
            if(end.from == intersectionID){      //not one way,add the other end of the segment
                result.push_back(end.to);
                continue;
            }
        }
    }
    
    
    return result;
}//used for loading the data into data structure

std::vector<unsigned> find_adjacent_intersections(std::string intersection_name){
    return adjacent_intersection_table.find(intersection_name)->second;
}

//This function calculates the distance between two points by using Pythagoras’ theorem
double find_distance_between_two_points(LatLon point1, LatLon point2){ 
    double x1,x2,y1,y2;
    double lataverage;
    double distance;
    y1=point1.lat*DEG_TO_RAD;       //convert latitude and longitude from degrees to radians
    y2=point2.lat*DEG_TO_RAD;
    lataverage=(y1+y2)/2;
    x1=point1.lon*cos(lataverage)*DEG_TO_RAD;
    x2=point2.lon*cos(lataverage)*DEG_TO_RAD;
    distance=EARTH_RADIUS_IN_METERS*sqrt((y2-y1)*(y2-y1)+(x2-x1)*(x2-x1));
    return distance;
}

//This function computes the street segment length and store the segment id and its length in segment_length_table;
double find_street_segment_length_Helper(unsigned street_segment_id){
    unsigned long first_intersection_id, second_intersection_id; 
    unsigned number_of_curvepoints;
    unsigned curvepoint_id=0;
    LatLon intersection1,intersection2;
    double length=0;
    //Find the id of the two intersections connected with the segment
    first_intersection_id = getStreetSegmentEnds(street_segment_id).from;
    second_intersection_id = getStreetSegmentEnds(street_segment_id).to;
    //Get the position of the intersections
    intersection1=getIntersectionPosition(first_intersection_id);
    intersection2=getIntersectionPosition(second_intersection_id);
    number_of_curvepoints = getStreetSegmentCurvePointCount(street_segment_id);
    //Distance of a straight street segment
    if (number_of_curvepoints==0){
        length=find_distance_between_two_points(intersection1,intersection2);
    }
    //Distance of a street segment with curve points
    else {
        length=find_distance_between_two_points(intersection1,getStreetSegmentCurvePoint(street_segment_id,curvepoint_id));
        for(curvepoint_id=1; curvepoint_id < number_of_curvepoints; curvepoint_id++){
            length+=find_distance_between_two_points(getStreetSegmentCurvePoint(street_segment_id,curvepoint_id-1),getStreetSegmentCurvePoint(street_segment_id,curvepoint_id));
        }
        length+=find_distance_between_two_points(getStreetSegmentCurvePoint(street_segment_id,curvepoint_id-1),intersection2);
    }
    return length;
}

//find the length of the street segment by passing the id into the segment_length_table
double find_street_segment_length(unsigned street_segment_id){
    return segment_length_table.find(street_segment_id)->second;
}

//This functions computes the length of the whole street
double find_street_length(std::string street_name){
    unsigned number_of_segments;
    unsigned count;
    double length=0;
    //Find the street length by adding the length of segments belong to the street
    vector<unsigned> streetsegments=find_street_street_segments(street_name);
    number_of_segments=streetsegments.size();
    for(count=0; count<number_of_segments; count++){
        length += find_street_segment_length(streetsegments[count]);
    }
    return length;
}
 
double find_segment_travel_time(unsigned street_segment_id){
    return find_street_segment_length(street_segment_id)/1000/getStreetSegmentSpeedLimit(street_segment_id)*60;
    
}

//This function returns the name of the interest that is the closest to your position
std::string find_closest_point_of_interest(LatLon my_position){
    unsigned long long number_of_interests=getNumberOfPointsOfInterest();
    unsigned long long count;
    unsigned long long interest_id=0;
    double distance;
    double mindistance=find_distance_between_two_points(my_position,getPointOfInterestPosition(0));
    //compare the distance between your position and all of the interests and find the closet one
    for(count=1; count<number_of_interests; count++){
        distance=find_distance_between_two_points(my_position,getPointOfInterestPosition(count));
        if(distance<mindistance){
            mindistance=distance;
            interest_id=count;
        }
    }
    //return the name of interest by its id
    return getPointOfInterestName(interest_id);
}


std::vector<unsigned> find_street_street_segments(std::string street_name){
    return SegmentsOfStreet.find(street_name)->second;
}



std::vector<unsigned> find_all_street_intersections(std::string street_name){
    return street_intersection_table.find(street_name)->second;
}

