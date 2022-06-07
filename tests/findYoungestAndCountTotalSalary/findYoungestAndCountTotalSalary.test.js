const findYoungestAndCountTotalSalary = require('./findYoungestAndCountTotalSalary');

const arrayYoungestSalary = [{age: 25, salary: 4000}, {age: 40, salary: 5000}, {age: 35, salary: 2000}, {age: 18, salary: 3000}];

describe('findYoungestAndCountTotalSalary function', () => {
    test('should get arrayYoungestSalary and return string "youngestAge: 18, totalSalary: 14000"' , () => {
        expect(findYoungestAndCountTotalSalary(arrayYoungestSalary)).toBe('youngestAge: 18, totalSalary: 14000');
    });

    test('should get empty array and return string "youngestAge: Infinity, totalSalary: 0"' , () => {
        expect(findYoungestAndCountTotalSalary([])).toBe('youngestAge: Infinity, totalSalary: 0');
    });

    test('should get empty array and not return empty string' , () => {
        expect(findYoungestAndCountTotalSalary([])).not.toBe('');
    });
});