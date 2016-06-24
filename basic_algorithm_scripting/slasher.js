/* slasher challenger.. seems to be splicing an array, rather than slice */

function slasher(arr, howMany) {
  
  arr.splice(0, howMany); // stuff deleted from the array
  return arr; // give back whats left
}

slasher([1, 2, 3], 2);
slasher(["burgers", "fries", "shake"], 1);
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5);
slasher([1, 2, 3], 0);