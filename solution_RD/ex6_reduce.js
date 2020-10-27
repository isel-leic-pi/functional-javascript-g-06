'use strict'

function countWords(inputWords) {
    return inputWords.reduce((countMap, word) => {
        if(countMap[word] == undefined) countMap[word] = 0;
        ++countMap[word];
        return countMap;
    }, {});
}

module.exports = countWords