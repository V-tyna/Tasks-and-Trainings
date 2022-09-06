const SUDOKU_SIDE = 9;
const SUDOKU_INNER_SQUARE_SIDE = 3;
const SUM_OF_ALL_SUDOKU_DIGITS = 45;

function checkRows(arrToCheck) {
	const isValid = arrToCheck.every(a => a.length === SUDOKU_SIDE);
	if (!arrToCheck.length || arrToCheck.length !== SUDOKU_SIDE || !isValid) {
		throw new Error('Invalid sudoku input. Sudoku board should be exactly 9x9 size.');
	}
	return arrToCheck.every(a => a.reduce((acc, num) => acc + num, 0) === SUM_OF_ALL_SUDOKU_DIGITS);
}

function checkColumns(rowsFn, arr) {
	let [row, col] = [0, 0];
	let arrCols= [];
	while (col < SUDOKU_SIDE) {
		row = 0;
		let temp = [];
		while (row < SUDOKU_SIDE) {
			temp.push(arr[row][col]);
			row++;
		}
		arrCols.push(temp);
		temp = [];
		col++;
	}
	return rowsFn(arrCols);
}

function checkSquares(rowsFn, arr) {
	let [row, col] = [0, 0];
	let squares = [];
	let clone = arr.map(a => [...a]);
	let temp = [];
	while (clone.length) {
		row = 0;
		while (row < SUDOKU_INNER_SQUARE_SIDE) {
		col = 0;
			while (col < SUDOKU_INNER_SQUARE_SIDE) {
			temp.push(clone[row][col]);
			col++;
			}
		clone[row].splice(0, SUDOKU_INNER_SQUARE_SIDE);
		row++;
		}
		clone = clone.filter(a => a.length > 0);
		squares.push(temp);
		temp = [];
	}
	return  rowsFn(squares);
}

function sudokuValidSolution(rowsFn, columnsFn, squaresFn, sudokuMatrix) {
	return rowsFn(sudokuMatrix) && columnsFn(rowsFn, sudokuMatrix) && squaresFn(rowsFn, sudokuMatrix);
}

module.exports = {
	sudoku: sudokuValidSolution,
	checkRows,
	checkColumns,
	checkSquares
};
