/* mutations challenge .. compare 2 arrays.. see if second array contains letters in 
* the first....
* plan... 1. everything in lowercase, 2. have to split both arrays to their own individual letters arrays 
* 3. see if method like in array to see if letter is present Indexof  -1 is a negative search */

function mutation(arr) {
  
  // grab each string and convert to lower case
  var string1 = arr[0].toLowerCase();
  var string2 = arr[1].toLowerCase();

  // put each string into its own array, split between each character
  strArray1 = string1.split("");
  strArray2 = string2.split("");

  // loop through array2, and see if each letter occurs in array1, if -1 occurs, jump out with return false;
  for (var i = 0; i < strArray2.length ; i++) {
  	if (strArray1.indexOf(strArray2[i]) === -1) { // ie letter not found in first array
  		return false;
  	}
  }

  return true;  // if it made it though each iteration without hitting false, then return true.


}

mutation(["hello", "hey"]);

