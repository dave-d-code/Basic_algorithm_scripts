/* chunky monkey...take an array, and split it into nested arrays.. 
* as suggested will use array.push and array.slice
* need to work out how many times round */
// clever use of for loop, jumping i by size, and slicing by i + slice

function chunkArrayInGroups(arr, size) {
  var masterArray = [];

  for (var i = 0; i < arr.length; i += size) { // iterate through the array, jumping by the size
  	masterArray.push(arr.slice(i, i + size));
  }

  return masterArray;

}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);