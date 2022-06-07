//---------------------------------------------------------------------------------------------------------------------------
//                                      Remove all "0" and "-" from number
//---------------------------------------------------------------------------------------------------------------------------

function removeZeroAndDash(num) {
    const str = num.toString();
    let finalStr = '';
    for(let letter of str) {
        if(letter !== '-' && letter != 0) {
            finalStr += letter;
        }
    }
    return +finalStr;
}

removeZeroAndDash('Remove all "0" and "-" from number: ', -909010090);

//---------------------------------------------------------------------------------------------------------------------------
//                                      Unique values
//---------------------------------------------------------------------------------------------------------------------------

// #1 way Unique digits

const notUniqueArr = [1, 2, 5, 1, 7, 3, 2, 9];

const uniqueDigits = (arr) => {
    return Array.from(new Set(arr));
}

console.log('Unique values. First way: ', uniqueDigits(notUniqueArr));

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

console.log('Unique values. Second way: ', uniqueDigitsLoops(notUniqueArr));

//---------------------------------------------------------------------------------------------------------------------------
//                                      Alternative implementation of Array.flat()
//---------------------------------------------------------------------------------------------------------------------------

const arrForFlat = [3, [2, 97, [11, 15, [7]]], 5, [23, 12, [82, 36, 13, [11, 71, [1, [58, [35, 1]]]]]]];

const alternativeFlat = (arr) => {
    const tempArr = [...arr]; // use stack
    const result = [];
    while(tempArr.length) { // while stack has elements iterate
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

//---------------------------------------------------------------------------------------------------------------------------
//                                      HOMEWORK 13.05.2022
//---------------------------------------------------------------------------------------------------------------------------
// 1.1 Remove duplicates from arrays SET:

const duplicateArr1 = [3, 8, 9, 10, 5, 2];
const duplicateArr2 = [7, 8, 19, 11, 5, 6];

function createArrayWithoutDuplicatesSet(arr1, arr2) {
    return Array.from(new Set([...arr1, ...arr2]));
}

console.log('Remove duplicates, way SET: ', createArrayWithoutDuplicatesSet(duplicateArr1, duplicateArr2));

// 1.2 Remove duplicates from arrays LOOP:

const createArrayWithoutDuplicatesLoop = (arr1, arr2) => {
    const finalArr = [];
    const mergedArrays = [...arr1, ...arr2]
    for(let i = 0; i < mergedArrays.length; i++) {
        if(!finalArr.includes(mergedArrays[i])) {
            finalArr.push(mergedArrays[i]);
        }
    }
    return finalArr;
}

console.log('Remove duplicates, way LOOP: ', createArrayWithoutDuplicatesLoop(duplicateArr1, duplicateArr2));


//---------------------------------------------------------------------------------------------------------------------------
//                                      HOMEWORK 07.06.2022, TASKS: Refactoring 
//---------------------------------------------------------------------------------------------------------------------------

//  ----------------------- Refactoring 1: -------------------------
const findPersonArr = ['Kate', 'Sean', 'John', 'Dean'];

// function foundPerson(people) {
// 	for(let i = 0; i < people.length; i++) {
//   	if(people[i] === "Don") {
//     	return "Don";
//     }
//     if(people[i] === "John") {
//     	return "John";
//     }
//     if(people[i] === "Kent") {
//     	return "Kent";
//     }
//   }
// }

function foundPerson(people) {
    return people.find(p => p === 'Don' || p === 'John' || p === 'Kent') || '';
}

console.log('Find Person: ', foundPerson(findPersonArr)); 

//  ----------------------- Refactoring 2: -------------------------
const inputJob = [{name: 'John', job: 'chef'}, {name: 'Sean', job: 'police officer'}, {name: 'Kate', job: 'programmer'}, {name: 'Dean', job: 'accountant'}];

//const names = [];
// const findProgrammer = (input) => {
//     for(const i of input) {
//         if(i.job === 'programmer') {
//         names.push(i.name);
//         }
//     }
//     return names;
// }

const findProgrammer = (input) => {
    return input.length ? [(input.find(p => p.job === 'programmer').name)] : input;
}

console.log('Find person with job "programmer": ', findProgrammer(inputJob));
console.log('Find person in Empty Array: ', findProgrammer([]));

//  ----------------------- Refactoring 3: -------------------------
const arrayYoungestSalary = [{age: 25, salary: 4000}, {age: 40, salary: 5000}, {age: 35, salary: 2000}, {age: 18, salary: 3000}];
const empty = [];

// const findYoungestAndCountTotalSalary = (people) => {
//     let youngest = people[0] ? people[0].age : Infinity;
//     let totalSalary = 0;
//     for(const p of people) {
//         if(p.age < youngest) youngest = p.age;
//     totalSalary += p.salary;
//     }

//     return `youngestAge: ${youngest}, totalSalary: ${totalSalary}`;
// }

const findYoungestAndCountTotalSalary = (people) => {
    const totalSalary = people.reduce((acc, s) => acc += s.salary , 0);
    const youngest = people.sort((a, b) => a.age - b.age)[0]?.age || Infinity;
    return `youngestAge: ${youngest}, totalSalary: ${totalSalary}`;
}

console.log('Find youngest person and count total salary: ', findYoungestAndCountTotalSalary(arrayYoungestSalary)); 
console.log('Find youngest person and count total salary. EMPTY case: ', findYoungestAndCountTotalSalary(empty)); 
