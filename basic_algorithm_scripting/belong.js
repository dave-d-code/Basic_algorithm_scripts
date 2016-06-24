/* to place in a position in an array an argument based 
* on sorting. return the index number. 
* i will sort the array, and then loop through again */

function getIndexToIns(arr, num) {
	sortedArray = arr.sort(function(a, b){return a-b}); // from w3 school and from earlier FCC code.
	console.log(sortedArray);
	for (var i = 0; i < sortedArray.length; i++) {
		if (num <= sortedArray[i]) {
			return i;
		} else if (num > sortedArray[sortedArray.length - 1]) { // if loop reaches the end with no placement
			return sortedArray.length;
		}
		
	}
 
}

getIndexToIns([40, 60], 50);
getIndexToIns([5, 3, 20, 3], 5);
getIndexToIns([3, 10, 5], 3);
getIndexToIns([2, 5, 10], 15);