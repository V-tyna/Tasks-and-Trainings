const Stack = require('./stackImplementation');

describe('Class Stack', () => {
    let stack;

    beforeEach(() => {
        stack = new Stack();
    })

    test('should be created empty', () => {
        expect(stack.lastIndex).toBe(-1);
        expect(stack.initialObj).toEqual({});
    });

    test('should add value to the end', () => {
        stack.pushToStack('First elem');
        stack.pushToStack('Second elem');
        expect(stack.lastIndex).toBe(1);
        expect(stack.initialObj).toEqual({'0': 'First elem', '1': 'Second elem'});
    });

    test('should add two values and remove last value from the end', () => {
        stack.pushToStack('First elem');
        stack.pushToStack('Second elem');
        stack.popFromStack('Second elem');
        expect(stack.lastIndex).toBe(0);
        expect(stack.initialObj).toEqual({'0': 'First elem'});
    });

    test('should get one element and return stack length === 1', () => {
        stack.pushToStack('First elem');
        expect(stack.stackLength).toBe(1);
    });

    test('should return stack length === 0 for empty stack', () => {
        expect(stack.stackLength).toBe(0);
    });
})