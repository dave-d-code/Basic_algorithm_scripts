

/* palindromes.. function to return true or false if a word
* reads the same in reverse. will need regex to get rid of 
* irregular expressions i think 
* when you have done that.. str to array to str using previous function, and then compare.
*/

function palindrome(str) {

	// use regex to filter out all non letter characters
	var regexPattern = /[_]|\W+/g;  // get rid of all non word characters, underscores, (numbers to be left in)
	var newStr = str.replace(regexPattern, "");
	newStr = newStr.toLowerCase(); // everything to lower string.
  	if (newStr === reverseString(newStr)) {
  		return true;
  	} else {
  		return false;
  	}
}

// function from the reverse string challenge.
function reverseString(str) {
	strArray = str.split("");
	reverseArray = strArray.reverse();
	newStr = reverseArray.join("");  // join array back with no separtor.. otherwise commas are inserted

  return newStr;
}



palindrome("eye");
palindrome("2_A3*3#A2");
palindrome("race CAR");