/**
 * @param {number} Input
 * @return {number}
 */
var DectoBin = function(Input){
	var count = 0;
	var Num = Input;
	var result = 0;
	var bit, quotient, result;
	while(Num > 0)
	{
		bit = Num % 2;
		quotient = parseInt(Num / 2);
		result = result+(Math.pow(10,count)*bit);
		count++;
		Num = quotient;
	}
	return result;
};

//Test case
var x = 9879;
console.log(DectoBin(x));