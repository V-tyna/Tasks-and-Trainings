//---------------------------------------------------------------------------------------------------------------------------
//                                      Remove all "0" and "-" from number
//---------------------------------------------------------------------------------------------------------------------------

function removeZeroAndDash(num) {
	const str = num.toString();
	let finalStr = '';
	for (let letter of str) {
		if (letter !== '-' && letter != 0) {
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
};

console.log('Unique values. First way: ', uniqueDigits(notUniqueArr));

// #2 way Unique digits

const uniqueDigitsLoops = (arr) => {
	const finalArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (!finalArr.includes(arr[i])) {
			finalArr.push(arr[i]);
		}
	}
	return finalArr;
};

console.log('Unique values. Second way: ', uniqueDigitsLoops(notUniqueArr));

//---------------------------------------------------------------------------------------------------------------------------
//                                      Alternative implementation of Array.flat()
//---------------------------------------------------------------------------------------------------------------------------

const arrForFlat = [
	3,
	[2, 97, [11, 15, [7]]],
	5,
	[23, 12, [82, 36, 13, [11, 71, [1, [58, [35, 1]]]]]],
];

const alternativeFlat = (arr) => {
	const tempArr = [...arr]; // use stack
	const result = [];
	while (tempArr.length) {
		// while stack has elements iterate
		const lastElem = tempArr.pop(); // cut last element
		if (Array.isArray(lastElem)) {
			// if last element is type Array
			tempArr.push(...lastElem); // spread last element to the stack
		} else {
			result.push(lastElem); // if last element isn't type Array, push last element to the final result
		}
	}
	return result.reverse(); // reverse elements in result array to restore order as in input array
};

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

console.log(
	'Remove duplicates, way SET: ',
	createArrayWithoutDuplicatesSet(duplicateArr1, duplicateArr2)
);

// 1.2 Remove duplicates from arrays LOOP:

const createArrayWithoutDuplicatesLoop = (arr1, arr2) => {
	const finalArr = [];
	const mergedArrays = [...arr1, ...arr2];
	for (let i = 0; i < mergedArrays.length; i++) {
		if (!finalArr.includes(mergedArrays[i])) {
			finalArr.push(mergedArrays[i]);
		}
	}
	return finalArr;
};

console.log(
	'Remove duplicates, way LOOP: ',
	createArrayWithoutDuplicatesLoop(duplicateArr1, duplicateArr2)
);

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
	return (
		people.find((p) => p === 'Don' || p === 'John' || p === 'Kent') || ''
	);
}

console.log('Find Person: ', foundPerson(findPersonArr));

//  ----------------------- Refactoring 2: -------------------------
const inputJob = [
	{ name: 'John', job: 'chef' },
	{ name: 'Sean', job: 'police officer' },
	{ name: 'Kate', job: 'programmer' },
	{ name: 'Dean', job: 'accountant' },
];

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
	return input.length
		? [input.find((p) => p.job === 'programmer').name]
		: input;
};

console.log('Find person with job "programmer": ', findProgrammer(inputJob));
console.log('Find person in Empty Array: ', findProgrammer([]));

//  ----------------------- Refactoring 3: -------------------------
const arrayYoungestSalary = [
	{ age: 25, salary: 4000 },
	{ age: 40, salary: 5000 },
	{ age: 35, salary: 2000 },
	{ age: 18, salary: 3000 },
];
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
	const totalSalary = people.reduce((acc, s) => (acc += s.salary), 0);
	const youngest = people.sort((a, b) => a.age - b.age)[0]?.age || Infinity;
	return `youngestAge: ${youngest}, totalSalary: ${totalSalary}`;
};

console.log(
	'Find youngest person and count total salary: ',
	findYoungestAndCountTotalSalary(arrayYoungestSalary)
);
console.log(
	'Find youngest person and count total salary. EMPTY case: ',
	findYoungestAndCountTotalSalary(empty)
);

//---------------------------------------------------------------------------------------------------------------------------
//                                      Memoisation & Fibonacci sequence
//---------------------------------------------------------------------------------------------------------------------------

const fib = (n, prevValue = {}) => {
	if (prevValue[n]) {
		return prevValue[n];
	}
	if (n <= 1) {
		return n;
	}
	const result = fib(n - 1, prevValue) + fib(n - 2, prevValue);
	prevValue[n] = result;
	return result;
};

console.log('Fibonacci', fib(500));

//---------------------------------------------------------------------------------------------------------------------------
//                                      Unknown nesting
//---------------------------------------------------------------------------------------------------------------------------

function visitTree(tree, stack = []) {
	for (let key in tree) {
		if (
			typeof tree[key] === 'object' &&
				tree[key] != null &&
				!(tree[key] instanceof Date)
		) {
			visitTree(tree[key], stack);
		} else {
			stack.push(tree[key]);
		}
	}
	return stack;
}

class Animal {
    constructor(name){
        this.name = name;
    }
}

const randomTree = {
    'one': 'one',
    'two': new Date(),
    'three': {
        'four': 'object',
        'five': {
            'six': 6,
            'seven': [7, 'string', null]
        }
    },
    'eight': {
        'null': null,
        'array': [
            [0, 1], ['stringArr1', 'stringArr2', {'objArr': {}}]
        ],
        'instanceClass': new Animal('MrCat')
    }
}

console.log('Unknown nesting: ', visitTree(randomTree));

//---------------------------------------------------------------------------------------------------------------------------
//                                      Get array of strings and return object with reversed strings 
//---------------------------------------------------------------------------------------------------------------------------

function reverseString(array) {
    return array.reduce((acc, el ) => {
        acc[el] = el.split('').reverse().join('');
        return acc;
    }, {})
}

console.log('Reverse string: ', reverseString(['one', 'two']));
    
//---------------------------------------------------------------------------------------------------------------------------
//                                      Find number/string without pair
//---------------------------------------------------------------------------------------------------------------------------

const arrDoubles = [1, 2, 3, 4, 5, 1, 2, 3, 4];
const lettersDoubles = ['a', 'a', 'b', 'c', 'b'];
const stringsDoubles = ['abba', 'abba', 'bbb', 'ccc', 'bbb', 'yy'];
const findNumberWithoutAPair1 = (arr) => {
	const numbers =  Object.entries(arr.reduce((acc, num) => ({...acc, [num]:  acc[num] + 1 | 0}), {}))
	.find(([key, val]) => val === 0);
	return numbers ? +numbers[0] : 'There is no number without a pair';
}
console.log('Find number without a pair: ', findNumberWithoutAPair1(arrDoubles));

const mathFindNumberWithoutAPair = (arr) => {
	return Array.from(new Set(arr)).reduce((acc, cur) => acc + cur, 0) * 2 - arr.reduce((acc, cur) => acc + cur, 0);
}
console.log('Math find number without a pair: ', mathFindNumberWithoutAPair(arrDoubles));

const findNumberWithoutAPair2 = (arr) => arr.reduce((acc, cur) =>  acc ^ cur, 0);
console.log('Find number without a pair: ', findNumberWithoutAPair2(arrDoubles));

const findLettersWithoutAPair = (arr) =>  {
	const findUnique = arr.reduce((acc, str) => ({...acc, [str]: acc[str] + 1 | 0 }), {});
	const stringsObj = Object.entries(findUnique).filter(([key, val]) => val === 0);
	return stringsObj.length ? stringsObj.map(str => str[0]) : 'There is no unique strings';
}
console.log('Find string without a pair: ', findLettersWithoutAPair(stringsDoubles));
console.log('Find letters without a pair by findLettersWithoutAPair: ', findLettersWithoutAPair(lettersDoubles));

const findStringWithoutAPair = (arr) => String.fromCharCode(arr.map(el => el.charCodeAt(0)).reduce((acc, cur) =>  acc ^ cur));
console.log('Find string without a pair: ', findStringWithoutAPair(lettersDoubles));

//---------------------------------------------------------------------------------------------------------------------------
//                                      Palindrome
//---------------------------------------------------------------------------------------------------------------------------

const palindrome = (str) => {
	const reverse = str.split('').reverse().join('');
	return str.includes(reverse);
	}
	
console.log('Palindrome: ', palindrome('tenet'));

//---------------------------------------------------------------------------------------------------------------------------
//                                      Roman to Integer
//---------------------------------------------------------------------------------------------------------------------------

const romanToInt1 = function(s) {
	const roman = {
			'I': 1,
			'V': 5,
			'X': 10,
			'L': 50,
			'C': 100,
			'D': 500,
			'M': 1000
	}
 	return s.split('').reverse().reduce((acc, letter, i, arr) => {
		if (
				i < arr.length && i !== 0 &&
				'XV'.includes(arr[i - 1]) && letter == 'I' ||
				'LC'.includes(arr[i - 1]) && letter == 'X' ||
				'DM'.includes(arr[i - 1]) && letter == 'C'
			) {
						acc -= roman[letter];
				} else {
						acc += roman[letter];
				}
				return acc;
		}, 0)
};

const romanToInt = function(s) {
	const roman = {
			'I': 1,
			'V': 5,
			'X': 10,
			'L': 50,
			'C': 100,
			'D': 500,
			'M': 1000
	}
 	let num = 0;
	for (let i = 0; i < s.length; i++) {
		roman[s[i]] < roman[s[i + 1]] ? num -= roman[s[i]] : num += roman[s[i]];
	}
	return num;
};

console.log('Roman: ', romanToInt1('MCMXCIV'), romanToInt('MCMXCIV')); 

//---------------------------------------------------------------------------------------------------------------------------
//                                     Functions-wrappers math operations
//---------------------------------------------------------------------------------------------------------------------------

// Function one get function as a param and return function call with param 1. If one doesn't get function as param, it returns 1.
const one = (fn) => {
	if (!fn) return 1;
	return fn(1);
};
const three = (fn) => {
	if (!fn) return 3;
	return fn(3);
};

function plus1(a) {
		return function(b) {
			return a + b;
		}
}

const plus = (a) => (b) =>  a + b; 
const minus = (a) => (b) => b - a;
const divide = (a) => (b) => b / a;
const multiply = (a) => (b) => a * b;

console.log('Plus: ', one(plus(three()))); // tree() return 3; plus(3) return (b) => 3 + b; one((b) => 3 + b) return (1) => 3 + 1;
console.log('Minus: ', one(minus(three())));
console.log('Divide: ', one(divide(three())));
console.log('Multiply: ', one(multiply(three())));

//---------------------------------------------------------------------------------------------------------------------------
//                                     Longest prefix in array of strings
//---------------------------------------------------------------------------------------------------------------------------

const longestCommonPrefix = function(strings) {
	let result = '';

	for ( let i = 0; i < strings[0].length; i++) {
		if(strings.every(word => word[i] === strings[0][i])) {
			result += strings[0][i];
		} else {
			break;
		}
	}
	return result;
};

const stringsPrefixes = ["flower","flow","flight"];

console.log('Find longest prefix: ', longestCommonPrefix(stringsPrefixes));
