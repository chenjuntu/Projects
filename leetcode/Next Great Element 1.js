/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
 
/*You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2. Find all the next greater numbers for nums1's elements in the corresponding places of nums2.

The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not exist, output -1 for this number.*/

var nextGreaterElement = function(findNums, nums) {
	var Target;
	var Result = [];
    function helper(Check){
		return Check == Target;
	}
	for(var i = 0; i < findNums.length; i++){
		var j;
		var Flag = false;
		Target = findNums[i];
		j = nums.findIndex(helper);
		if(j < (nums.length - 1)){
			for(j = j+1; j < nums.length; j++){
				if(findNums[i] < nums[j]){
					Result.push(nums[j]);
					Flag = true;
					break;
				}
			}
			if(Flag == false)
				Result.push(-1);
		}
		else
			Result.push(-1);
	}
	return Result;
};

var List1, List2;
List1 = [1,3,5,2,4];
List2 = [6,5,4,3,2,1,7];
console.log(nextGreaterElement(List1, List2));
