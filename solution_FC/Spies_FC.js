'use strict'

function Spy(target, method) {
	// SOLUTION GOES HERE
	let tracker = {
		count: 0
	}
	const fun = target[method]
	target[method] =( ) => {
		tracker.count++ 
		return fun.apply(this, arguments)
	}
	
	return tracker
}


module.exports = Spy