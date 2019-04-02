// Exercise 1 - How was your TypeScript Class?
class Car {
  name: string;
  acceleration: number;
  age: number;

  constructor(name: string, acceleration: number = 0, age: number = 0,) {
    this.name = name;
    this.acceleration = acceleration;
    this.age = age;
  }

  honk() {
    console.log("Toooooooooot!");
  }

  accelerate(speed: number): void {
    this.acceleration += speed;
  }
}


let car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2 - Two objects, based on each other ...
class BaseObject {
  width: number = 0;
  length: number = 0;
}

class Rectangle extends BaseObject {
  calcSize() {
    return this.width * this.length;
  }
}

let rectangle = new Rectangle
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Dude {
  private _firstName: string = "";

  get firstName() {
    return this._firstName;
  }

  set firstName(value: string) {
    if (value.length > 3) {
      this._firstName = value;
    } else {
      this._firstName = "";
    }
  }
}

let dude = new Dude
console.log(dude.firstName);
dude.firstName = "Ma";
console.log(dude.firstName);
dude.firstName = "Maximilian";
console.log(dude.firstName);