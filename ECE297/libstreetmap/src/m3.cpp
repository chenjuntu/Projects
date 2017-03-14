#include "m3.h"
#include <iostream>
#include <cfloat>
#include <chrono>
#include <cstdlib>
#include <vector>
#include <thread>
#include <unordered_map>
#include <queue>
#include <iomanip>

using namespace std;


extern unordered_map<string, unsigned> intersectionTable; //pair intersection name with its ID
extern unordered_map<string, unsigned> streetTable; //pair street name with its ID
extern unordered_map<string, vector<unsigned>> SegmentsOfStreet; //pair a street with all its segments
extern unordered_map<unsigned, vector<unsigned>> intersection_segment_table; //pair a intersection with all connected segments
extern unordered_map<unsigned, vector<string>> intersection_street_table; //pair a intersection with all connected street names
extern unordered_map<string, vector<unsigned>> adjacent_intersection_table; //pair a intersection with all its adjacent ones
extern unordered_map<unsigned, double> segment_length_table; //pair a segment with its length
extern unordered_map<string, vector<unsigned>> street_intersection_table; //pair a street with all its intersections
unsigned turns;

 priority_queue<Nodepoint, vector<Nodepoint>, compare> open_list;
 unordered_map<unsigned, Nodepoint> open_table;
 unordered_map<unsigned, Nodepoint> close_table;


vector<unsigned> find_path_between_intersections(unsigned 
                   intersect_id_start, unsigned intersect_id_end){
    
    
    while(!open_list.empty()){
        open_list.pop();
    }
    open_table.clear();
    close_table.clear();
    
    LatLon final_position=getIntersectionPosition(intersect_id_end);
    Nodepoint start_node;
    
    start_node.parent_node=intersect_id_start;
    start_node.gcost=0;
    start_node.hcost=0;
    start_node.id=intersect_id_start;
    open_list.push(start_node);
    open_table.insert(make_pair(start_node.id,start_node));
    vector<unsigned> no_path;
    
       while(!open_list.empty()){
        Nodepoint current_node;
        current_node=open_list.top();           //find the point with least cost in open list, make current_node the point  
        open_list.pop();                        //delete current_node from open list, add it into closed list
        open_table.erase(current_node.id);
        close_table.insert(make_pair(current_node.id,current_node));
        
        
        
        if(current_node.id==intersect_id_end){  //found path
        vector<unsigned> path;
        Nodepoint current=current_node;
        while(current.id != start_node.id){
            path.insert(path.begin(),close_table.find(current.id)->second.best_segment);
            current.id=current.parent_node;
            current.parent_node=close_table.find(current.id)->second.parent_node;
        }
        return path;
        }
        
        vector<unsigned> adjacent_list=find_adjacent_intersections(getIntersectionName(current_node.id));  //find all adjacent intersections of current_node
        for(unsigned i=0; i<adjacent_list.size(); i++){  //traverse all intersections
              //check if this particular adjacent intersection of current_node is in the closed list
            if(close_table.find(adjacent_list[i])!=close_table.end()){
                continue;
            }    
            
            bool check_open=false;
            Nodepoint node;
            
            //double hcost;
          
            //check if this particular adjacent intersection of current_node is in the open list 
            if(open_table.find(adjacent_list[i])!=open_table.end()){
                    check_open=true;   
            }
            
            if (check_open==false){
                //if not, make this adjacent intersection node, calculate its hcost
                
                node.id=adjacent_list[i];   
                node.parent_node = current_node.id;
                node.hcost=find_distance_between_two_points(getIntersectionPosition(node.id),final_position);
                 
                
                
                if(current_node.id == intersect_id_start){
                        node.gcost = find_segment_travel_time(find_shortest_segment(node.id,current_node.id));
                        node.best_segment = find_shortest_segment(node.id,current_node.id);
                        open_list.push(node); //place this particular adjacent intersection to the open list
                        open_table.insert(make_pair(node.id,node));
                    }
                
                
                    else{
                        vector<unsigned> path; 
                        path.push_back(find_shortest_segment(current_node.id,current_node.parent_node));
                        path.push_back(find_shortest_segment(node.id,current_node.id));
                        node.gcost=compute_path_travel_time(path)-find_segment_travel_time(path[0])+current_node.gcost;
                        node.best_segment = find_shortest_segment(node.id,current_node.id);//find the g cost from current node to this particular adjacent intersection
                        open_list.push(node); //place this particular adjacent intersection to the open list
                        open_table.insert(make_pair(node.id,node));
                    }
            }//check_open = false
            
            if(check_open==true){  //if this adjacent intersection is in the open list
                double newgcost;
                node=open_table.find(adjacent_list[i])->second;                       //make this adjacent intersection node
                vector<unsigned> newpath;                //found a node in open list, which means there are more than one path to it
                newpath.push_back(find_shortest_segment(current_node.id,current_node.parent_node));
                newpath.push_back(find_shortest_segment(node.id,current_node.id));
                newgcost=compute_path_travel_time(newpath)-find_segment_travel_time(newpath[0])+current_node.gcost;
                if(newgcost<node.gcost){
                    open_table.find(adjacent_list[i])->second.gcost=newgcost;  //update g cost to the new smaller value
                    open_table.find(adjacent_list[i])->second.parent_node=current_node.id;  //update the 
                    open_table.find(adjacent_list[i])->second.best_segment = find_shortest_segment(node.id,current_node.id);
                    Nodepoint newnode;
                    newnode.id=adjacent_list[i];
                    newnode.gcost=newgcost;
                    newnode.parent_node=current_node.id;
                    newnode.hcost = find_distance_between_two_points(final_position,getIntersectionPosition(newnode.id));
                    newnode.best_segment = find_shortest_segment(node.id,current_node.id);
                    open_list.push(newnode);
                }//new_gcost<old_gcost
            }//check_open true
        }//for loop for adjacent intersections
    }//big while loop
    return no_path;
}//whole function

vector<unsigned> find_segment_between_intersections(unsigned long intersection_id1,unsigned long intersection_id2){
    vector<unsigned> segments=find_intersection_street_segments(intersection_id1);
    vector<unsigned> result;
    for(unsigned i=0; i<segments.size(); i++){
        if(getStreetSegmentEnds(segments[i]).from==intersection_id2 || ((!getStreetSegmentOneWay(segments[i])) && getStreetSegmentEnds(segments[i]).to==intersection_id2)){
            result.push_back(segments[i]);
        }
    }
    return result;
}

double compute_path_travel_time(const std::vector<unsigned>& path){
    turns =0;
    double time =0;
    unsigned size_of_path = path.size();
    if(size_of_path==0){
        return time;
    }
    else{
        for(unsigned i=0;i<size_of_path;i++){
            if(i==0){
                time = time + find_segment_travel_time(path[i]);
                continue;
            }
            else{
                if(getStreetSegmentStreetID(path[i]) == getStreetSegmentStreetID(path[i-1])){
                    time = time + find_segment_travel_time(path[i]);
                    continue;
                }
                else{
                    time = time + 0.25 + find_segment_travel_time(path[i]);
                    turns++;
                    continue;
                }
            }
        }
    }
    return time;
}

vector<unsigned> find_path_to_point_of_interest (unsigned intersect_id_start, std::string point_of_interest_name){
    vector<unsigned> path;
    LatLon start_position=getIntersectionPosition(intersect_id_start);
    unsigned interest_id=find_nearest_POI(start_position,point_of_interest_name);
    unsigned intersection_id=find_nearest_intersection(getPointOfInterestPosition(interest_id));
    path=find_path_between_intersections(intersect_id_start,intersection_id);
    return path;
}

unsigned find_shortest_segment(unsigned long intersection_id1,unsigned long intersection_id2){
    vector<unsigned> segments=find_intersection_street_segments(intersection_id1);
    double cost = 100000000;
    unsigned shortest;
    vector<unsigned> potential;
    for(unsigned i=0; i<segments.size(); i++){
        if(getStreetSegmentEnds(segments[i]).from==intersection_id2 || getStreetSegmentEnds(segments[i]).to==intersection_id2){
            potential.push_back(segments[i]);
        }
    }
        for(unsigned i =0; i<potential.size();i++){
            double time = find_segment_travel_time(potential[i]);
            if(time < cost){
                if(getStreetSegmentOneWay(potential[i]) && getStreetSegmentEnds(potential[i]).to !=intersection_id1){
                    continue;
                }
                cost = time;
                shortest = potential[i];
            }
        }
        return shortest;
}