.include "nios_macros.s"
.global _start
.equ Direction, 0x07f557ff  #This is for the direction of JP1
.equ JP1, 0x10000060  #Base address of JP1
.equ  TIMER, 0x10002000             
.section .text

_start:
movia r8, JP1   #Address of JP1
movia r9, Direction  #r9 carries the direction instruction
stwio r9, 4(r8)  #implement direction to JP1

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
movia r4, 50000
blt r12, r11, Backward  
bgt r12, r11, Forward  
beq r12, r11, Balance  

# 1st case
Backward:
	movia r10, 0xfffffffe
	stwio r10, 0(r8)
	call Timer
	movia r10, 0xffffffff
	stwio r10, 0(r8)
	call Timer
	br Loop1

# 2nd case
Forward:
	movia r10, 0xfffffffc
	stwio r10, 0(r8)
	call Timer
	movia r10, 0xffffffff
	stwio r10, 0(r8)
	call Timer
	br Loop1

# 3rd case: head = tail
Balance:
	movia r10, 0xffffffff
	stwio r10, 0(r8)
	br Loop1   #Terminates all motors and sensors

Timer:
	movia r18, TIMER  #Initialize r18 to point to the Timer
	stwio r0, 0(r18)  #clear the timer
	stwio r4, 8(r18)  #Set up the counting down time for lower 4bits
	movui r22, 0x0000 
	stwio r22, 12(r18)
	movui r22, 4
	stwio r22, 4(r18)  #Timer is started here  
	Poll:
		ldwio r19, 0(r18)
		andi r19, r19, 0b1
		beq r19, r0, Poll  
ret
