'use strict'

/*function doubleAll(numbers) {
    var result = []
    for (var i = 0; i < numbers.length; i++) {
      result.push(numbers[i] * 2)
    }
    return result
  }

  module.exports = doubleAll */
  
  function doubleAll(numbers) {
        return numbers.map(x => x * 2);
    }

module.exports = doubleAll