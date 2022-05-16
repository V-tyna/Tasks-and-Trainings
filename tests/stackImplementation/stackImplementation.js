class Stack {
    constructor() {
        this.initialObj = {};
        this.lastIndex = -1;
    }

    get stackLength() {
        return this.lastIndex + 1;
    }

    getElemByIndex(i) {
        return this.initialObj[i];
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

module.exports = Stack;