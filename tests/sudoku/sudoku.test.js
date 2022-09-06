const { sudoku, checkRows, checkColumns, checkSquares } = require('./sudoku');

describe('Function checkRows', () => {
  let valid, invalid, invalidLength;
  beforeEach(() => {
    valid = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ];
    invalid = new Array(9).fill(new Array(9).fill(0));

    invalidLength = [...valid].pop();

    invalidInnerArray = ([...valid][5] = [45]);
  });

  test('should get VALID and return TRUE', () => {
    expect(checkRows(valid)).toBe(true);
  });

  test('should get INVALID and return FALSE', () => {
    expect(checkRows(invalid)).toBe(false);
  });

  test('should get [] and return FALSE', () => {
    expect(() => checkRows([])).toThrow('Invalid sudoku input. Sudoku board should be exactly 9x9 size.');
  });

  test('should get invalidLength and return FALSE', () => {
    expect(() => checkRows(invalidLength)).toThrow('Invalid sudoku input. Sudoku board should be exactly 9x9 size.');
  });

  test('should get invalidInnerArray and return FALSE', () => {
    expect(() => checkRows(invalidInnerArray)).toThrow('Invalid sudoku input. Sudoku board should be exactly 9x9 size.');
  });
});

describe('function checkColumns', () => {
  let valid, invalid;
  beforeEach(() => {
    valid = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ];
    invalid = new Array(9).fill(new Array(9).fill(0));
  });

  test('should get VALID and return TRUE', () => {
    expect(checkColumns(checkRows, valid)).toBe(true);
  });

  test('should get INVALID and return FALSE', () => {
    expect(checkColumns(checkRows, invalid)).toBe(false);
  });

  test('first callback-argument should be called', () => {
    const checker = jest.fn(() => true);
    checkColumns(checker, valid);
    expect(checker).toHaveBeenCalled();
  });
});

describe('function checkSquares', () => {
  let valid, invalid;
  beforeEach(() => {
    valid = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ];
    invalid = new Array(9).fill(new Array(9).fill(0));
  });

  test('should get VALID and return TRUE', () => {
    expect(checkSquares(checkRows, valid)).toBe(true);
  });

  test('should get INVALID and return FALSE', () => {
    expect(checkSquares(checkRows, invalid)).toBe(false);
  });

  test('first callback-argument should be called', () => {
    const checker = jest.fn(() => true);
    checkSquares(checker, valid);
    expect(checker).toHaveBeenCalled();
  });
});

describe('Function sudoku', () => {
  let valid, invalid;
  beforeEach(() => {
    valid = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ];

    invalid = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2], 
      [6, 7, 2, 1, 9, 0, 3, 4, 8],
      [1, 0, 0, 3, 4, 2, 5, 6, 0],
      [8, 5, 9, 7, 6, 1, 0, 2, 0],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 0, 1, 5, 3, 7, 2, 1, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 0, 0, 4, 8, 1, 1, 7, 9]
    ]
  });

  test('should get VALID matrix and return TRUE', () => {
    expect(sudoku(checkRows, checkColumns, checkSquares, valid)).toBe(true);
  });

  test('should get INVALID matrix and return FALSE', () => {
    expect(sudoku(checkRows, checkColumns, checkSquares, invalid)).toBe(false);
  });

  test('sudoku callback should be called', () => {
    const checker = jest.fn(() => true);
    sudoku(checker, checkColumns, checkSquares, valid);
    expect(checker).toHaveBeenCalled();
  });

  test('sudoku callback should be called 3 times', () => {
    const checker = jest.fn(() => true);
    sudoku(checker, checkColumns, checkSquares, valid);
    expect(checker).toHaveBeenCalledTimes(3);
  });

  test('sudoku callback should return false', () => {
    const columnsChecker = jest.fn(() => false);
    sudoku(checkRows, columnsChecker, checkSquares, valid);
    expect(columnsChecker).toHaveReturnedWith(false);
  });

  test('sudoku should get mocked callback and return false', () => {
    const columnsChecker = jest.fn(() => false);
    expect(sudoku(checkRows, columnsChecker, checkSquares, valid)).toBe(false);
  });
});
