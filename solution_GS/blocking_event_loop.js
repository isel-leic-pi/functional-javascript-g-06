function repeat(operation, num) {
    // modify this so it can be interrupted
    if (num <= 0) 
        return;
    operation();
    if (num % 5 === 0) {
        setTimeout(() => repeat(operation, --num));
    } else {
        repeat(operation, --num);
    }
}

module.exports = repeat;