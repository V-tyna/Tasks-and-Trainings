const getMaxStrings = (arr) => {
    if(arr === undefined) {
        throw new Error('Argument is required');
    }

    if(!Array.isArray(arr)) {
        throw new Error('Argument should be an array');
    }

    if(!arr.length) {
        throw new Error('Array shouldn\'t be empty');
    }

    let tempLength = 0;
    arr.map(str => { 
        if(typeof str !== 'string') {
            throw new Error('All arguments in array should be a string');   
        } else {
            str.length > tempLength ? tempLength = str.length : null; 
        }     
    })
    return arr.filter(elem => elem.length === tempLength);
}

const arr111 = ["aba", "aa", "ad", "vcd", "aba"];

console.log(getMaxStrings(arr111));

module.exports = getMaxStrings;


