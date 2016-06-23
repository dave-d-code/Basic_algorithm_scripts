

/* find the longest word in a string challenge..
* plan: turn string into an array and go through with a for loop 
* use regex to check each element matches a word, and then use counter stored as a array or check for blank space
* compare the array lengths and then return the biggest array */

function findLongestWord(str) {

	strArray = str.split(""); // everything into an array
	var counterArray = [];
	var oldArray = [];
	for (var i = 0; i < strArray.length; i++) {
		if (strArray[i] !== " ") {
			counterArray.push(strArray[i]);
		} else {
			if (counterArray.length > oldArray.length) {
				oldArray = counterArray;	
			}
			counterArray = [];
		}
	}

	if (counterArray.length > oldArray.length) { // in case the last word was the longest!
		return counterArray.length;
	} else {
		return oldArray.length;
	}

}

findLongestWord("The quick brown fox jumped over the lazy dog");