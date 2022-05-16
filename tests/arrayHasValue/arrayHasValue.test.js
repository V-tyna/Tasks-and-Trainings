const arrayHasValue = require('./arrayHasValue');

describe('ArrayHasValue function', () => {
    test('should has elements', () => {
        expect(arrayHasValue(1, [])).toBe(0);
    });

    test('should get value 3 and array [1, 2, 3] and return true', () => {
        expect(arrayHasValue(3, [1, 2, 3])).toBe(true);
    });

    test('should get value 4 and array [1, 2, 3] and return false', () => {
        expect(arrayHasValue(4, [1, 2, 3])).toBe(false);
    });
})