const firstArr = [3, 8, 5]
const secArr = [7, 8, 9]

function createArrayWithoutDuplicates(arr1, arr2){
    return Array.from(new Set([...arr1, ...arr2]));
}

module.exports = createArrayWithoutDuplicates;