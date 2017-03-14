# Include nios_macros.s to workaround a bug in the movia pseudo-instruction.

.include "nios_macros.s"




.equ RED_LEDS, 0x10000000

.equ GREEN_LEDS, 0x10000010     # (Hint: See DESL website for documentation on LEDs)




.data                  # "data" section for input and output lists




IN_LIST:               # List of 10 words starting at location IN_LIST

    .word 1

    .word -1

    .word -2

    .word 2

    .word 0

    .word -3

    .word 100

    .word 0xffffff9c

    .word 0x100

    .word 0b1111

    

OUT_NEGATIVE:

    .skip 40            # Reserve space for 10 output words

    

OUT_POSITIVE:

    .skip 40            # Reserve space for 10 output words




#-----------------------------------------




.text                  # "text" section for (read-only) code




    # Register allocation:

    #   r0 is zero, and r1 is "assembler temporary". Not used here.

    #   r2  Holds the number of negative numbers in the list

    #   r3  Holds the number of non-negative numbers in the list

    #   r_  A pointer to ___

    #   r_  loop counter for ___

    #   r16 Register for short-lived temporary values.

    #   etc...




.global _start

_start:




    # Your program here. Pseudocode and some code done for you:

    movia r8, 10

    movia r20, OUT_POSITIVE

    movia r21, OUT_NEGATIVE

    movia r2, 0

    movia r3, 0

    # Begin loop to process each number

    movia r9, IN_LIST

    Loop:

        ldw r15, 0(r9)

	bge r15, r0, POSITIVE

	blt r15, r0, NEGATIVE

    POSITIVE: 

	stw r15, 0(r20)

	addi r9, r9, 4

	addi r20, r20, 4

	addi r3, r3, 1

	br NEXT

    NEGATIVE:

	stw r15, 0(r21)

	addi r9, r9, 4

	addi r21, r21, 4

	addi r2, r2, 1

	br NEXT 

        # Process a number here:

        #    if (number is negative) { 

        #        insert number in OUT_NEGATIVE list

        #        increment count of negative values (r2)

        #    } else {

        #        insert number in OUT_POSITIVE list

        #        increment count of non-negative values (r3)

        #    }

        # Done processing.

        

        # After processing each number, output current counts to LEDs.

        # (You'll learn more about I/O in Lab 4.)

    NEXT:

        movia  r16, RED_LEDS          # r16 is a temporary value

        stwio  r2, 0(r16)             # Send r2 out to the red LEDs device

        movia  r16, GREEN_LEDS

        stwio  r3, 0(r16)             # Send r3 out to the green LEDs device

        # Finished output to LEDs.

        subi r8, r8, 1

    # End loop

    bne r8, r0, Loop

LOOP_FOREVER:

    br LOOP_FOREVER                   # Loop forever.
