const splitString = require('./splitString');

describe('Function splitString', () => {
    test('should get string "ABC" and return the array ["A", "B", "C"]' , () => {
        expect(splitString('ABC')).toEqual(["A", "B", "C"]);
    });

    test('should get undefined string and throw new Error "Invalid argument"' , () => {
        expect(() => { splitString() }).toThrow("Invalid argument");
    });
})