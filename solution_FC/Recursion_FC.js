'use strict'

function reduce(arr, fn, initial) {
	if (arr.length == 0) {
		return initial
	}
	let acc = fn(initial, arr[0], 0, arr)
	let newArr = arr.slice(1)
	return reduce(newArr, fn, acc)
}

module.exports = reduce