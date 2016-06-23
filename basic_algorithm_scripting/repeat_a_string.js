/* repeat the string challenge
* use a for loop to concat the string i think
* return empty string if num is not positive */


function repeatStringNumTimes(str, num) {
  currentStr = str;
  if (num < 1) {  /// if num less than 1, return empty string.
  	return "";
  }
  for (var i = 1; i < num ; i++) {
  	currentStr += str; // cant do str += str, or it gets expontially bigger!
  }
  return currentStr;
}

repeatStringNumTimes("*", 1);