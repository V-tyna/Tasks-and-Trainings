const decSpy = require('./decoratorSpy');
let sum = require('../sum/sum');

describe('Decorator spy', () => {
    let sum, wrapper;
    beforeAll(() => {
        sum = (a, b) => a + b;
        wrapper = decSpy(sum);
    });

    test('Should write first call with arguments (1, 2) to its method "calls"', () => {
        wrapper(1, 2);
        expect(wrapper.calls).toEqual([[1, 2]]);
    });

    test('Should save ALL the results to decorator method "calls"', () => {
        wrapper(5, 7);
        expect(wrapper.calls).toEqual([[1, 2], [5, 7]]);
    });

    afterAll(() => {
        sum = null;
        wrapper = null;
    });
    })