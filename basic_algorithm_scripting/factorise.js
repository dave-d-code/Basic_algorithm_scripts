
/* Objective : to factoralize a number
* ie 5! is 5 * 4 * 3 * 2 * 1 
* plan to use while loop and times numbers together */

function factorialize(num) {

	var total = num;
	if (num == 0 || num == 1) {
		return 1;
	}
	while (num >= 2) { // stop at 2 to stop 1 * 0
		total *= (num - 1);
		num--;	
	}
	
	return total;

}

factorialize(5);