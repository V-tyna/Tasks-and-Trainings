//---------------------------------------------------------------------------------------------------------------------------
//                                      Remove all "0" and "-" from number
//---------------------------------------------------------------------------------------------------------------------------

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

//---------------------------------------------------------------------------------------------------------------------------
//                                      Unique value
//---------------------------------------------------------------------------------------------------------------------------

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

//---------------------------------------------------------------------------------------------------------------------------
//                                      Alternative implementation of Array.flat()
//---------------------------------------------------------------------------------------------------------------------------

const arrForFlat = [3, [2, 97, [11, 15, [7]]], 5, [23, 12, [82, 36, 13, [11, 71, [1, [58, [35, 1]]]]]]];

const alternativeFlat = (arr) => {
    const tempArr = [...arr]; // use stack
    const result = [];
    while(tempArr.length) { // while stack has elements iterrate
      const lastElem = tempArr.pop(); // cut last element
      if(Array.isArray(lastElem)) { // if last element is type Array
          tempArr.push(...lastElem); // spread last element to the stack
      } else {
          result.push(lastElem); // if last element isn't type Array, push last element to the final result
      }
    }
    return result.reverse(); // reverse elements in result array to restore order as in input array
}

console.log('Implementation flat method: ', alternativeFlat(arrForFlat));