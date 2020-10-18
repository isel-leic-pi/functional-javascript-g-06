function Spy(target, method) {
    let result = {
        count: 0
    };
    const originalFn = target[method];
    target[method] = function() {
        result.count++;
        return originalFn.apply(this, arguments);
    };
    return result;
}

module.exports = Spy;