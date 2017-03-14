/*
Lab4part1 pseudo code
.equ all variables
set up things
List:
r8  ------- Address of JP1
r9  ------- Direction
r10 ------- Instruction
Reading values of 2 sensors
3 branches to decide the movement of motors
*/


.include "nios_macros.s"
.global _start
.equ Direction, 0x07f557ff  #This is for the direction of JP1
.equ JP1, 0x10000060  #Base address of JP1
.section .text

_start:
movia r8, JP1   #Address of JP1
movia r9, Direction  #r9 carries the direction instruction
stwio r9, 4(r8)  #implement direction to JP1

/* Set up jobs are all done, now process to read the sensors */
#Assume that we are using sensor 4 as the head and sensor 0 as the tail

Loop1:
	movia r10, 0xfffbffff   #turn on the sensor 4
	stwio r10, 0(r8)
	ldwio r5, 0(r8)   #checking if the data is valid
	srli r5, r5, 19  
	andi r5, r5, 0x1
	bne zero, r5, Loop1  #If it is 1 means not valid, then check again
ldwio r11, 0(r8)   #Read the sensor's value into r11
srli r11, r11, 27  
andi r11, r11, 0x0f  #eliminate other garbage data

/*Now we have done reading the head sensor, go read the tail one */

Loop2:
	movia r10, 0xfffffbff   #turn on the sensor 0 and shut down the sensor 4
	stwio r10, 0(r8)
	ldwio r5, 0(r8)   #checking if the data is valid
	srli r5, r5, 11
	andi r5, r5, 0x1
	bne zero, r5, Loop2
ldwio r12, 0(r8)   #load the tail sensor's value into r12
srli r12, r12, 27
andi r12, r12, 0x0f  #eliminate other garbage data

/*Now we have head data in r11 and tail data in r12*/
# We control the motor 0
# 3 cases
blt r12, r11, Backward  
bgt r12, r11, Forward  
beq r12, r11, Balance  

# 1st case
Backward:
	movia r10, 0xfffffffe
	stwio r10, 0(r8)
	movia r13, 50
	Delay1:
		subi r13, r13, 1
		bne r13, zero, Delay1
	br Loop1

# 2nd case
Forward:
	movia r10, 0xfffffffc
	stwio r10, 0(r8)
	movia r13, 50
	Delay2:
		subi r13, r13, 1
		bne r13, zero, Delay2
	br Loop1

# 3rd case: head = tail
Balance:
	movia r10, 0xffffffff
	stwio r10, 0(r8)
	br Loop1   #Terminates all motors and sensors
