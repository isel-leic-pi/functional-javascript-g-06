'use strict'

function reduce(arr, fn, initial) {
      if(!arr.length) return initial;
      let value = initial;
      value = fn(value, arr[0], 0, arr);
      arr.shift(); // !! USE OF ARRAY METHODS, RETURN FUNCTION !!
      //console.log(arr);
      return reduce(arr, fn, value);
    }

module.exports = reduce 