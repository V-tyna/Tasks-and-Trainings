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

//---------------------------------------------------------------------------------------------------------------------------
//                                    Equal side of an array
//---------------------------------------------------------------------------------------------------------------------------

const equalSideOfAnArray = (arr) => {
	let leftSum = 0;
	let rightSum = arr.reduce((acc, num) => acc+= num, 0);
  for (let i = 0; i < arr.length; i++) {
    rightSum -= arr[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += arr[i];
  }
  return -1;
}

console.log('Find index of equal side of array: ', equalSideOfAnArray([1,2,3,4,3,2,1]));
console.log('Find index of equal side of array: ', equalSideOfAnArray([1,100,50,-51,1,1]));
console.log('Find index of equal side of array: ', equalSideOfAnArray([20,10,-80,10,10,15,35]));
console.log('Find index of equal side of array: ', equalSideOfAnArray([8, 0]));

//---------------------------------------------------------------------------------------------------------------------------
//                                    Merge and sort two arrays
//---------------------------------------------------------------------------------------------------------------------------

const mergeTwoArrays = (list1, list2) => {
    return list1.concat(list2).sort((a, b) => a - b);
};

console.log('Merge two arrays: ', mergeTwoArrays([1, 2, 3], [1, 2, 3]));

//---------------------------------------------------------------------------------------------------------------------------
//                                    Frog jumping
//---------------------------------------------------------------------------------------------------------------------------

const frogJumps = (a, pos = 0, jumps = 0, stack = {}) => {
	if (a[pos] === undefined) return jumps;
	if (stack[pos] > 2) return -1;
	pos += a[pos];
	jumps++;
	stack[pos] = stack[pos] + 1 || 1;
	return frogJumps(a, pos, jumps, stack);
}

const frogJumps2 = (a) => {
	let jumps = 0;
	let i = 0;
	while(a[i] !== undefined) {
		jumps++;
		i += a[i];
		if(jumps > a.length) return -1;
	}
	return jumps;
}

console.log('Frog jumps: ', frogJumps([1, 2, 2, -1]));
console.log('Frog jumps: ', frogJumps([1, 2, 1, 5]));
console.log('Frog jumps: ', frogJumps2([1, 1, 1, 1]));
console.log('Frog jumps: ', frogJumps([-3]));
console.log('Frog jumps: ', frogJumps([1, -1]));
console.log('Frog jumps: ', frogJumps2([1, 1, 1, -2, 1]));

//---------------------------------------------------------------------------------------------------------------------------
//                                    Twisted sum
//---------------------------------------------------------------------------------------------------------------------------

const twistedSum = (n) => {
	let sum = 0;
  while(n >= 0) {
		if(n > 9) {
			sum += n.toString().split('').reduce((acc, num) => acc + +num, 0);
		} else {
			sum += n;
		}
		n--;
		}
  return sum;  
}

console.log('Twisted sum: ', twistedSum(9686));

//---------------------------------------------------------------------------------------------------------------------------
//                                    Odd Magic Square / Matrix
//---------------------------------------------------------------------------------------------------------------------------

const oddMagicSquare = (n) => {
	const matrix = [];
	for (let i = 0; i < n; i++) {
		matrix.push(new Array(n).fill(0));
	}
	let row = 0;
	let column = Math.floor(n / 2);
	
	let num = 1;
	matrix[row][column] = num;

	while(num < n * n) {
		num++;
		row--;
		column++;
		if (row < 0 && column >=n) {
			row += 2;
			column--;	
		}
		else if (row < 0) {
			row = n - 1;
		}
		else if (column >= n) {
			column = 0;
		}
		else if (matrix[row][column] !== 0) {
			row += 2;
			column--;	
		}
		matrix[row][column] = num;
	}
	
	return matrix;
}

console.table(oddMagicSquare(7));
console.table(oddMagicSquare(5));

//---------------------------------------------------------------------------------------------------------------------------
//                                    Create Functions 
//---------------------------------------------------------------------------------------------------------------------------

const createFunction = (n) => {
	let i = 0;
	return new Array(n).fill(() => i++);
}

const callbacks = createFunction(5);

console.log('Call 5 functions: ', callbacks[0](), callbacks[1](), callbacks[2](), callbacks[3](), callbacks[4]());

//---------------------------------------------------------------------------------------------------------------------------
//                                    Using closures to share class state
//---------------------------------------------------------------------------------------------------------------------------

// Functional style
const Cat1 = (function (){
	const cats = [];
	function constructor(name, weight) {
		if(!name || !weight) throw new Error('no params');
		this.name = name;
		this.weight = weight;
		// Object.defineProperty(this, 'weight', {get: () => weight, set: (value) => weight = value})
		
		cats.push(this);
	}
	
	constructor.averageWeight = () => {
		return cats.reduce((acc, cat) => (acc + cat.weight), 0)/ cats.length;
	};

	return constructor;
})();

// Classes

class Cat {
	static cats = [];
	constructor(name, weight) {
		if(!name || !weight) throw new Error('no params');
		this.name = name;
		this.weight = weight;
		Cat.cats.push(this);
	}
	
	static averageWeight() {
		return this.cats.reduce((acc, cat) => (acc + cat.weight), 0)/ this.cats.length;
	}
}

fluffy = new Cat('fluffy', 15);
fluffy.weight = 13;
garfield = new Cat('garfield', 25);


console.log(fluffy.weight, 15);
console.log(fluffy instanceof Cat, true);
console.log(fluffy.averageWeight, undefined);
console.log(typeof Cat.averageWeight, 'function');
console.log(Cat.averageWeight(), 20);
console.log(Cat.cats, [{name: 'fluffy', weight: 13}, {name: 'garfield', weight: 25}]);

//---------------------------------------------------------------------------------------------------------------------------
//                                    Is Pangram
//---------------------------------------------------------------------------------------------------------------------------

// function isPangram(string) {
// 	string = string.toLowerCase();
//   const lettersInString = {};
//   for (let letter of string) {
//   	if (letter.match(/[a-z]/)) {
//       lettersInString[letter] = 1;
//     }
//   }
//   return Object.keys(lettersInString).length === 26;
// }

const isPangram = (string) => {
	string = string.toLowerCase();
  return 'abcdefghijklmnopqrstuvwxyz'.split('').every(letter => string.includes(letter));
}

console.log('Is a pangram:', isPangram('The quick brown fox jumps over the lazy dog.'));
console.log('Is a pangram:', isPangram('Watch "Jeopardy!", Alex Trebek\'s fun TV quiz game.'));
console.log('Is a pangram:', isPangram('This in not a pangram.'));

//---------------------------------------------------------------------------------------------------------------------------
//                                    Delete number that is in array more than n-times
//---------------------------------------------------------------------------------------------------------------------------

const deleteNth = (arr, n) => {
  const obj = arr.reduce((acc, num) => ({...acc, [num]: acc[num] + 1 || 1}), {});
	let reducer = 0;
	for (let key in obj) {
		if (obj[key] > n) {
			reducer = obj[key] - n;
			while (reducer > 0) {
				arr.splice(arr.lastIndexOf(+key), 1);
				reducer--;
			}
		}
	}
  return arr;
}

console.log('Delete n times', deleteNth([1,1,3,3,7,2,2,2,2], 3), [1, 1, 3, 3, 7, 2, 2, 2]);
console.log('Delete n times', deleteNth([20,37,20,21], 1), [20,37,21]);

//---------------------------------------------------------------------------------------------------------------------------
//                                    Snail Sort
//---------------------------------------------------------------------------------------------------------------------------

// First approach

const snail2 = (array) => {
	if(array.length < 2) return array[0];
  let elements = array.reduce((acc, n) => acc += n.length, 0);
	const lengthInnerArr = array[0].length;
  let currentRow = 0;
  let currentCol = 0;
  const res = [];
  const moveRight = (row, col) => {
    while(col < lengthInnerArr && array[row][col] !== 0) {
      res.push(array[row][col]);
      array[row][col] = 0;
      col++;
    }
    currentRow++;
    currentCol = col - 1;
  }
  const moveDown = (row, col) => {
    while(row < lengthInnerArr && array[row][col] !== 0) {
      res.push(array[row][col]);
      array[row][col] = 0;
      row++;
    }
    currentCol--;
    currentRow = row - 1;
  }
  const moveLeft = (row, col) => {
    while(col >= 0 && array[row][col] !== 0) {
      res.push(array[row][col]);
      array[row][col] = 0;
      col--;
    }
    currentRow--;
    currentCol = col + 1;
  }
  const moveUp = (row, col) => {
    while(row >= 0 && array[row][col] !== 0) {
      res.push(array[row][col]);
      array[row][col] = 0;
      row--;
    }
    currentRow = row + 1;
    currentCol++;
  }
  while(elements) {
    moveRight(currentRow, currentCol);
    moveDown(currentRow, currentCol);
    moveLeft(currentRow, currentCol);
    moveUp(currentRow, currentCol);
    elements--;
  }
  
  return res;
}

// Second approach 

const snail1 = (array) => {
	let res = [];
	
	while(array.length) {
		res = res.concat(array.shift());
		for (let i = 0; i < array.length; i++) {
			res.push(array[i].pop());
		}
		if (array[array.length - 1]) {
		res.push(...array.pop().reverse());
		}
		for (let i = array.length - 1; i >= 0; i--) {
			res.push(array[i].shift());
		}
	}

	return res;
}

console.log('Snail 1: ', snail1([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log('Snail 1: ', snail1([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]));
console.log('Snail 1: ', snail1([[1], [1]]));

//---------------------------------------------------------------------------------------------------------------------------
//                                    Rotate a square matrix like a vortex
//---------------------------------------------------------------------------------------------------------------------------

const rotateMatrixLikeAVortex = (arr) => {
	const matrix = [];
	let coord = Math.floor(arr.length/2);
	
	for(let i = 0; i < arr.length; i++) {
		matrix.push(new Array(arr.length));
	}
	
	if (arr.length % 2 !== 0) {
		matrix[coord][coord] = arr[coord][coord];
	} 
	
	const rotate = (arr, firstCoord, lastCoord) => {
		// first rotate
		for(let i = firstCoord; i <= lastCoord; i++) {
			matrix[lastCoord][i] = arr[i][firstCoord]; 
		}
		// second rotate
		for(let i = firstCoord + 1; i <= lastCoord; i++) {
			matrix[arr.length - 1 - i][lastCoord] = arr[lastCoord][i]; 
		}
		// third rotate
		for(let i = lastCoord; i > firstCoord; i--) {
			matrix[firstCoord][i - 1] = arr[i - 1][lastCoord]; 
		}
		// forth rotate
		for(let i = lastCoord; i > firstCoord; i--) {
			matrix[arr.length - 1 - i][firstCoord] = arr[firstCoord][i]; 
		}
	}

	while(coord > 0) {
		let arrToRotate = arr;
		let countRotates = 0;
		coord--;
		let [firstCoord, lastCoord] = [coord, arr.length - 1 - coord];

		while (countRotates <= coord) {
			if (countRotates >= 1) {
				arrToRotate = matrix.map(el => [...el]);
			} 
			rotate(arrToRotate, firstCoord, lastCoord);
			countRotates++;
		}
	}

	return matrix;
}

console.log('Rotate matrix like a vortex: ', rotateMatrixLikeAVortex([[1, 5, 3, 6, 1, 2], [1, 5, 8, 7, 4, 3], [1, 1, 2, 4, 3, 4], [1, 3, 1, 2, 2, 5], [1, 3, 1, 2, 2, 6], [1, 3, 1, 2, 2, 6]]));
console.log('Rotate matrix like a vortex: ', rotateMatrixLikeAVortex([[1, 5, 3, 6, 1], [1, 5, 8, 7, 4], [1, 1, 2, 4, 3], [1, 3, 1, 2, 2], [1, 3, 1, 2, 2]]));
console.log('Rotate: ', rotateMatrixLikeAVortex([ [ 5, 2, 5, 6, 4, 6, 1, 6, 1, 9, 8, 5, 1, 6, 7 ],
  [ 8, 2, 7, 5, 2, 7, 9, 5, 4, 8, 8, 9, 8, 9, 1 ],
  [ 6, 9, 5, 1, 1, 8, 7, 3, 9, 1, 5, 9, 5, 5, 3 ],
  [ 6, 3, 9, 1, 1, 1, 5, 1, 1, 4, 9, 4, 1, 6, 5 ],
  [ 2, 4, 4, 3, 5, 9, 2, 2, 6, 8, 3, 6, 3, 9, 9 ],
  [ 9, 7, 4, 5, 9, 7, 6, 9, 5, 8, 6, 2, 1, 2, 9 ],
  [ 1, 2, 8, 1, 2, 7, 5, 4, 5, 8, 7, 6, 6, 4, 9 ],
  [ 5, 4, 3, 8, 8, 6, 8, 2, 5, 5, 1, 1, 2, 8, 7 ],
  [ 6, 7, 1, 5, 9, 4, 8, 2, 7, 2, 2, 5, 4, 1, 1 ],
  [ 4, 8, 3, 5, 4, 5, 9, 6, 2, 9, 4, 7, 6, 4, 2 ],
  [ 4, 3, 6, 3, 1, 5, 9, 9, 9, 6, 4, 6, 3, 6, 1 ],
  [ 3, 5, 6, 8, 1, 6, 6, 9, 3, 1, 9, 9, 3, 8, 5 ],
  [ 2, 5, 5, 1, 8, 1, 5, 1, 4, 7, 5, 5, 5, 3, 8 ],
  [ 4, 1, 3, 4, 4, 9, 4, 9, 2, 2, 6, 1, 4, 5, 5 ],
  [ 9, 3, 8, 9, 3, 8, 4, 6, 1, 7, 7, 1, 1, 1, 6 ] ]));

//---------------------------------------------------------------------------------------------------------------------------
//                                    Return the total number of smiling faces in the array
//---------------------------------------------------------------------------------------------------------------------------

function countSmileys(arr) {
  const valid = [':)', ';)', ':D', ';D', ':-D', ':~D', ';-D', ';~D', ':~)', ';~)', ':-)', ';-)'];
  return arr.filter((str) => valid.includes(str)).length;
}

console.log('Count smiles:', countSmileys([':D',':~)',';~D',':)']));
console.log('Count smiles:', countSmileys([':)',':(',':D',':O',':;']));
console.log('Count smiles:', countSmileys([';]', ':[', ';*', ':$', ';-D']));
console.log('Count smiles:', countSmileys([]));

//---------------------------------------------------------------------------------------------------------------------------
//                                    Split string into pairs
//---------------------------------------------------------------------------------------------------------------------------

function pairLetters(str){
  const res = [];
	let i = 0;
	while (i < str.length) {
		const second = str[i + 1] || '_';
		res.push(str[i] + second);
		i += 2;
	}
  return res;
}

console.log('Pair letters: ', pairLetters('aabbccddffg'));

//---------------------------------------------------------------------------------------------------------------------------
//                                    Highest Scoring Word
//---------------------------------------------------------------------------------------------------------------------------

function high(x){
  let temp = 0;
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const res = x.split(' ').reduce((acc, word) => {
    for (let l of word) {
      temp += alphabet.indexOf(l) + 1;  
    }
    acc = [...acc, [word, temp]]
    temp = 0;
    return acc;
  }, [])
  return res.sort((a, b) => b[1] - a[1])[0][0];
}

console.log('Highest word: ', high('man i need a taxi up to ubud'));
console.log('Highest word: ', high('what time are we climbing up the volcano'));
console.log('Highest word: ', high('aa b'));

//---------------------------------------------------------------------------------------------------------------------------
//                                    Longest consequence
//---------------------------------------------------------------------------------------------------------------------------

function longestConsec(strarr, k) {
	const res = [];
	if( k === 0 || k > strarr.length || k <= 0) return '';
	if (k === 1) {
		return strarr.sort((a, b) => b.length - a.length)[0];
	}
 	while (strarr.length > 0) {
	 	let temp = '';
		if (strarr.length < k) {
			return res[0];
		}
	 for (let i = 0; i < k; i++) {
		 temp += strarr[i];
	 }
	 if (!res[0]) {
		res.push(temp)
	 }
	 if (res[0] && res[0].length < temp.length) {
		res.pop();
		res.push(temp);
	 }
	 strarr.shift();
 }
}

console.log('longest consequence: ', longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));
console.log('longest consequence: ', longestConsec(["aa", "bb", "cc", "dd", "ee", "hh"], 6));

//---------------------------------------------------------------------------------------------------------------------------
//                                    Moving Zeros To The End
//---------------------------------------------------------------------------------------------------------------------------

// First way: 

function moveZeros(arr) {
	const zeros= [];
	arr.forEach(el => {
	 if (el === 0) {
		 zeros.push(0);
	 } 
	})
	const res = arr.filter(el => el !== 0);
	return [...res, ...zeros];
 }

 // Second way: 

 function moveZeros2(arr) {
	return [
		...arr.filter(el => el !== 0),
		...arr.filter(el => el === 0)
	];
 }

 console.log('Move zeros: ', moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
 console.log('Move zeros: ', moveZeros([8, 6, '9', [], [], 0, '5', false, [], 3, [], 1, null, {}, false, [], '7', '2', {}, null, true, '5', {}, 8, 6, '6', 0]));
 console.log('Move zeros2: ', moveZeros2(['3', 0, 0, 0, '9', false, 6, null, 4, [], [], '2', {}, false, 5, 6]));

//---------------------------------------------------------------------------------------------------------------------------
//                                    Human readable time
//---------------------------------------------------------------------------------------------------------------------------

function humanReadable (seconds) {
	
	let hh = '0' + Math.trunc(seconds / 3600);
	seconds -= (hh * 3600);
	
	let mm = '0' + Math.trunc(seconds / 60);
	seconds -= (mm * 60);
	
	let ss = '0' + seconds;

	return `${hh.slice(-2)}:${mm.slice(-2)}:${ss.slice(-2)}`;
}

console.log('Human readable time: ', humanReadable(3599));

//---------------------------------------------------------------------------------------------------------------------------
//                                    Anagrams
//---------------------------------------------------------------------------------------------------------------------------

function anagrams(word, words) {
	return words.filter(w => w.split('').sort().join() === word.split('').sort().join());
}

console.log('Anagrams: ', anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));

//---------------------------------------------------------------------------------------------------------------------------
//                                    Directions Reduction
//---------------------------------------------------------------------------------------------------------------------------

function dirReduc(arr){
	const stack = [];
	arr.map((dir) => {
		if (stack[stack.length - 1] && 
			stack[stack.length - 1] === 'NORTH' && dir === 'SOUTH' 
			|| stack[stack.length - 1] === 'SOUTH' && dir === 'NORTH' 
			|| stack[stack.length - 1] === 'WEST' && dir === 'EAST' 
			|| stack[stack.length - 1] === 'EAST' && dir === 'WEST') {
			stack.pop();
		} else {
			stack.push(dir);
		}
	})
	return stack;
}

console.log('Directions Reduction: ', dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));

//---------------------------------------------------------------------------------------------------------------------------
//                                    Caesar cipher
//---------------------------------------------------------------------------------------------------------------------------

function rot13(message){
  return message.split('').map(l => {
		const alphabet = 'abcdefghijklmnopqrstuvwxyz'.includes(l) ? 'abcdefghijklmnopqrstuvwxyz' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		let lIndex = alphabet.indexOf(l);
		if(lIndex === -1) {
			return l;
		}
		let newIndex = lIndex + 13;
		if (newIndex >= 26) {
			newIndex = 13 - (26 - lIndex);
		}
		return alphabet[newIndex];
	}).join('');
}

console.log('Caesar cipher: ', rot13('Ndjn | lsldl { jsjk} '));

//---------------------------------------------------------------------------------------------------------------------------
//                                    Pete, the baker
//---------------------------------------------------------------------------------------------------------------------------

function cakes(recipe, available) {
	let amount = [];
	for (let ingr in recipe) {
		if (!available[ingr] || available[ingr] < recipe[ingr]) return 0;
		if (available[ingr] >= recipe[ingr]) {
			amount.push(Math.trunc(available[ingr] / recipe[ingr]));
		}
	}
  return Math.min(...amount);
}

console.log('Pete, the baker: ', cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));

//---------------------------------------------------------------------------------------------------------------------------
//                                    The Hashtag Generator
//---------------------------------------------------------------------------------------------------------------------------

function generateHashtag (str) {
	str = str.replace(/ +/g, ' ');
  if (str === '' || str === ' ') return false;
  const finalWord = `#${str.split(' ').map(w => w = w[0].toUpperCase() + w.slice(1)).join('')}`;
	return finalWord.length > 140 ? false : finalWord;
}

console.log('The Hashtag Generator: ', generateHashtag('Do We have A Hashtag'));
console.log('The Hashtag Generator: ', generateHashtag('code' + ' '.repeat(140) + 'wars'));
console.log('The Hashtag Generator: ', generateHashtag(' '.repeat(200)));
console.log('The Hashtag Generator: ', generateHashtag(''));

//---------------------------------------------------------------------------------------------------------------------------
//                                    Weight for weight
//---------------------------------------------------------------------------------------------------------------------------

function orderWeight(string) {
	const countSum = (a) => {
		return a.split('').reduce((acc, n) => acc + +n, 0);
	}
	return string
	.split(' ')
	.sort((a, b) => {
		const difference = countSum(a) - countSum(b);
		return difference === 0 ? (a > b ? 1 : -1) : difference;
	})
	.join(' ');
}

console.log('Weight for weight: ', orderWeight('56 65 74 100 99 68 86 180 90'), 'res must be: "100 180 90 56 65 74 68 86 99"');
console.log('Weight for weight: ', orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123'));
console.log('Weight for weight: ', orderWeight('27 72 18 81'));

//---------------------------------------------------------------------------------------------------------------------------
//                                    First non repeating letter
//---------------------------------------------------------------------------------------------------------------------------

function first_non_repeating_letter(string) {
	let str = string;
	for (let i = 0; i <= string.length; i++) {
		let el = str.slice(0, 1);
		str = str.slice(1);
		if(str.toLowerCase().indexOf(el.toLowerCase()) !== -1) {
			str = str.split('').filter(l => l !== el).join('');
			if (str.length === 1 || !str.length) return str;
		} else {
			return el;
		}
	} 
}

console.log('first_non_repeating_letter: ', first_non_repeating_letter('stress'));
console.log('first_non_repeating_letter: ', first_non_repeating_letter('moonmen'));
console.log('first_non_repeating_letter: ', first_non_repeating_letter('n5oqkn5oqk59yq59yq4d8f4d8f2qb62qb6t6mjft6mjfqzjvbqzjvb2w1ii2w1iiut4iut4iv05e5v05e5cx0hqcx0hq0jst70jst7g'));
console.log('first_non_repeating_letter: ', first_non_repeating_letter('sTreSS'));

//---------------------------------------------------------------------------------------------------------------------------
//                                    Incrementing string
//---------------------------------------------------------------------------------------------------------------------------

// 1 way:
// function incrementString (string) {
// 	const matches = string.matchAll(/[0-9]/g);
// 	let num = Array.from(matches, m => m[0]);
// 	num[num.length - 1]++;
// 	const matches2 = string.matchAll(/[0-9]/g);
// 	let i = Array.from(matches2, m => m.index)[0];

// 	return string.slice(0, i) + `${num.join('')}`;
// }

// 2 way: 
function incrementString (string) {
	let nums = string.split('').reduce((acc, l) => l.match(/[0-9]/g) ? acc + l : acc, '');
	if (!nums.length) return string + 1;
	const start = string.slice(0, string.indexOf(nums[0]));
	const num = +nums + 1;
	if (('' + num).length < nums.length) {
		const zeros = '0'.repeat(nums.length - ('' + num).length);
		return start + zeros + num;
	} else {
		return start + num;
	}
}

console.log('Incrementing string: ', incrementString('foo0042'));
console.log('Incrementing string: ', incrementString('foobar99'));

//---------------------------------------------------------------------------------------------------------------------------
//                                    Extract the domain name from a URL
//---------------------------------------------------------------------------------------------------------------------------

function extractDomain(str) {
	const i = str.indexOf('www') === -1 ? str.indexOf('://') === -1 ? 0 : str.indexOf('://') + 3 : str.indexOf('www') + 4;
	str = str.slice(i);
	return str.slice(0, str.indexOf('.'));
}

console.log('Extract the domain name from a URL: ', extractDomain('http://github.com/carbonfive/raygun'));
console.log('Extract the domain name from a URL: ', extractDomain('http://www.zombie-bites.com'));
console.log('Extract the domain name from a URL: ', extractDomain('https://www.cnet.com'));
console.log('Extract the domain name from a URL: ', extractDomain('something.com'));

//---------------------------------------------------------------------------------------------------------------------------
//                                    Human readable duration format
//---------------------------------------------------------------------------------------------------------------------------

function humanReadableDurationFormat(num) {
	const arr = [];
	const obj = {};
	function checkExistence(prop) {
		if (obj[prop] !== undefined) {
			let string;
			if (+obj[prop] > 1) {
				string = obj[prop] + ' ' + prop;
			}
			if (+obj[prop] === 1) {
				string = '1 ' + prop.slice(0, -1);
			}
			if (string) {
				arr.push(string);
			}
		}
	}
	if (num < 1) return 'now';
	if (num >= 31536000) {
		obj.years = Math.trunc(num / 31536000);
		checkExistence('years');
		num = num - obj.years * 31536000;
	}
	
	if (num >= 86400) {
		obj.days =  Math.trunc(num / 86400);
		checkExistence('days');
		num = num - obj.days * 86400;
	}
	if (num >= 3600) {
		obj.hours =  Math.trunc(num / 3600);
		checkExistence('hours');
		num = num - obj.hours * 3600;
	}
	if (num >= 60) {
		obj.minutes =  Math.trunc(num / 60);
		checkExistence('minutes');
		num = num - obj.minutes * 60;
	}
	if (num < 60) {
		obj.seconds = num;
		checkExistence('seconds');
	}
	if (arr.length === 1) {
		return arr[0];
	}
	if (arr.length >= 2) {
		let str = arr.reduce((acc, w) => acc + w + ', ', '');
		str = str.slice(0, -2);
		str = str.slice(0, str.lastIndexOf(',')) + ' and' + str.slice(str.lastIndexOf(',') + 1);
		return str;
	}
}

console.log('Human readable duration format: ', humanReadableDurationFormat(3662));
console.log('Human readable duration format: ', humanReadableDurationFormat(15731080));

//---------------------------------------------------------------------------------------------------------------------------
//                                    Sudoku: valid solution
//---------------------------------------------------------------------------------------------------------------------------

function validSolution(arr) {
	function rowsCheck(arrToCheck) {
		return arrToCheck.every(a => [...a].sort().join('') === '123456789');
	}

 	function columnsCheck() {
		let [row, col] = [0, 0];
		let arrCols= [];
		while (col < 9) {
			row = 0;
			let temp = [];
			while (row < 9) {
				temp.push(arr[row][col]);
				row++;
			}
			arrCols.push(temp);
			temp = [];
			col++;
		}
		return rowsCheck(arrCols);
	}

	function squaresCheck() {
		let [row, col] = [0, 0];
		let squares = [];
		let clone = arr.map(a => [...a]);
		let temp = [];
		while (clone.length) {
			row = 0;
			while (row < 3) {
			col = 0;
				while (col < 3) {
				temp.push(clone[row][col]);
				col++;
				}
			clone[row].splice(0, 3);
			row++;
			}
			clone = clone.filter(a => a.length > 0);
			squares.push(temp);
			temp = [];
		}
		return rowsCheck(squares);
	}

	return rowsCheck(arr) && columnsCheck() && squaresCheck();
}

console.log('Sudoku: ', validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]));
console.log('Sudoku: ', validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]));

//---------------------------------------------------------------------------------------------------------------------------
//                                    Scramble
//---------------------------------------------------------------------------------------------------------------------------

// way 1:
// function scramble(str1, str2) {
// 	return str2.split('').every(l => {
// 		if (str1.includes(l)) {
// 			str1 = str1.slice(0, str1.indexOf(l)) + str1.slice(str1.indexOf(l) + 1);
// 			return true;
// 		}
// 	})
// }

// way 2: 
// function scramble(str1, str2) {
// 	str1 = [...str1];
// 	for (let l of str2) {
// 		const i = str1.indexOf(l);
// 		if(i === -1) {
// 			return false;
// 		} else {
// 			str1.splice(i, 1);
// 		}
// 	}
// 	return true;
// }

// way 3 'Optimized solution':
function scramble(str1, str2) {
	return str2.split('').every((l) => str2.split(l).length <= str1.split(l).length);
}

console.log('Scramble: ', scramble('rkqodlw', 'world'));
console.log('Scramble: ', scramble('cedewaraaossoqqyt', 'codewars'));
console.log('Scramble: ', scramble('katas', 'steak'));
