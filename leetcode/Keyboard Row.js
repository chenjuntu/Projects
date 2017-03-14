/**
 * @param {string[]} words
 * @return {string[]}
 */
 
//Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard

var findWords = function(words) {
	var fstrow = "qwertyuiopQWERTYUIOP";
	var sndrow = "asdfghjklASDFGHJKL";
	var trdrow = "zxcvbnmZXCVBNM";
	var Flag1, Flag2, Flag3;
	var Decision;
	var Test;
	var Result = [];
	for (var j = 0; j < words.length; j++){
		Flag1 = false;
		Flag2 = false;
		Flag3 = false;
		Test = words[j];
		Test = Test.split("");
		Decision = 0;
		for(var i = 0; i < Test.length; i++){
			if(fstrow.includes(Test[i]))
			{
				if(Flag2 || Flag3){
					Decision = -1;
					break;
				}
				else
					Flag1 = true;
			}
			if(sndrow.includes(Test[i]))
			{
				if(Flag1 || Flag3){
					Decision = -1;
					break;
				}
				else
					Flag2 = true;
			}
			if(trdrow.includes(Test[i]))
			{
				if(Flag1 || Flag2){
					Decision = -1;
					break;
				}
				else
					Flag3 = true;
			}
		}
		if(Decision == 0)
			Result.push(words[j]);
	}
	return Result;
};
var words = ["Hello", "Alaska", "Dad", "Peace"];
console.log(findWords(words));
//console.log(typeof words);