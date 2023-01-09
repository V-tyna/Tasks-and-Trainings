var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, job) {
        this.name = name;
        this.job = job;
        this.age = 30;
    }
    User.prototype.getAge = function () {
        return this.age;
    };
    return User;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(job) {
        var _this = _super.call(this, 'Developer', job) || this;
        _this.age = 100;
        return _this;
    }
    Developer.prototype.getAge = function () {
        return 'Your age is ' + this.age; // We can NOT change type of Parent method, but we CAN change parent method
    };
    return Developer;
}(User));
var user = new User('Valya', 'Frontend');
var developer = new Developer('Frontend');
console.log('User: ', user, 'protected age: ', user.getAge());
console.log('Developer: ', developer);
var Car = /** @class */ (function () {
    function Car() {
        this.year = 2023;
    }
    Car.prototype.getCarYear = function () {
        return this.year;
    };
    return Car;
}());
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Audi.prototype.logInfo = function (info) {
        console.log(info);
    };
    return Audi;
}(Car));
var car = new Audi();
console.log('Car: ', car);
car.logInfo('Info');
console.log('Car year: ', car.getCarYear());
