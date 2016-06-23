

/* to title case each word in a sentence.
* could use expressive regex, but hey.
* Plan.. str to array again, search for blanks, and uppercase the next index.
* to be fair, will check that next index is a letter..
*/

function titleCase(str) {

	str = str.toLowerCase(); // everything to lower case
	strArray = str.split(""); // everything into an array
	strArray[0] = strArray[0].toUpperCase(); // first letter
	for (var i = 0; i < strArray.length; i++) {
		if (strArray[i] === " ") {
			strArray[i + 1] = strArray[i + 1].toUpperCase(); // cheeky, i know
		}
	}
	newStr = strArray.join("");
  	return newStr;
  
}

titleCase("I'm a little tea pot"); 


/*
from stackover.. this is one line of regex..
function toTitleCase(str)
{ */
//   // return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
// }

/// i really shold do the regex course.