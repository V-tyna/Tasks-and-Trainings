// Binary search

const arrForBinarySearch = [1, 3, 5, 7, 8,9, 10, 14, 16, 18, 21, 23, 67, 98, 110]

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

console.log("Target index is - ", binarySearch(arrForBinarySearch, 23));