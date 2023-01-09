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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
// *************************** DECORATOR ****************************
function decoratorLog(constructorFn) {
    console.log('Decorator logs constructor of wrapped class: ', constructorFn);
}
function isLog(flag) {
    return flag ? decoratorLog : null;
}
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        console.log('New Person');
    }
    Person = __decorate([
        isLog(true)
        // @decoratorLog
    ], Person);
    return Person;
}());
function abilityToShow(constructorFn) {
    constructorFn.prototype.showHtml = function () {
        var div = document.createElement('div');
        div.innerHTML = JSON.stringify(this) + '<p>Shows data in decorator.</p>' + '<hr>';
        document.body.appendChild(div);
    };
}
var Person2 = /** @class */ (function () {
    function Person2(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
        console.log('New Person 2');
    }
    Person2.prototype.showData = function () {
        var div = document.createElement('div');
        div.innerHTML = JSON.stringify(this) + '<p>Shows data inside class.</p>' + '<hr>';
        document.body.appendChild(div);
    };
    Person2 = __decorate([
        abilityToShow
    ], Person2);
    return Person2;
}());
var person2 = new Person2('John', 25, 'Backend');
console.log('Person 2: ', person2);
person2.showHtml();
person2.showData();
