#pragma once
#include <vector>
#include "m3.h"
using namespace std;
    // This routine takes in a vector of N intersections that must be 
    // traversed in a path, and another vector of M intersections that 
    // are legal start and end points for the path. The first vector 
    // gives the intersection ids of a set of locations at which 
    // deliveries must be made. The second vector gives the intersection
    // ids of courier company depots containing trucks; you start at any
    // one of these depots and end at any one of the depots.
    // You can assume that N is always at least 1, and M is always at 
    // least one (i.e. both input vectors are non-empty).  You can also
    // assume that no intersection is repeated in either list and that
    // no intersection is both a delivery location and a depot (i.e. no
    // intersection will appear in both vectors).
    // This routine returns a vector of street segment ids that form a 
    // path, where the first street segment id is connected to a depot
    // intersection, and the last street segment id also connects to a
    // depot intersection.  If no path connecting all the delivery locations
    // and a start and end depot exists, this routine should return an 
    // empty (size == 0) vector.                       

    std::vector<unsigned> traveling_salesman(std::vector<unsigned> intersections_to_traverse, std::vector<unsigned> depot_locations); //Finding the traveling route between multiple intersections.
    
    LatLon midpoint(vector<unsigned> intersections); //Find the midpoint of all intersections. This midpoint is the center of all intersections that need to be traverse.
    
    void closest_depot(LatLon start, vector<unsigned> depots,unsigned &best_depot);
    
    unsigned farthest_int(LatLon start, vector<unsigned> ints);

    vector<unsigned> two_opt(vector<unsigned> ordered_intersections);
    
    void swap(unsigned &num1, unsigned &num2);
    
    vector<unsigned> new_path(vector<unsigned> ints);
    
    vector<unsigned> find_best_route(vector<unsigned> ordered_intersections,vector<unsigned> depots);
    
    void change_depots(vector<unsigned> &intersections, vector<unsigned> depots);
    

