const getUserByName = require('./getUserByName');

describe('Function getUserByName', () => {
    test('Should be defined', () => {
        expect(getUserByName).toBeDefined();
    });

    test('Should have property "name"', () => {
        expect(getUserByName('Bob')).toHaveProperty('name');
    });

    test('Should NOT have property "age"', () => {
        expect(getUserByName('Bob')).not.toHaveProperty('age');
    });

    test('Should get argument "Alex" and return object {name: "Alex"}', () => {
        expect(getUserByName('Alex')).toEqual({name: 'Alex'});
    });

    test('Should get argument "noUserWithSuchName" and return undefined', () => {
        expect(getUserByName('noUserWithSuchName')).toBeUndefined();
    });
})