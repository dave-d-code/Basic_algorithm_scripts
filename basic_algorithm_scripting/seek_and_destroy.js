/* to clear out elements of an array that occur in the second parameter.
* i will use mixture of indexOf(searchValue) and filter. */
// random number of function arguments are being presented.. so use arguments object to deal with this


var filtered, currentArgu; // instead of globals.. you can move checker function inside the destroyer function

function destroyer(arr) {
  var firstArray = arguments[0];
 
  for (var i = 1; i < arguments.length; i++) {

  	currentArgu = arguments[i];
  	filtered = firstArray.filter(checker); // array is just reseting dumbass
	firstArray = filtered;  // this should do it.	reset the changed array
  }
  return filtered;
}

 function checker(value) {
  	return value != currentArgu;
  }


destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer(["tree", "hamburger", 53], "tree", 53);

