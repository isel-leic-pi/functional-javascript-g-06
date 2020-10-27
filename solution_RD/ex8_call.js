'use strict'

function duckCount() {
    return Array.from(arguments)
    .filter(args => Object.prototype.hasOwnProperty.call(args, 'quack'))
    .length
}
module.exports = duckCount