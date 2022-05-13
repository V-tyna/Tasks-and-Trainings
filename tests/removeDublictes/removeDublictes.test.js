const dublicFunc = require('./removeDublictes');

describe('Remove duplicates from two arrays function', () => {
    let finalArr;
    beforeEach(() => {
        finalArr = [3, 8, 9, 7];
    });

    test('Function sould be defined', () => {
        expect(dublicFunc([], [])).toBeDefined();
    });

    test('Should return truthy value', () => {
        expect(dublicFunc([], [])).toBeTruthy();
    });

    test('Should push 10 to finalArr', () => {
        finalArr.push(10);
        expect(dublicFunc(finalArr, [])).toContain(10);
    });
    
    test('Should return finalArr' , () => {
        expect(dublicFunc([3, 8, 9], [7, 8, 9])).toEqual(finalArr);
    });

    test('Should NOT return dublicated values' , () => {
        expect(dublicFunc([8], [8])).not.toEqual([8, 8]);
    });
})