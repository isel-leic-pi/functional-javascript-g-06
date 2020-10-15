
//Solution1: WHY DIDN'T PASS ?

/*function countWords(inputWords) {
    const obj = new Map(); 
    return inputWords.reduce((countMap, word) => {
        if (countMap.has(word)) {
            countMap.set(word, countMap.get(word) + 1);
        } else {
            countMap.set(word, 1);
        }
        return countMap;
    }, obj);
}*/

function countWords(inputWords) {
    return inputWords.reduce((countMap, word) => {
        if (countMap[word] == undefined) {
            countMap[word] = 1;
        } else {
            ++countMap[word];
        }
        return countMap;
    }, {});
}

module.exports = countWords;