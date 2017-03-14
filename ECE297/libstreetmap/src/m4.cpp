#include "m4.h"
using namespace std;
unsigned order;
#include <time.h>
#include <stdlib.h>
#include <math.h>
#include <unordered_map>
unordered_map<string,vector<unsigned>> path_table;
LatLon midpoint(vector<unsigned> intersections){   //Find the midpoint of all intersections. This midpoint is the center of all intersections that need to be traverse.
    unsigned size = intersections.size();
    LatLon result;
    double total_lon=0;   //Initializing the longitude
    double total_lat=0;   //Initializing the latitude
    for(unsigned i =0;i<size;i++){ //Find the midpoint
        LatLon current = getIntersectionPosition(intersections[i]);
        total_lon = total_lon + current.lon;
        total_lat = total_lat + current.lat;
    }
    result.lon = total_lon/size;
    result.lat = total_lat/size;
    return result;
}

void closest_depot(LatLon start, vector<unsigned> depots,unsigned &best_depot){  //Find the closest depot and then return it.
    unsigned size = depots.size();
    double min_distance=1000000000;   //Initialize the min distance to a very large value first.
    for(unsigned i=0;i<size;i++){
        double dis = find_distance_between_two_points(start,getIntersectionPosition(depots[i]));
        if(dis<min_distance){   //Comparison, and base on this to decide whether to update the best depot.
            min_distance = dis;
            best_depot = depots[i];
        }
    }

}

void draw_points(vector<unsigned> points){
    unsigned size = points.size();
    for(unsigned i=0;i<size;i++){
        LatLon pos = getIntersectionPosition(points[i]);
        setcolor(BLUE);
        drawarc(pos.lon, pos.lat, 0.005, 0, 360);
        fillarc(pos.lon, pos.lat, 0.005, 0, 360);
    }
}

unsigned farthest_int(LatLon start, vector<unsigned> ints){
    double max_dis = 0;
    unsigned size = ints.size();
    double current_distance;
    unsigned index;
    for(unsigned i=0; i<size; i++){
        current_distance=find_distance_between_two_points(start,getIntersectionPosition(ints[i]));
        if(max_dis<current_distance){
            max_dis=current_distance;
            index=i;
        }
    }
    return index;
}


std::vector<unsigned> traveling_salesman(std::vector<unsigned> intersections_to_traverse, std::vector<unsigned> depot_locations){
    vector <unsigned> ordered_intersections;
    LatLon center = midpoint(intersections_to_traverse);
    unsigned start_index = farthest_int(center,intersections_to_traverse);
    //unsigned start_depot = closest_depot(getIntersectionPosition(intersections_to_traverse[start_index]),depot_locations);
    unsigned start_depot ;
    closest_depot(getIntersectionPosition(intersections_to_traverse[start_index]), depot_locations,start_depot);
    ordered_intersections.push_back(start_depot);
    double min_time = 10000000;
    unsigned done_index = start_index;
    unsigned done_int_id = intersections_to_traverse[start_index];
    //vector<unsigned> best_route = find_path_between_intersections(start_depot,done_int_id);
    ordered_intersections.push_back(done_int_id);
    intersections_to_traverse.erase(intersections_to_traverse.begin()+done_index);
    
    while(intersections_to_traverse.size()!=0){
        unsigned current_size = intersections_to_traverse.size();
        vector<unsigned> good_path;
        double min_dis=1000000000000;
        unsigned best_index;
        unsigned best_int_id;
        for(unsigned i=0;i<current_size;i++){
            double current_dis = find_distance_between_two_points(getIntersectionPosition(done_int_id),getIntersectionPosition(intersections_to_traverse[i]));
            if(current_dis<min_dis){
                min_dis = current_dis;
                best_index = i;
                best_int_id = intersections_to_traverse[i];
            }
        }
        good_path = find_path_between_intersections(done_int_id,best_int_id);
        done_index = best_index;
        done_int_id = best_int_id;
        //best_route.insert(best_route.end(),good_path.begin(),good_path.end());
        intersections_to_traverse.erase(intersections_to_traverse.begin()+done_index);
        ordered_intersections.push_back(done_int_id);
    }
    
    //unsigned end_depot = closest_depot(getIntersectionPosition(done_int_id),depot_locations);
    unsigned end_depot;
    closest_depot(getIntersectionPosition(done_int_id),depot_locations,end_depot);
    ordered_intersections.push_back(end_depot);
    //vector<unsigned> path = find_path_between_intersections(done_int_id,end_depot);
    //best_route.insert(best_route.end(),path.begin(),path.end());
    
    if(ordered_intersections.size()>=5){
        ordered_intersections=two_opt(ordered_intersections);
        return new_path(find_best_route(ordered_intersections,depot_locations));
    }
    else{
        return new_path(two_opt(ordered_intersections));
    }
    
}

vector<unsigned> two_opt(vector<unsigned> ordered_intersections){
    vector<unsigned> best_order = ordered_intersections;
    vector<unsigned> current_order = best_order;
    unsigned size = ordered_intersections.size();
    for(unsigned i=2;i<size-3;i=i+1){
        
        swap(current_order[i],current_order[i+1]);
        
        vector<unsigned> current_portion;
        current_portion.push_back(current_order[i-1]);
        current_portion.push_back(current_order[i]);
        current_portion.push_back(current_order[i+1]);
        current_portion.push_back(current_order[i+2]);
        vector<unsigned> current_path_portion = new_path(current_portion);
        
        vector<unsigned> best_portion;
        best_portion.push_back(best_order[i-1]);
        best_portion.push_back(best_order[i]);
        best_portion.push_back(best_order[i+1]);
        best_portion.push_back(best_order[i+2]);
        vector<unsigned> best_path_portion = new_path(best_portion);
        
        double best_time = compute_path_travel_time(best_path_portion);
        double current_time = compute_path_travel_time(current_path_portion);
        //cout<<best_time<<endl<<current_time<<endl;
        if(best_time>current_time){
            best_order[i] = current_order[i];
             best_order[i+1] = current_order[i+1];
        }
        else{
            swap(current_order[i],current_order[i+1]);
        }
    }
    return best_order;
}

void swap(unsigned &num1, unsigned &num2){
    unsigned temp = num1;
    num1 = num2;
    num2 = temp;
}

vector<unsigned> new_path(vector<unsigned> ints){
    unsigned size = ints.size();
    vector<unsigned> path;
    for(unsigned i =1;i<size;i++){
        string key = getIntersectionName(ints[i-1])+getIntersectionName(ints[i]);
        vector<unsigned> current_path;
        
        if(path_table.find(key)==path_table.end()){
        current_path = find_path_between_intersections(ints[i-1],ints[i]);
        path_table.insert(make_pair(key,current_path));
        }
        
        else{
            current_path= path_table.find(key)->second;
        }
        path.insert(path.end(),current_path.begin(),current_path.end());
    }
    return path;
}

vector<unsigned> find_best_route(vector<unsigned> ordered_intersections,vector<unsigned> depots){
    
    vector<unsigned> final_order=ordered_intersections;
    
    
    unsigned size=ordered_intersections.size();
    
    vector<unsigned> current=ordered_intersections;
    
    
    unsigned iteration = 0;
    double temperature =5;
    const double cooling = 0.75;
    srand (time(NULL));
    
    while(iteration<14){
        iteration++;
        
        
        unsigned swap_pos1 = rand()%(size-2)+1;
        unsigned swap_pos2 = rand()%(size-2)+1;
        
        vector<unsigned> origrinal;
        vector<unsigned> route_of_origrinal;
        
        
        origrinal.push_back(current[swap_pos1-1]);
        origrinal.push_back(current[swap_pos1]);
        origrinal.push_back(current[swap_pos1+1]);
        route_of_origrinal = new_path(origrinal);
        
        double time1 = compute_path_travel_time(route_of_origrinal);
        
        origrinal.clear();
        route_of_origrinal.clear();
        
        origrinal.push_back(current[swap_pos2-1]);
        origrinal.push_back(current[swap_pos2]);
        origrinal.push_back(current[swap_pos2+1]);
        route_of_origrinal = new_path(origrinal);
        double time2 = compute_path_travel_time(route_of_origrinal);
        double total_current_time = time1+time2;
        
        origrinal.clear();
        route_of_origrinal.clear();
        
        
        swap(current[swap_pos1],current[swap_pos2]);        //swap the position
        
        if(swap_pos1==1||swap_pos1==size-1||swap_pos2==1||swap_pos2==size-1){
            change_depots(current,depots);
        }
        
        vector<unsigned> affected;
        vector<unsigned> route_of_affected;
        
        affected.push_back(current[swap_pos1-1]);
        affected.push_back(current[swap_pos1]);
        affected.push_back(current[swap_pos1+1]);
        route_of_affected = new_path(affected);
        time1 = compute_path_travel_time(route_of_affected);
        
        affected.clear();
        route_of_affected.clear();
        
        affected.push_back(current[swap_pos2-1]);
        affected.push_back(current[swap_pos2]);
        affected.push_back(current[swap_pos2+1]);
        
        route_of_affected = new_path(affected);
        
        time2 = compute_path_travel_time(route_of_affected);
        
        double total_new_time = time1+time2;
        
        double delta_time=total_new_time-total_current_time;
        affected.clear();
        route_of_affected.clear();
        
        
        if(delta_time<=0){
            if(compute_path_travel_time(new_path(final_order)) > compute_path_travel_time(new_path(current))){
               final_order.clear();
               final_order=current;
            }
            
        }
        else{
            
            double probility=exp(-(delta_time)/temperature);
            double random_double;
            int a=rand()%100+1;
            random_double=a/100;
            
            if(probility<=random_double){
                swap(current[swap_pos1],current[swap_pos2]);
                if(swap_pos1==1||swap_pos1==size-1||swap_pos2==1||swap_pos2==size-1){
                change_depots(current,depots);
                }
            }
        
        }
        
        temperature=temperature*cooling;    
    }
    return final_order;
}

void change_depots(vector<unsigned> &intersections,vector<unsigned> depots){
    
    unsigned depot;
    closest_depot(getIntersectionPosition(intersections[1]),depots,depot);
    intersections[0]=depot;
    closest_depot(getIntersectionPosition(intersections[intersections.size()-2]),depots,depot);
    intersections[intersections.size()-1]=depot;
}

