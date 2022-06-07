const findProgrammer = require('./findProgrammer');

const inputJob = [{name: 'John', job: 'chef'}, {name: 'Sean', job: 'police officer'}, {name: 'Kate', job: 'programmer'}, {name: 'Dean', job: 'accountant'}];
const empty = [];

describe('findProgrammer function', () => {
    test('should get array with objects and find name of person with job: "programmer"', () => {
        expect(findProgrammer(inputJob)).toEqual(['Kate']);
    });

    test('should get empty array and return the same empty array', () => {
        expect(findProgrammer(empty)).toBe(empty);
    });
});