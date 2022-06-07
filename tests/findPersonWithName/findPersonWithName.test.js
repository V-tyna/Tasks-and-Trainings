const findPerson = require('./findPersonWithName');

const arrayPeople = ['Leon', 'Kate', 'Jane', 'Don', 'John'];

describe('finPerson function', () => {
    test('should find "Don" for arrayPeople', () => {
        expect(findPerson(arrayPeople)).toBe('Don');
    });

    test('should return "" for []', () => {
        expect(findPerson([])).toBe('');
    });
});
