const sum = require('./sum');

describe('Sum function', () => {
    const number = 1;
    test('Should add 1 to 2 and return the result - 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('Should NOT 1 to 2 and return the result - 4', () => {
        expect(sum(1, 2)).not.toBe(4);
    });

    test('Should return the result - truthy value', () => {
        expect(sum(1, 2)).toBeTruthy();
    });

    test('Should NOT return the result - NaN', () => {
        expect(sum(1, 2)).not.toBeNaN();
    });

    test('Should add 0 to 0 and return the result - falsy value', () => {
        expect(sum(0, 0)).toBeFalsy();
    });

    test('Should add 0 to 0 and should NOT return null', () => {
        expect(sum(0, 0)).not.toBeNull();
    });
})