#include <assert.h>
#include <math.h>
#include "common.h"
#include "point.h"

void
point_translate(struct point *p, double x, double y)
{
    p->x = p->x + x;
    p->y = p->y + y;
    return;
}

double
point_distance(const struct point *p1, const struct point *p2)
{
    double Result_X, Result_Y;
    double Distance;
    Result_X = 0.0;
    Result_Y = 0.0;
    Distance = 0.0;
    Result_X = p2->x - p1->x;
    Result_X = abs(Result_X);
    Result_Y = p2->y - p1->y;
    Result_Y = abs(Result_Y);
    Distance = (Result_Y * Result_Y) + (Result_X * Result_X);
    Distance = sqrt(Distance);
    return Distance;
}

int
point_compare(const struct point *p1, const struct point *p2)
{
    double point1, point2;
    point1 = 0.0;
    point2 = 0.0;
    point1 = point_X(p1) * point_X(p1) + point_Y(p1) * point_Y(p1);
    point1 = sqrt(point1);
    point2 = point_X(p2) * point_X(p2) + point_Y(p2) * point_Y(p2);
    point2 = sqrt(point2);
    if(point1 < point2)
        return -1;
    else if(point1 == point2)
        return 0;
    else
        return 1;
}
