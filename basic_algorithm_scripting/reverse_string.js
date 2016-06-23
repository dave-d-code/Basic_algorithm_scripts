// Mission: reverse a string

// Plan: convert string in an array, reverse the array.. array back to string.. return string


function reverseString(str) {
	strArray = str.split("");
	reverseArray = strArray.reverse();
	newStr = reverseArray.join("");  // join array back with no separtor.. otherwise commas are inserted

  return newStr;
}

reverseString("hello");