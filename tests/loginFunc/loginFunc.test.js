const { login, checkLogin } = require('./loginFunc');

let req;
const mockFunc = jest.fn(checkLogin);

beforeEach(() => {
    req = {
        body: {
            email: 'v@gmail.com',
            password: '123456'
        }
    }
})

describe('Login function', () => {

    test('should be called 1 time', () => {
        login(req, mockFunc);
        expect(mockFunc).toBeCalledTimes(1);
    });

    test('should get data = req and return true', () => {
        expect(login(req, mockFunc)).toBe(true);
    });

    test('should get empty data and return error with message "Empty parametrs"', () => {
        expect(() => {login()}).toThrow('Empty parametrs');
    });

})