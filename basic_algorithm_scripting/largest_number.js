

/* return the largest number from each array. (nested array)
* and put it into an array.. could use .map maybe, 
* but i will use double for loop to go through.. */

function largestOfFour(arr) {
  resultArray = [];
  var a , b;
  for (var i = 0; i < arr.length; i++) {
  	a = b = 0;
  	for (var j = 0; j < arr[i].length; j++) {
  		a = arr[i][j]; // set the value of a
  		if (a > b) {
  			b = a;  // use b as the placeholder
  		}
  	}
  	resultArray.push(b);  // when inner loop finished, b should be highest number, hence add it to result array.
  }
  return resultArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);