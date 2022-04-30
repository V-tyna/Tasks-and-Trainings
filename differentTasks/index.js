// Rremove all "0" and "-" from number

function removeZeroAndDash(num) {
    const str = num.toString();
    let finalStr = '';
    for(let letter of str) {
        if(letter !== "-" && letter != 0) {
            finalStr += letter;
        }
    }
    console.log(+finalStr);
    return +finalStr;
}

removeZeroAndDash(-909010090);

// #1 way Unique digits

const ununiqueArr = [1, 2, 5, 1, 7, 3, 2, 9];

const uniqueDigits = (arr) => {
    return Array.from(new Set(arr));
}

console.log('First way: ', uniqueDigits(ununiqueArr));

// #2 way Unique digits

const uniqueDigitsLoops = (arr) => {
    const finalArr = [];
    for(let i = 0 ; i < arr.length; i++) {
        if(!finalArr.includes(arr[i])) {
            finalArr.push(arr[i]);
        } 
    }
    return finalArr;
}

console.log('Second way: ', uniqueDigitsLoops(ununiqueArr));