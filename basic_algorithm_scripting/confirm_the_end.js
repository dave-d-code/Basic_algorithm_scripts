/* confirm the letter at the end of a string.
* I will simply use slice at the end using .length 
* and then compare that to the variable.
* note that you slice with the strlen of variable
* hence slice(str)   */

function confirmEnding(str, target) {
 
 sliceStr = str.slice((str.length - target.length)); // get the string at the end, starting at length of target.
 if (sliceStr === target) {
 	return true;
 } else {
 	return false;
 }

}

confirmEnding("Bastian", "tan");


