function arrayMap(arr, fn, thisArg) {
    return arr.reduce((acc, current, idx, arr) => {
        acc.push(fn.call(thisArg, current, arr));
        return acc;
    }, []);
}

module.exports = arrayMap;