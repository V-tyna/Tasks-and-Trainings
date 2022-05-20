const { login, checkLogin, showError } = require('./tryCatch');

const req = {
    body: {
        email: 'v@gmail.com',
        password: '123456'
    }
};
const mockCheck = jest.fn(checkLogin);
const mockErr = jest.fn(showError);

describe('Mocked function mockChek', () => {

    test('should beeen called', () => {
        mockCheck();
        expect(mockCheck).toHaveBeenCalled();
    });

    test('should get arguments and return true', () => {
        expect(mockCheck('d@gmail.com', '123456')).toBe(true);
    }); 

})

describe('Mocked function mockErr', () => {
    
    test('should get error and twhrow new error with message "Sorry, you have an "', () => {
        expect(() => {mockErr('error')}).toThrow("Sorry, you have an error");
    }); 

})

describe('Login function', () => {
    
    test('should twhrow new error with message "error is not a function"', () => {
        expect(() => {login()}).toThrow("error is not a function");
    }); 

    test('should get NOT valid data and twhrow new error with message "Sorry, you have an error"', () => {
        expect(() => {login({}, {}, mockErr('error'))}).toThrow("Sorry, you have an error");
    }); 

    test('should get valid data and return true', () => {
        expect(login(req, mockCheck, mockErr)).toBe(true);
    }); 

    test('should get NOT valid data for 1-st parametr and return false', () => {
        expect(login({body: {}}, mockCheck, mockErr)).toBe(false);
    }); 

})