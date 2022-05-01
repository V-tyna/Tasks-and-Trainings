// ---------------------------------------
//              Binary search
// ---------------------------------------

const arrForBinarySearch = [1, 3, 5, 7, 8, 9, 10, 14, 16, 18, 21, 23, 67, 98, 110]

function binarySearch(arr, seachingDigit) {
    let min = 0;
    let max = arr.length - 1;
    let middle = Math.floor((max + min) / 2);

    while(seachingDigit !== arr[middle] && min < max) {
        if(seachingDigit < arr[middle]) {
            max = middle - 1;
        } else {
            min = middle + 1;
        }
        middle = Math.floor((max + min) / 2);
    }
    return (arr[middle] !== seachingDigit ? "No such digit" : middle);
}

console.log('Binary Search. Target index is - ', binarySearch(arrForBinarySearch, 23));

// ---------------------------------------
//              Merge Sort
// ---------------------------------------

const arrForMergeSort = [2, 12, 4, 6, 5, 18, 28, 17, 5, 4, 91, 42, 15, 11, 27]

const mergeSort = (array) => {
    //basic check - if array can be slplitted
    if(array.length < 2) return array;
    // find the middle index
    const middle = Math.floor(array.length / 2);
   // find the left side
    const leftSide = array.slice(0, middle);
   // find the right side
    const rightSide = array.slice(middle);
    // use recursion that merge two splitted sides
    return merge(mergeSort(leftSide), mergeSort(rightSide));
}

const merge = (left, right) => {
    // new array for the result
    const result = [];
    // check if left array and right array aren't empty
    while(left.length && right.length) {
        // compare two [0] indexes of left and right arrays, 
        // the lower value shift from the initial arrray and push to the result array
        if(left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    // check use case when we have odd values in left or right arrays
    while(left.length) {
        result.push(left.shift());
    }
    while(right.length) {
        result.push(right.shift());
    }
    // return result array
    return result;
}

console.log('Merge Sort: ', mergeSort(arrForMergeSort));

// ---------------------------------------
//              Bubble Sort
// ---------------------------------------

const arrForBubbleSort = [6, 2, 51, 63, 12, 4, 8, 35, 28, 1, 7];
const bubbleSort = (arr) => {
    // 1st itteration
    for(let i = 0; i < arr.length; i++) {
        //2nd itteration to compare 2 values 
        for(let j = 0; j < arr.length; j++){
            let temp;
            if(arr[j] > arr[j + 1]) {
                temp = arr[j]; // add 1st value to temporary variable
                arr[j] = arr[j + 1]; // change 1st value to the 2nd
                arr[j + 1] = temp; // to 2nd value assign 1st that lies in temp variable
            }
        }
    }
    return arr;
}

console.log('Bubble sort: ', bubbleSort(arrForBubbleSort));