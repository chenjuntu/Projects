.section  .text
.global main
main: 
	movi r4, 10
	call printOct
	movi r4, 10
	call printDec
	movi r4, 10
	call printHex
	ret
End: br End
	
	
