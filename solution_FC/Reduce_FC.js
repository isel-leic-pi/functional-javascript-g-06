'use strict'

function countWords(inputWords) {
	// SOLUTION GOES HERE
	return inputWords.reduce((Maps, words) => {
		/*if (Maps[words] == undefined) {
			Maps[words] = 1
		} else {
			++Maps[words]
    }*/
		Maps[words] = ++ Maps[words] || 1
		return Maps
	}
	, {})
}

module.exports = countWords