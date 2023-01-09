class User {
  private isTeacher: boolean;
  protected age: number = 30;

  constructor(public name: string, public job: string) {}

  public getAge(): number | string {
    return this.age;
  }
}

class Developer extends User {
  constructor (job: string) {
    super('Developer', job);
    this.age = 100;
  }
  getAge() {
    return 'Your age is ' + this.age; // We can NOT change type of Parent method, but we CAN change parent method
  }
}

const user = new User('Valya', 'Frontend');
const developer = new Developer('Frontend');
console.log('User: ', user, 'protected age: ', user.getAge());
console.log('Developer: ', developer);

abstract class Car {
  private model: string;
  private year = 2023;

  abstract logInfo(info: string): void; // this is template for method that MUST be implemented in child classes

  public getCarYear(): number {
    return this.year;
  }
}

class Audi extends Car {
  public logInfo(info: string): void {
    console.log(info); 
  }
}

const car = new Audi();
console.log('Car: ', car);
car.logInfo('Info');
console.log('Car year: ', car.getCarYear());

// *************************** DECORATOR ****************************

function decoratorLog (constructorFn: Function) {
  console.log('Decorator logs constructor of wrapped class: ', constructorFn);
}

function isLog(flag: boolean): (constructorFn: Function) => void | null {
  return  flag ? decoratorLog : null;
}

@isLog(true)
// @decoratorLog

class Person {
  constructor(public name: string, public age?: number) {
    console.log('New Person')
  }
}

function abilityToShow(constructorFn: Function) {
  constructorFn.prototype.showHtml = function() {
    const div = document.createElement('div');
    div.innerHTML = JSON.stringify(this) + '<p>Shows data in decorator.</p>' + '<hr>';
    document.body.appendChild(div);
  }
}

@abilityToShow

class Person2 {
  constructor(public name: string, public age?: number, public job?: string) {
    console.log('New Person 2')
  }
  showData() {
    const div = document.createElement('div');
    div.innerHTML = JSON.stringify(this) + '<p>Shows data inside class.</p>' + '<hr>';
    document.body.appendChild(div);
  }
}

const person2 = new Person2('John', 25, 'Backend');
console.log('Person 2: ', person2);
(<any>person2).showHtml();
person2.showData();
