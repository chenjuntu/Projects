.global _start
.equ TIMER, 0x10002000
.equ JP1, 0x10000060

/************************************************************

R2:Temp. hold register

R3:Random number that has been generated, decides cases.

R4:Sensor boundary value (2)

R5:Delay number

R6:Temporary using register

R7:Holding sensor value

R8:TIMER

R9:JP1

R10 - R13: 4 scenarios

R15: Delay count for ISR

R16: Delay Function's count

************************************************************/
/***********************************************************

The following part is the main function of the project.

************************************************************/
.section .text
_start:
	movia r8, TIMER
	movia r9, JP1
	movia r16, 2500
	movia r2, 0xffffffff
	stwio r2, 0(r9)

#Now implement the timer for generating random numbers
	Timer:
		movui r2, 3  #We have 4 scenarios in total
		stwio r2, 8(r8)
		stwio r0, 12(r8)
		stwio r0, 4(r8)	#Initialization
		stwio r0, 0(r8)	#Initialization
		movui r2, 0b110
		stwio r2, 4(r8) #This timer will keep running and we use snapshot to get the random number

#Implementation of JP1
	Read:
		movia r4, 4
		movia r6, 0x07f557ff
		stwio r6, 4(r9)
	poll:
		movia r11, 0xfffeffff      #Using sensor 3
		stwio r11, 0(r9)
		ldwio r6, 0(r9)
		srli r6, r6, 17
		andi r6, r6, 0x1
		bne r0, r6, poll
		ldwio r7, 0(r9)
		srli r7, r7, 27
		andi r7, r7, 0x0f
	bgt r7, r4, poll      #if sensor value greater than 2, poll again

#According to the result of polling, we do moves.	
	stwio r0, 16(r8)    				#Tell timer to take a snapshot
	ldwio r3, 16(r8)					#Have the random number as case number.
	movui r2, 0b110
	stwio r2, 4(r8)
	movia r5, 5000000				#Make some delay time before the pusher works so that it doesn't hit people.
	Delay1:
		subi r5, r5, 1
		bne r0, r5, Delay1								#This one will move, stop, move, stop and so on
		movia r6, 0xfffffffc
		stwio r6, 0(r9)
		movia r5, 25000
		Delay3:
			subi r5, r5, 1
			bne r0, r5, Delay3
		movia r6, 0xffffffff
		stwio r6, 0(r9)
		movia r5, 25000
		Delay4:
			subi r5, r5, 1
			bne r0, r5, Delay4
		movia r6, 0xfffffffc
		stwio r6, 0(r9)
		movia r5, 55000
		Delay5:
			subi r5, r5, 1
			bne r0, r5, Delay5	
		movia r6, 0xffffffff 
		stwio r6, 0(r9)
		movia r5, 55000
		Delay6:
			subi r5, r5, 1
			bne r0, r5, Delay6
		movia r6, 0xfffffffc
		stwio r6, 0(r9)
		movia r5, 155000
		Delay7:
			subi r5, r5, 1
			bne r0, r5, Delay7	
		movia r6, 0xffffffff
		stwio r6, 0(r9)
		br Read
