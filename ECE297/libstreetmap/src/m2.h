#pragma once
#include "m1.h"
#include "graphics.h"
#include "LatLon.h"
#include <iostream>
#include <cfloat>
#include <chrono>
#include <cstdlib>
#include <vector>
#include <thread>
// Draws the map whose at map_path; this should be a .bin file.
void draw_map(std::string map_path);
void draw_screen ();
void draw_street_segment (unsigned intersection_id1, unsigned intersection_id2);
void draw_closed_feature (string color, t_point* points, unsigned npoints);
t_bound_box find_bound();
void draw_open_feature(t_point* points,unsigned number,t_color color);
t_point* find_feature_points(unsigned feature_id);
unsigned zoom_extent(void);
void draw_streets(unsigned zoom);
void group_streets();
void draw_POI(unsigned zoom);
void act_on_button_press (float x, float y, t_event_buttonPressed event);
unsigned find_nearest_point_of_interest(LatLon my_position);
bool inside_range(LatLon point1, LatLon point2);
void intialize_status();
unsigned find_nearest_intersection(LatLon my_position);
void mark_intersections();
void toggle_POI(void (*drawscreen_ptr) (void));
void print_street_names(unsigned);
void clear(void (*drawscreen_ptr) (void));
void speed_limit(void (*drawscreen_ptr) (void));
void align(void (*drawscreen_ptr) (void));
void buttons();
void draw_features();
void draw_feature(unsigned feature_id,t_color color,int line_width);
vector<unsigned> find_street(string input);
int find_intersection(string first_street, string second_street);
void draw_path_ends(unsigned zoom);
void mark_start(void (*drawscreen_ptr) (void));
void mark_end(void (*drawscreen_ptr) (void));
vector<string> find_POI(string name);
unsigned find_nearest_POI(LatLon start,string POI_name);
void find_path(void (*drawscreen_ptr) (void));
void highlight_path(vector<unsigned> path);
vector<unsigned> find_common_intersection(vector<unsigned> cadidates1, vector<unsigned> cadidates2);
void help_button(void (*drawscreen_ptr) (void));
void help_window();
void auto_zoom();
bool in_path(unsigned);