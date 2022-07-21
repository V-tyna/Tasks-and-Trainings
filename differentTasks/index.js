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
	constructor(name) {
		this.name = name;
	}
}

const randomTree = {
	one: 'one',
	two: new Date(),
	three: {
		four: 'object',
		five: {
			six: 6,
			seven: [7, 'string', null],
		},
	},
	eight: {
		null: null,
		array: [
			[0, 1],
			['stringArr1', 'stringArr2', { objArr: {} }],
		],
		instanceClass: new Animal('MrCat'),
	},
};

console.log('Unknown nesting: ', visitTree(randomTree));

//---------------------------------------------------------------------------------------------------------------------------
//                                      Get array of strings and return object with reversed strings
//---------------------------------------------------------------------------------------------------------------------------

function reverseString(array) {
	return array.reduce((acc, el) => {
		acc[el] = el.split('').reverse().join('');
		return acc;
	}, {});
}

console.log('Reverse string: ', reverseString(['one', 'two']));

//---------------------------------------------------------------------------------------------------------------------------
//                                      Find number/string without pair
//---------------------------------------------------------------------------------------------------------------------------

const arrDoubles = [1, 2, 3, 4, 5, 1, 2, 3, 4];
const lettersDoubles = ['a', 'a', 'b', 'c', 'b'];
const stringsDoubles = ['abba', 'abba', 'bbb', 'ccc', 'bbb', 'yy'];
const findNumberWithoutAPair1 = (arr) => {
	const numbers = Object.entries(
		arr.reduce((acc, num) => ({ ...acc, [num]: (acc[num] + 1) | 0 }), {})
	).find(([key, val]) => val === 0);
	return numbers ? +numbers[0] : 'There is no number without a pair';
};
console.log(
	'Find number without a pair: ',
	findNumberWithoutAPair1(arrDoubles)
);

const mathFindNumberWithoutAPair = (arr) => {
	return (
		Array.from(new Set(arr)).reduce((acc, cur) => acc + cur, 0) * 2 -
		arr.reduce((acc, cur) => acc + cur, 0)
	);
};
console.log(
	'Math find number without a pair: ',
	mathFindNumberWithoutAPair(arrDoubles)
);

const findNumberWithoutAPair2 = (arr) => arr.reduce((acc, cur) => acc ^ cur, 0);
console.log(
	'Find number without a pair: ',
	findNumberWithoutAPair2(arrDoubles)
);

const findLettersWithoutAPair = (arr) => {
	const findUnique = arr.reduce(
		(acc, str) => ({ ...acc, [str]: (acc[str] + 1) | 0 }),
		{}
	);
	const stringsObj = Object.entries(findUnique).filter(
		([key, val]) => val === 0
	);
	return stringsObj.length
		? stringsObj.map((str) => str[0])
		: 'There is no unique strings';
};
console.log(
	'Find string without a pair: ',
	findLettersWithoutAPair(stringsDoubles)
);
console.log(
	'Find letters without a pair by findLettersWithoutAPair: ',
	findLettersWithoutAPair(lettersDoubles)
);

const findStringWithoutAPair = (arr) =>
	String.fromCharCode(
		arr.map((el) => el.charCodeAt(0)).reduce((acc, cur) => acc ^ cur)
	);
console.log(
	'Find string without a pair: ',
	findStringWithoutAPair(lettersDoubles)
);

//---------------------------------------------------------------------------------------------------------------------------
//                                      Palindrome
//---------------------------------------------------------------------------------------------------------------------------

const palindrome = (str) => {
	const reverse = str.split('').reverse().join('');
	return str.includes(reverse);
};

console.log('Palindrome: ', palindrome('tenet'));

const palindromeNumbers = (num) => {
	const str = num.toString();
	const reverse = str.split('').reverse().join('');
	return str === reverse;
};

console.log('Palindrome number: ', palindromeNumbers(12221));

const subPalindrome = (str) => {
	let start = 0;
	let end = 0;

	const result = [];
	for (let i = 0; i < str.length; i++) {
		let lenOdd = getLengthFromCenter(str, i, i);
		let lenEven = getLengthFromCenter(str, i, i + 1);
		let len = Math.max(lenOdd, lenEven);

		if (len > end - start) {
			start = Math.ceil(i - (len - 1) / 2);
			end = Math.floor(i + len / 2);
		}
	}
	return str.substring(start, end + 1);
};

const getLengthFromCenter = (str, left, right) => {
	while (left >= 0 && right < str.length && str[left] === str[right]) {
		left--;
		right++;
	}

	return right - left - 1;
};

console.log('Sub Palindrome 1: ', subPalindrome('babad'));
console.log('Sub Palindrome 1: ', subPalindrome('mississippi'));
console.log('Sub Palindrome 2: ', subPalindrome('cbba'));
console.log('Sub Palindrome 2: ', subPalindrome('cbb'));

//---------------------------------------------------------------------------------------------------------------------------
//                                      Roman to Integer
//---------------------------------------------------------------------------------------------------------------------------

const romanToInt1 = function (s) {
	const roman = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};
	return s
		.split('')
		.reverse()
		.reduce((acc, letter, i, arr) => {
			if (
				(i < arr.length &&
					i !== 0 &&
					'XV'.includes(arr[i - 1]) &&
					letter == 'I') ||
				('LC'.includes(arr[i - 1]) && letter == 'X') ||
				('DM'.includes(arr[i - 1]) && letter == 'C')
			) {
				acc -= roman[letter];
			} else {
				acc += roman[letter];
			}
			return acc;
		}, 0);
};

const romanToInt = function (s) {
	const roman = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};
	let num = 0;
	for (let i = 0; i < s.length; i++) {
		roman[s[i]] < roman[s[i + 1]]
			? (num -= roman[s[i]])
			: (num += roman[s[i]]);
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
	return function (b) {
		return a + b;
	};
}

const plus = (a) => (b) => a + b;
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

const longestCommonPrefix = function (strings) {
	let result = '';

	for (let i = 0; i < strings[0].length; i++) {
		if (strings.every((word) => word[i] === strings[0][i])) {
			result += strings[0][i];
		} else {
			break;
		}
	}
	return result;
};

const stringsPrefixes = ['flower', 'flow', 'flight'];

console.log('Find longest prefix: ', longestCommonPrefix(stringsPrefixes));

//---------------------------------------------------------------------------------------------------------------------------
//                                    Banknotes
//---------------------------------------------------------------------------------------------------------------------------

const getMoneyAtATM = (amount) => {
	if (amount % 10 !== 0) {
		return 'Please, enter an amount in multiples of 10';
	}
	const banknotes = [1000, 500, 100, 50, 20, 10];
	const result = {};
	for (let i = 0; i < banknotes.length; i++) {
		while (amount - banknotes[i] >= 0) {
			amount -= banknotes[i];
			result[banknotes[i]] = (result[banknotes[i]] + 1) || 1;
		}
	}
	return result;
};

console.log('Get money: ', getMoneyAtATM(180));

//---------------------------------------------------------------------------------------------------------------------------
//                                    Count sum by indexes
//---------------------------------------------------------------------------------------------------------------------------

const arrNumsSum = [-5, 1, 22, -9, 53, 7, -15];
const indexToCount = [1, 3];

const countSumByIndexes = (arr, indexes) => {
	return arr
		.slice(indexes[0], indexes[1] + 1)
		.reduce((acc, el) => (acc += el), 0);
};

console.log(
	'Count sum by indexes: ',
	countSumByIndexes(arrNumsSum, indexToCount)
);

//---------------------------------------------------------------------------------------------------------------------------
//                                    Parentheses
//---------------------------------------------------------------------------------------------------------------------------

const isValidParentheses = (s) => {
	const left = ['(', '[', '{'];
	const right = [')', ']', '}'];
	const stack = [];
	for (let i = 0; i < s.length; i++) {
		if (left.includes(s[i])) {
			stack.push(s[i]);
		} else if (
			stack.length &&
			left.indexOf(stack[stack.length - 1]) === right.indexOf(s[i])
		) {
			stack.pop();
		} else {
			return false;
		}
	}
	return !stack.length;
};

console.log('Valid Parentheses: ', isValidParentheses('(())[{}]'));
console.log('Not Valid Parentheses: ', isValidParentheses('(())[{}]]{'));
console.log('Not Valid Parentheses: ', isValidParentheses(')'));
console.log('Not Valid Parentheses: ', isValidParentheses('([}}])'));

//---------------------------------------------------------------------------------------------------------------------------
//                                    Exclamation marks
//---------------------------------------------------------------------------------------------------------------------------

function removeExclamations(s) {
	return s
		.split(' ')
		.map((w) => {
			if (w.startsWith('!') && w.endsWith('!')) {
				const word = w
					.split('')
					.filter((l) => l !== '!')
					.join('');

				const firstIndexOfWord = w.indexOf(word);
				const lastIndexOfWord = w.lastIndexOf(word[word.length - 1]);
				const beforeWordExcl = w.slice(0, firstIndexOfWord).length;
				const afterWordExcl = w.slice(lastIndexOfWord + 1).length;
				let quantityOfExcl = 0;
				if (beforeWordExcl >= afterWordExcl) {
					quantityOfExcl = afterWordExcl;
				} else {
					quantityOfExcl = beforeWordExcl;
				}

				return (
					'!'.repeat(quantityOfExcl) +
					word +
					'!'.repeat(quantityOfExcl)
				);
			} else {
				return w
					.split('')
					.filter((letter) => letter !== '!')
					.join('');
			}
		})
		.join(' ');
}
console.log(
	'Remove exclamations: ',
	removeExclamations('!!!!Hi!! !!!!Hi !Hi!!!')
);
console.log(
	'Remove exclamations: ',
	removeExclamations(
		'!!!!!!!hqaff!!! !!!!!!fzfms!!!!!!!! !!wzozx !!!!!!!!!!vbcsrby!!!!!!!!! !!!!!!!!!jguf !!!!!!!!!!munfjxe!!!!!!!'
	)
);

//---------------------------------------------------------------------------------------------------------------------------
//                                    Fun Dots
//---------------------------------------------------------------------------------------------------------------------------

const dots = (w, h) => {
	const layout1 = '+---';
	const layout2 = '| o ';
	const row = layout1.repeat(w) + '+\n' + layout2.repeat(w) + '|\n';
	const columns = row.repeat(h) + layout1.repeat(w) + '+';

	return columns;
}

console.log(dots(3, 2));
console.log(dots(1, 1));
console.log(dots(5, 5));

//---------------------------------------------------------------------------------------------------------------------------
//                                    Find missing letter
//---------------------------------------------------------------------------------------------------------------------------

function findMissingLetter(array) {
  let alphabet = array[0].codePointAt(0) < 90 ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : 'abcdefghijklmnopqrstuvwxyz';
	const first = alphabet.indexOf(array[0]);
	const last = alphabet.indexOf(array[array.length - 1]);
	const subStr = alphabet.substring(first, last).split('');

	return subStr.find(l => array.join('').includes(l) === false);
}

//alternative :
function findMissingLetterAlternative(array) {
let i = array[0].charCodeAt();
array.map(l => l.charCodeAt() === i ? i++ : i);
return String.fromCharCode(i);
}

console.log('Find missing letter: ', findMissingLetter(['a', 'b', 'c', 'd', 'f']));
console.log('Find missing letter: ', findMissingLetter(['O', 'Q', 'R', 'S', 'T']));
console.log('Find missing letter alternative: ', findMissingLetterAlternative(['O', 'Q', 'R', 'S', 'T']));

//---------------------------------------------------------------------------------------------------------------------------
//                                    Snail/Spiral matrix
//---------------------------------------------------------------------------------------------------------------------------

const snail = (h, w) => {
	const matrix = [];
	for (let i = 0; i < h; i++) {
		matrix.push(new Array(w).fill(0));
	}

	let currentRow = 0;
	let currentColumn = 0;
	let i = 1;

	const goRight = (row, column) => {
		
		while (column < w && matrix[row][column] !== undefined && matrix[row][column] === 0) {
			matrix[row][column] = i++;
			column++;
		}
		currentRow = row + 1;
		currentColumn = column - 1;
	}

	const goDown = (row, column) => {
		while (row < h && matrix[row][column] !== undefined && matrix[row][column] === 0) {
			matrix[row][column] = i++;
			row++;
		}
		currentRow = row - 1;
		currentColumn = column - 1;
	}

	const goLeft = (row, column) => {
		while (column >= 0 && matrix[row][column] !== undefined && matrix[row][column] === 0) {
			matrix[row][column] = i++;
			column--;
		}
		currentRow = row - 1;
		currentColumn = column + 1;
	}

	const goUp = (row, column) => {
		while (row >= 0 && matrix[row][column] !== undefined && matrix[row][column] === 0) {
			matrix[row][column] = i++;
			row--;
		}
		currentRow = row + 1;
		currentColumn = column + 1;
	}

	while (i <= h * w) {
		goRight(currentRow, currentColumn);
		goDown(currentRow, currentColumn);
		goLeft(currentRow, currentColumn);
		goUp(currentRow, currentColumn);
	}

	return matrix;
}

console.table(snail(3, 5)); 
console.table(snail(4, 4)); 
console.table(snail(5, 5)); 

//---------------------------------------------------------------------------------------------------------------------------
//                                    Sum of digits/Digital root
//---------------------------------------------------------------------------------------------------------------------------

const digital_root = (n) => {
  if(n < 10) return n;

	const num = n.toString().split('').reduce((acc, num) => acc + +num, 0);
	return digital_root(num);
}

console.log('Digital root: ', digital_root(9427));

//---------------------------------------------------------------------------------------------------------------------------
//                                    Decode Morse code
//---------------------------------------------------------------------------------------------------------------------------

const decodeMorse = (str) => {
	const MORSE_CODE = {
    ".-":"A",
    "-...":"B",
    "-.-.":"C",
    "-..":"D",
    ".":"E",
    "..-.":"F",
    "--.":"G",
    "....":"H",
    "..":"I",
    ".---":"J",
    "-.-":"K",
    ".-..":"L",
    "--":"M",
    "-.":"N",
    "---":"O",
    ".--.":"P",
    "--.-":"Q",
    ".-.":"R",
    "...":"S",
    "-":"T",
    "..-":"U",
    "...-":"V",
    ".--":"W",
    "-..-":"X",
    "-.--":"Y",
    "--..":"Z",
};
return str.split(' ').map(w => MORSE_CODE[w] || ' ').join('').replaceAll('  ', ' '); 
}

console.log('Morse code: ', decodeMorse('.... . -.--   .--- ..- -.. .   .--- ..- -.. .')); 

//---------------------------------------------------------------------------------------------------------------------------
//                                    To weird case
//---------------------------------------------------------------------------------------------------------------------------

const toWeirdCase = (string) => {
	const arrWords = string.split(' ');
	const toUpperCase = (w) => {
		const arr = [];
		for (let i = 0; i < w.length; i++) {
			if (i % 2 === 0) {
				arr.push(w[i].toUpperCase());
			} else {
				arr.push(w[i]);
			}
		}
		return arr.join('');
	}
	
	return arrWords.map(word => toUpperCase(word)).join(' ');
}

console.log('To weird case: ', toWeirdCase('Weird string case')); 

//---------------------------------------------------------------------------------------------------------------------------
//                                    Tribonacci sequence
//---------------------------------------------------------------------------------------------------------------------------

const tribonacci = (signature,n) => {
	if(n <= 2) return signature.slice(0, n);
	for (let i = 2; i < n - 1; i++) {
		signature.push(signature[i] + signature[i - 1] + signature[i - 2]);
	}
	return signature;
	}

console.log('Tribonacci: ', tribonacci([1, 1, 1], 10));

//---------------------------------------------------------------------------------------------------------------------------
//                                    Find odd
//---------------------------------------------------------------------------------------------------------------------------

const findOdd = (a) => {
	return Object.entries(a.reduce((acc, num) => ({...acc, [num]: acc[num] + 1 || 1 }), {})).find((key) => {
		if (key[1] % 2 !== 0) {
			return key;
		}
	})[0];
 }

 console.log('Find odd: ', findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));

//---------------------------------------------------------------------------------------------------------------------------
//                                    Factorial and cache(memoization)
//---------------------------------------------------------------------------------------------------------------------------

const factorial = (function memoFactorial() {
	const cache = {};
	const factorial = (n) => {
	if(n < 2) return 1;
	if(!(n in cache)) {
		cache[n] = n * factorial(n - 1);
	} 
	return cache[n];
}
return factorial;
})();

console.log('Factorial wrapped1: ', factorial(3));
console.log('Factorial wrapped2: ', factorial(7));
console.log('Factorial wrapped2: ', factorial(10));

//---------------------------------------------------------------------------------------------------------------------------
//                                    Sort names by name.length and alphabet
//---------------------------------------------------------------------------------------------------------------------------

const sortNamesByLengthAndAlphabet = (names) => {
	const stack = [];
	names.forEach(name => {
		if(!stack[name.length]) {
			stack[name.length] = [];
		} 
		stack[name.length].push(name);
	});
	return stack.filter(arr => arr.sort().length !== 0).flat();
}

console.log('Sort names by length and alphabet: ', sortNamesByLengthAndAlphabet(['Sally', 'Suzy', 'Frank', 'John', 'Jennifer', 'Scott']));

//---------------------------------------------------------------------------------------------------------------------------
//                                    Get most profit from stock quotes 
//---------------------------------------------------------------------------------------------------------------------------

const getMostProfitFromStockQuotes = (quotes, sum = 0) => {
	if(quotes.length < 2) return sum;
	const highestNum = Math.max(...quotes);
	const end = quotes.indexOf(highestNum);
	sum += quotes.slice(0, end).reduce((acc, num) => acc += highestNum - num, 0);
	const stack = quotes.slice(end + 1);

	return getMostProfitFromStockQuotes(stack, sum);
}

console.log('Get most profit from stock quotes 1: ', getMostProfitFromStockQuotes([31,312,3,35,33,3,44,123,126,2,4,1]));
console.log('Get most profit from stock quotes 2: ', getMostProfitFromStockQuotes([ 6, 5, 4, 3, 2, 1 ]));
console.log('Get most profit from stock quotes 3: ', getMostProfitFromStockQuotes([ 1, 6, 5, 10, 8, 7 ]));
console.log('Get most profit from stock quotes 4: ', getMostProfitFromStockQuotes([ 1, 2, 10, 3, 2, 7, 3, 2 ]));
