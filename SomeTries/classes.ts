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