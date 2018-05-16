class Person {
  name: string;
  private type: string;
  protected age: number = 27;

  constructor(name: string, public username: string) {
    this.name = name;
  }

  printAge() {
    console.log(this.age);
    this.setType('Old guy');
  }

  private setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}

let person = new Person('Jeremy', 'jpolley');
console.log(person.name, person.username);
person.printAge();
// person.setType('Cool guy'); // Won't work with private method

// Inheritence

class Jeremy extends Person {
  constructor(username: string) {
    super("Maxy", username)
    this.age = 36;
  }
}

const jeremy = new Jeremy('farts');
console.log(jeremy);

// Getters & Setters
class Plant {
  private _species: string = "Default";

  get species() {
    return this._species;
  }

  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = "Default";
    }
  }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "ABCD";
console.log(plant.species);

// Static Properties & Methods
class Helpers {
  static PI: number = 3.14;
  static calcCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

// Abstract Classes
abstract class Project {
  name: string = 'test';
  budget: number = 1;

  abstract changeName(name: string): void;

  calcBudget() {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName(name: string): void {
    this.name = name;
  }
}
let business = new ITProject();
console.log(business);
business.changeName("Super Project Name")
console.log(business);
