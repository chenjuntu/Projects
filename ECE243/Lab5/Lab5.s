.include "nios_macros.s"
.global _start

.section .data
Straight: .word 0x1f
Right: .word 0x1e
Hard_right: .word 0x1c
Left: .word 0x0f
Hard_left: .word 0x07
Speed: .word 20

.section .text
.equ  JTAG, 0x10001020
_start:

/**************************************************************************************************
	In the whole program, r3 is used for temporary holding data.
	r8 is for JTAG.
	r9 is for storing instructions.
	r10 is sensor data
	r11 is speed data
***************************************************************************************************/
	movia r8, JTAG   #r8 represents JTAG
	mov r9, r0  #r9 is for storing instructions
	movia r17, 40
	Sensor_and_speed_data:
		movia r9, 0x02  #Writing instruction
		call Write
		call Read
		bne r3, r0, Sensor_and_speed_data   #Check if the data is what we want
		call Read
		mov r10, r3  #r10 stores sensor data
		call Read
		mov r11, r3  #r11 stores speed data
		
	#Sensor data and speed data are read. Next decide what to do
	
	Change_direction:
		movia r9, 0x05
		movia r12, 0x1f
		movia r13, 0x1e
		movia r14, 0x1c
		movia r15, 0x0f
		movia r16, 0x07
		call Write
		
		beq r10, r12, move_straight
		beq r10, r15, move_left	
		beq r10, r16, move_hard_left
		beq r10, r13, move_right
		beq r10, r14, move_hard_right
		
	move_straight:
		mov r9, r0
		call Write
		br change_acceleration
	move_left:
		movia r9, 200
		call Write
		br change_acceleration
	move_hard_left:
		movia r9, 150
		call Write
		br change_acceleration
	move_right:
		movia r9, 120
		call Write
		br change_acceleration
	move_hard_right:
		movia r9, 127
		call Write
		br change_acceleration

	change_acceleration:
		movia r9, 0x04
		call Write
		blt r11, r17, accelerate
		beq r11, r17, remain
		bgt r11, r17, decelerate
		br  Sensor_and_speed_data
	accelerate:
		movia r9, 0x36
		call Write
		br Sensor_and_speed_data
	remain:
		mov r9, r0
		call Write
		br Sensor_and_speed_data
	decelerate:
		movia r9, 0xffffffe6
		call Write
		br Sensor_and_speed_data

/*************************************************************************************************
After this block are functions.
*************************************************************************************************/	
Write:
	ldwio r3, 4(r8)  #Use r3 to hold data from base+4
	srli r3, r3, 16  #Shift it right 16bits so that we can check things in 16-31bits
	beq r3, r0, Write #If there is no space for writing, do this again
	stwio r9, 0(r8)   #Give the writing instruction to JTAG.
	ret

Read:
	ldwio r2, 0(r8)  #Use r2 to hold data from base
	andi r3, r2, 0x8000  #Mask other bits
	beq r3, r0, Read  #Test if the 15th bit is not 1, do this again
	andi r3, r2, 0x00ff #We only need the first 8-bit data
	ret
	
Delay:
	movia r20, 100000
	delay1:
		subi r20, r20, 1
		bne r20, r0, delay1
	ret
	
