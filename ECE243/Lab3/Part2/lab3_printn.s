/*********
 * 
 * Write the assembly function:
 *     printn ( char * , ... ) ;
 * Use the following C functions:
 *     printHex ( int ) ;
 *     printOct ( int ) ;
 *     printDec ( int ) ;
 * 
 * Note that 'a' is a valid integer, so movi r2, 'a' is valid, and you don't need to look up ASCII values.
 *********/
 
.section .text
.global	printn
printn:
	subi r27, r27, 12
	stw r5, 0(r27)
	stw r6, 4(r27)
	stw r7, 8(r27)
	subi r27, r27, 36
	stw r16, 0(r27)
	stw r17, 4(r27)
	stw r18, 8(r27)
	stw r19, 12(r27)
	stw r20, 16(r27)
	stw r21, 20(r27)
	stw r22, 24(r27)
	stw r23, 28(r27)
	stw r31, 32(r27) 
	mov r23, r27
	addi r23, r23, 36
	mov r18, r4
	
	LOOP:
		ldb r16, (r18)
		addi r18, r18, 1
		movi r17, 'O'
		movi r22, 'H'
		movi r19, 'D'
		beq r16, r17, Octal
		beq r16, r22, Hex
		beq r16, r19, Decimal
		beq r16, zero, End

	Octal:
	ldw r4, 0(r23)
	addi r23, r23, 4
	call printOct
	br LOOP
Hex:
	ldw r4, 0(r23)
	addi r23, r23, 4
	call printHex
	br LOOP
Decimal:
	ldw r4, 0(r23)
	addi r23, r23, 4
	call printDec
	br LOOP	
	
End:
	ldw r16, 0(r27)
	ldw r17, 4(r27)
	ldw r18, 8(r27)
	ldw r19, 12(r27)
	ldw r20, 16(r27)
	ldw r21, 20(r27)
	ldw r22, 24(r27)
	ldw r23, 28(r27)
	ldw r31, 32(r27)
	addi r27, r27, 36
	ldw r5, 0(r27)
	ldw r6, 4(r27)
	ldw r7, 8(r27)
	addi r27, r27, 12
    ret
