class DataBase {
    private _url: string;
    private _port: number;
    private _name: string;
    private _password: string | number;
    private _tables: Array<object>;
   
    constructor(url: string, port: number, name: string, passw: string | number) {
        this._url = url;
        this._port = port;
        this._name = name;
        this._password = passw;
        this._tables = [];
    }

    public createNewTable(table: object) {
        this._tables.push(table);
    }

    public clearTable() {
        this._tables = [];
    }

    get url() {
        return this._url;
    }

    get port() {
        return this._port;
    }

    get name() {
        return this._name;
    }

    get password() {
        return this._password;
    }

    get tables() {
        return this._tables;
    }
}

const db = new DataBase('https://someurl', 3000, 'John', '123abc');
console.log(db); // Error
console.log(db.tables); // Works

