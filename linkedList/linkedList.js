const singleLinkedList = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5,
                    next: null,
                },
            },
        },
    }
};

// #1 Solving through the while loop.

function showEachValueFromLinkedList(list) {
        while(list) {
            console.log('Value is: ', list.value);
            list = list.next;
        }
}

// #2 Solving through the recursion.
showEachValueFromLinkedList(singleLinkedList);

function showEachValueRecursion(list) {
    console.log('Recursion value is: ', list.value);
    if(list.next) {
        showEachValueRecursion(list.next);
    }
}

showEachValueRecursion(singleLinkedList); 

//------------------------------------------------------------------------------------------------------------------------
//                                      Implementation of Singly Linked List
//------------------------------------------------------------------------------------------------------------------------

class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    makeString() {
        return `${this.value}`;
    }
}

class LinkedList {
    constructor(head = null, tail = null) {
        this.head = head;
        this.tail = tail;
    }

    append(value) {
        const newNode = new LinkedListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }

    prepend(value) {
        const newNode = new LinkedListNode(value, this.head);
        if (!this.tail) {
            this.tail = newNode;

            return this;
        }
        this.head = newNode;
        return this;
    }

    insertAfter(value, afterNode) {
        if (!afterNode) {
            return this;
        }

        const newNode = new LinkedListNode(value);
        newNode.next = afterNode.next;
        afterNode.next = newNode;

        if (newNode.next === null) {
            this.tail = newNode;
        }
        
        return this;
    }

    find(value) {
        let currentNode = this.head;

        if(!this.head) {
            return null;
        }

        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }

        return null;
    }

    delete(value) {
        if(!this.head) {
            return null;
        }

        let deletedNode = null;

        while(this.head && this.head.value === value) {
            deletedNode = this.head;
            this.head = this.head.next;
        }

        let currentNode = this.head;

        if(currentNode !== null) {
            while(currentNode.next) {
                if(currentNode.next.value === value) {
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }        

        if(this.tail?.value === value) {
            this.tail = currentNode;
        }

        return deletedNode;
    }

    toArray() {
        const array = [];
        let currentNode = this.head;

        while (currentNode) {
            array.push(currentNode);
            currentNode = currentNode.next;
        }
        return array;
    }

    makeString() {
        return this.toArray().map(node => node.makeString()).toString();
    }
}

module.exports = LinkedList;
