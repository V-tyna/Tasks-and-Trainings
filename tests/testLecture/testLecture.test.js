const validateRange = require('./testLecture');

describe.only('Validate Range function', () => {
    test('should get value 25 and return true', () => {
        expect(validateRange(25)).toBe(true);
    });

    test('should get value 150 and return true', () => {
        expect(validateRange(150)).toBe(true);
    });

    test('should get value 50 and return false', () => {
        expect(validateRange(50)).toBe(false);
    });

    test('should get value 100 and return false', () => {
        expect(validateRange(100)).toBe(false);
    });

    test('should get value 75 and return false', () => {
        expect(validateRange(75)).toBe(false);
    });

    test('should get negative value -75 and return true', () => {
        expect(validateRange(-75)).toBe(true);
    });

    test('should NOT be undefined value', () => {
        expect(validateRange(75)).not.toBeUndefined();
    });

    test('should get invalid value and return "Invalid argument"', () => {
        expect(validateRange()).toBe('Invalid argument');
    });

    test('should get 0 as value and return true', () => {
        expect(validateRange(0)).toBe(true);
    });

})