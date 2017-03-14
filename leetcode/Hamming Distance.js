/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 
/*Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.
*/
 
var hammingDistance = function(x, y) {
	var Temp;
	var Count = 0;
	Temp = x ^ y; //This XOR is to find where are the differences
	Temp = Temp.toString(2);
	for(var i = 0; i < Temp.length; i++){
		if(Temp[i] == 1)
			Count++;
	}
	return Count;
};

//Test Case
var x = 9;
var y = 4;
console.log(hammingDistance(x,y));
