/**
 * @param {number} num
 * @return {number}
 */
 
/*Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.*/

 
var findComplement = function(num) {
	var Length = (num.toString(2)).length;
	num = num << (32-Length);
	num = ~num;
	num = num >>> (32-Length);
	return num;
};

var num = 5;
console.log(findComplement(num));