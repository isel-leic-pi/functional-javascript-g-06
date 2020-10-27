'use strict'

function upperCaser(input) {
    return (typeof(input) === "string") ? input && input.toUpperCase() : undefined;
}

module.exports = upperCaser