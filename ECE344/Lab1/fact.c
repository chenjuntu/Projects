#include "common.h"
int Fac(int Number)
{
    if(Number == 0)
        return 1;
    else
        return Number*Fac(Number - 1);
}
int
main(int argc, char** argv)
{
    int i = 0;
    int indicator = 0;
	if(argv[1][0] == 48)
	{
		printf("Huh?\n");
		return 0;
	}
    for(i = 0; argv[1][i] != 0; i++)
    {
        if(argv[1][i]<48 || argv[1][i]> 57)
        {
            printf("Huh?\n");
            return 0;
        }
        if(i>= 2)
            indicator = 1;
    }
    if(indicator == 1)
    {
        printf("Overflow\n");
        return 0;
    }
    if(argv[1][1] == 0)
    {
        if((argv[1][0]> 57) || (argv[1][0] < 48))
        {    
            printf("Huh?\n");
            return 0;
        }
        else
        {
            int n = argv[1][0] - 48;
            int Result = Fac(n);
            printf("%d\n", Result);
            return 0;
        }
    }
    else //The case that the second number is existed
    {
        
        if((argv[1][0]> 57) || (argv[1][0] < 48))
        {
            printf("Huh?\n");
            return 0;
        }
        else if(argv[1][0] > 49 && argv[1][0] <= 57)
        {
            if(argv[1][1]>57 || argv[1][1] < 48)
            {
                printf("Huh?\n");
                return 0;
            }
            printf("Overflow\n");
            return 0;
        }
        else if((argv[1][1]> 57) || (argv[1][1] < 48))
        {
            printf("Huh?\n");
            return 0;
        }
        else if(argv[1][1] > 50 && argv[1][1] <= 57)
        {
            printf("Overflow\n");
            return 0;
        }
        else
        {
            int n1 = argv[1][0] - 48;
            int n2 = argv[1][1] - 48;
            int Num = n1*10 + n2;
            int Result = Fac(Num);
            printf("%d\n", Result);
            return 0;
        }
    }

    return 0;
}
