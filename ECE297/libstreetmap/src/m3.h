#pragma once
#include <vector>
#include <string>
#include "m2.h"
#include "m1.h"
#include <iostream>
#define max_time 81000
// Returns a path (route) between the start intersection and the end 
// intersection, if one exists. If no path exists, this routine returns 
// an empty (size == 0) vector. If more than one path exists, the path 
// with the shortest travel time is returned. The path is returned as a vector 
// of street segment ids; traversing these street segments, in the given order,
// would take one from the start to the end intersection.
std::vector<unsigned> find_path_between_intersections(unsigned 
                   intersect_id_start, unsigned intersect_id_end);


// Returns the time required to travel along the path specified. The path
// is passed in as a vector of street segment ids, and this function can 
// assume the vector either forms a legal path or has size == 0.
// The travel time is the sum of the length/speed-limit of each street 
// segment, plus 15 seconds per turn implied by the path. A turn occurs
// when two consecutive street segments have different street names.
double compute_path_travel_time(const std::vector<unsigned>& path);


// Returns the shortest travel time path (vector of street segments) from 
// the start intersection to a point of interest with the specified name.
// If no such path exists, returns an empty (size == 0) vector.
std::vector<unsigned> find_path_to_point_of_interest (unsigned 
                   intersect_id_start, std::string point_of_interest_name);

vector<unsigned> find_segment_between_intersections(unsigned long intersection_id1,unsigned long intersection_id2);


class Nodepoint{
 public:
    
    double gcost;
    double hcost;
    unsigned parent_node;
    unsigned long long id;
    unsigned best_segment;
    double fcost() const{
        return gcost + (hcost/1435);
    }
    ~Nodepoint(){
        ;
    }
    
};

class compare {
public:
    bool operator()(Nodepoint& n1, Nodepoint& n2)
    {
        if(n2.fcost()<n1.fcost()) {
            return true;
        }
        if((n2.fcost()==n1.fcost()) && (n2.hcost<n1.hcost)){
            return true;
        }
        return false;
    }
};

unsigned find_shortest_segment(unsigned long intersection_id1,unsigned long intersection_id2);