function upperCaser(str) {
    if (typeof(str) === "string") {
        return str.toUpperCase();
    }
    return undefined;
}

module.exports = upperCaser;
