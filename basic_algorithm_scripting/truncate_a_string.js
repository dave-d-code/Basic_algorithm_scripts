/* truncate a string.. basically slice the string again.. using 
* slice again and num as the length argument. if num is < 3.. dont add "..." */
// more difficult as the truncation cannot be in the middle of a word if num > 3
// lets while loop back until space is hit. use a pointer to see where it has ended, and while loop back
// using the pointer.


function truncateString(str, num) {
var newStr = "";
var pointer = "";	
 
 if (num >= str.length) {
 	newStr = str;
 } else if (num > 3) {
 	pointer = str.slice(num, num + 1);
 	if (pointer === " ") {
 		newStr = str.slice(0, num -1);
 		newStr += "...";
 	} else {
 		while (pointer !== " ") { // move the pointer back
 			num--;
 			pointer = str.slice(num, num + 1);
 		}
 		newStr = str.slice(0, num); // attribute of while loops..
 		newStr += "...";
 	}
 	
 } else {
 	newStr = str.slice(0, num);
 	newStr += "...";
 }

   
  return newStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
truncateString("Peter Piper picked a peck of pickled peppers", 14)

