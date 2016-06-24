/* to remove false values from an array using the filter function */


function bouncer(arr) {
 
	return arr.filter(checker);
}

// have a separate function to check values

function checker(value) { // not quite as tidy as i wanted.. but doing value === false wasnt working
	if (value) {			// hence use if statement to search for -ve values
		return value;
	} else {
		return;
	}  
}

bouncer([7, "ate", "", false, 9]);