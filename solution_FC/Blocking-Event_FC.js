'use strict'

function repeat(operation, num) {
	// modify this so it can be interrupted
	if (num <= 0) return 
	
	operation()

	
	if(num % 2 == 0 ){
		setTimeout( () => repeat(operation, --num))
	} else {
		repeat (operation, --num)
	}
}

module.exports = repeat