'use strict'

module.exports = function arrayMap(arr, fn, thisArg) {
	// SOLUTION GOES HERE
	return arr.reduce((acc, item, index, arr) => {
		acc.push(fn.call(thisArg, item, index, arr))
		return acc
	}, [])
}