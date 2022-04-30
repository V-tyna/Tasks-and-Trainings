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