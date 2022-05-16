class Stack {
    constructor() {
        this.initialObj = {};
        this.lastIndex = -1;
    }

    get stackLength() {
        return this.lastIndex + 1;
    }

    getElemByIndex(i) {
        return this.initialObj[i.toString()];
    }

    pushToStack(value) {
        this.lastIndex++;
        this.initialObj[this.lastIndex] = value;
    }

    popFromStack() {
        delete this.initialObj[this.lastIndex]; 
        this.lastIndex--;
    }
}

const stack = new Stack();

console.log('Lenght of empty stack: ', stack.stackLength);

stack.pushToStack('First elem');
stack.pushToStack('Second elem');
stack.pushToStack('Third elem');
console.log('After pushes: ', stack);

console.log('Get elem by index: ', stack.getElemByIndex(1));

stack.popFromStack();
console.log('After Pop: ', stack);

console.log('Stack length is: ', stack.stackLength);

module.exports = Stack;