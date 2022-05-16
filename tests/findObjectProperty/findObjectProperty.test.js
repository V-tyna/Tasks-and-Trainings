const findObjectProperty = require('./findObjectProperty');

describe('Function findObjectProperty', () => {
    test('should get property "name" and return "Property is present in the object"' , () => {
        expect(findObjectProperty('name', {name: 'Alex'})).toEqual('Property is present in the object');
    });

    test('should get property "age" and return "Property is not present in the object"' , () => {
        expect(findObjectProperty('age', {name: 'Alex'})).toEqual('Property is not present in the object');
    });
})