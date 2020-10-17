function logger(namespace) {
    return function () {
        console.log.apply(console, [namespace].concat(Array.from(arguments)));
    };
}

module.exports = logger;