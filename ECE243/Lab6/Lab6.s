.include "nios_macros.s"
.global _start

.section .text
.equ  JTAG, 0x10001020
.equ TIMER, 0x10002000
.equ  NewJTAG, 0x10001000
_start:

/**************************************************************************************************
	In the whole program, r3 is used for temporary holding data.
	r8 is for JTAG.
	r9 is for storing instructions.
	r10 is sensor data
	r11 is speed data
***************************************************************************************************/
    movia r7, NewJTAG
	movia r8, 0b01
	stwio r8, 4(r7)
	movia r8, JTAG   #r8 represents JTAG
	mov r9, r0  #r9 is for storing instructions
	movia r17, 40
	movia r18, TIMER
	stwio r0, (r18)     #Initializing the timer
	movi r19, 0x00000101   #Enable ienable for irq0 and irq8
	wrctl ienable, r19
	movi r19, 0b1
	wrctl status, r19   #Enable the PIE bit
	movia r20, 0b0
	movia r21, 0b0
	movia r22, 0x73
	Timer:
		movui r19, %lo(0x02FAF080)
		stwio r19, 8(r18)
		movui r19, %hi(0x02FAF080)
		stwio r19, 12(r18)
		movui r19, 0b111  
		stwio r19, 4(r18)
		
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
		br  Print
	accelerate:
		movia r9, 0x40
		call Write
		br Print
	remain:
		mov r9, r0
		call Write
		br Print
	decelerate:
		movia r9, 0xffffffc1
		call Write
		br Print
	
    Print:
	movia r12, 0x73  #print speed
	movia r13, 0x72  #print sensor
	beq r22, r12, Printspeed
	beq r22, r13, Printsensor
	movia r22, 0x73
	br Sensor_and_speed_data
	Printspeed:
		# Clear the window first
		movia r14, 0x1b
		stwio r14, (r7)
		movia r14, 0x5b
		stwio r14, (r7)
		movia r14, 0x32
		stwio r14, (r7)
		movia r14, 0x4A
		stwio r14, (r7)
		#Print the speed
		/*ldw r5, (r21)
		ldw r6, (r21)*/
		movia r5, 0x53
		movia r6, 0x50
		#call Convert
		stwio r5, (r7)
		stwio r6, (r7)
		br Sensor_and_speed_data
	Printsensor:
		#Clear the window first
		movia r14, 0x1b
		stwio r14, (r7)
		movia r14, 0x5b
		stwio r14, (r7)
		movia r14, 0x32
		stwio r14, (r7)
		movia r14, 0x4A
		stwio r14, (r7)
		#Print the sensor
		/*ldw r5, (r20)
		ldw r6, (r20)*/
		movia r5, 0x53
		movia r6, 0x4f
		#call Convert
		stwio r5, (r7)
		stwio r6, (r7)
		br Sensor_and_speed_data
		
		
.section .exceptions, "ax"
ISR:
/*	subi r27, r27, 12
	stw et, (r27)
	rdctl et, estatus
	stw et, 4(r27)
	stw ea, 8(r27) */
	
#check IRQ0(Timer)
	rdctl et, ipending  #check ipending (ctl4)
	andi et, et, 0b1
	bne et, r0, Serve_irq0		

#check IRQ8(JTAG) . 
	rdctl et, ipending  #check ipending
	andi et, et, 0x100
	bne et, r0, Serve_irq8	  
	br exit

Serve_irq0:
#	movi et, 0x1   #re-enable interrupts
#	wrctl status, et
	mov r20, r10   #R20 holds the sensor data
	mov r21, r11   #R21 holds the speed data
	movia et, TIMER
	stwio r0, (et) 
	br exit
	
Serve_irq8:
	#Then read data from JTAG
	ldwio et, 0(r7)
	andi r22, et, 0x8000
	beq r22, r0, Serve_irq8
	andi r22, et, 0x00ff
	br exit  
	

exit:
/*	wrctl status, zero
	ldw et, 4(sp)
	wrctl estatus, et
	ldw et, (sp)
	ldw ea, 8(sp) */
	subi ea, ea, 4
	eret
		

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
Convert:
	#r5 for upper 4 bits and r6 for lower 4bits
	srli r5, r5, 4
	movia r2, 9
	ble r5, r2, Number
	br Char
	Number:
		addi r5, r5, 0x30
		br Next
	Char:
		addi r5, r5, 0x37
		br Next
	Next:
		andi r6, r6, 0x0f
		ble r6, r2, Number1
		br Char1
	Number1:
		addi r6, r6, 0x30
		br Next1
	Char1:
		addi r6, r6, 0x37
		br Next1
	Next1:
		ret
		
	
