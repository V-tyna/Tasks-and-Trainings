const decoratorSpy = (func) => {
    wrapper = (...args) => {
        wrapper.calls.push(args);
        return func(...args);
    }
    wrapper.calls = [];
    return wrapper;
}

module.exports = decoratorSpy;