var DataBase = /** @class */ (function () {
    function DataBase(url, port, name, passw) {
        this._url = url;
        this._port = port;
        this._name = name;
        this._password = passw;
        this._tables = [];
    }
    DataBase.prototype.createNewTable = function (table) {
        this._tables.push(table);
    };
    DataBase.prototype.clearTable = function () {
        this._tables = [];
    };
    Object.defineProperty(DataBase.prototype, "url", {
        get: function () {
            return this._url;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataBase.prototype, "port", {
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataBase.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataBase.prototype, "password", {
        get: function () {
            return this._password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataBase.prototype, "tables", {
        get: function () {
            return this._tables;
        },
        enumerable: false,
        configurable: true
    });
    return DataBase;
}());
var db = new DataBase('https://someurl', 3000, 'John', '123abc');
console.log('Data base instanse: ', db); 
console.log('Get tables: ', db.tables); 
console.log('Create table: ', db.createNewTable({1: 'aa', 2: 'bb', 3: 'cc'}), db.tables);
console.log('Push directly in table: ', db.tables.push({4: 'vv', 5: 'ww', 6: 'yy'}), db.tables);
console.log('Change name: ', db.name = 'Bob', db.name);
