const getUpperCaseForUserName = require('./getUpperCaseForUserName');

describe('Function getUpperCaseForUserName', () => {
    test('should get name "Alex" and return the name in upper case - "ALEX"' , () => {
        expect(getUpperCaseForUserName('Alex')).toBe('ALEX');
    });

    test('should get name "Bob" and throw new Error "The user\'s name is Bob"' , () => {
        expect(() => { getUpperCaseForUserName('Bob') }).toThrow("The user\'s name is Bob");
    });
})