const getMaxStrings = require('./getMaxStrings');

describe('Function getMaxStrings', () => {
    const initialArr = ["aba", "aa", "ad", "vcd", "aba"];
    const expectedArr = ["aba", "vcd", "aba"];

    test('should get initialArr and return expectedArr', () => {
        expect(getMaxStrings(initialArr)).toEqual(expectedArr);
    });

    test('should get undefined and throw error with message "Argument is required"', () => {
        expect(() => getMaxStrings()).toThrow('Argument is required');
    });

    test('should get NOT array and throw error with message "Argument should be an array"', () => {
        expect(() => getMaxStrings({})).toThrow('Argument should be an array');
    });

    test('should get empty array and throw error with message "Array shouldn\'t be empty"', () => {
        expect(() => getMaxStrings([])).toThrow('Array shouldn\'t be empty');
    });

    test('should get array includes different data types and throw error with message "All arguments in array should be a string"', () => {
        expect(() => getMaxStrings(["abc", 123, {}, "ab"])).toThrow('All arguments in array should be a string');
    });
})