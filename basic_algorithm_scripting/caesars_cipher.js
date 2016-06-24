/* caeser's cipher  basic cipher which cuts alphabet in 2 rows of 13 letters.. straight translation 
* between each letter.. will use charCode to translate.. its plus or minus 13 i think.
* plan is to charat or charcodeat to create string of numbers, and then translate to code 
* will also need regex to check if its [A-Z] as they have dumped ? and ! in the messages 
* watch for blank spaces too..   */
// LBH QVQ VG!


function rot13(str) { 
	var numStr = "";
	var currentNum;

	// start going through the loop
	for (var i = 0; i < str.length; i++) {
		if (/[A-Z]/.test(str.charAt(i))) {  // check if dealing with a letter
			currentNum = str.charCodeAt(i);  // this should be each part translated to numbers.

			if (currentNum <= 77) { // this should be the translation
				currentNum += 13;
			} else {
				currentNum -= 13;
			}

			numStr += String.fromCharCode(currentNum); // put into the string


		} else {
			numStr += str.charAt(i);  // if blank space or syntax.. add it to the string
		}
		
	}

  return numStr;
}


rot13("SERR PBQR PNZC");
rot13("LBH QVQ VG!");

