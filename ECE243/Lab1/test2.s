.equ RED_LEDS, 0x10000000

/* List of registers utilized:
r2: pointer in array                 r6: index in the array
r3: value displayed                  r7: temporary register
r4: address of LEDs                  r9: counter in delay loop
r5: length of the array                                        */

array:
.byte 1
.byte 2
.byte 3
.byte 4
.byte 5
.byte 6

.global main
main:
movia r4,RED_LEDS  /* Get address of LED device */
movia r2,array     /* Get address of array */
/*movi r3,0         initialize value displayed */
movi r6,0          /* initialize counter */
movi r5,6          /* set length of the array */

LOOP:
bge r6,r5,main     /* test for end of array */

ldb r7,0(r2)       /* load digit from array */
or r3,r3,r7        /* insert character in string of digits */
stwio r3,0(r4)     /* write to the red LEDs */
addi r2,r2,1       /* increment address */
slli r3,r3,3       /* shift string to the left */

addi r6,r6,1

movia r9,10000000 /* set starting point for delay counter */

DELAY:
subi r9,r9,1       # subtract 1 from delay
bne r9,r0, DELAY   # continue subtracting if delay has not elapsed
br LOOP            # delay elapsed, redo the LOOP

