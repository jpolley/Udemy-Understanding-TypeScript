interface NamedPerson {
  firstName: string;
  age?: number;
  [propertyName: string]: any;
  greet(lastName: string): void;
}

let greeter = (person: NamedPerson): void => {
  console.log(`Hello ${person.firstName}!`)
}

let changeName = (person: NamedPerson): void => {
  person.firstName = "Amy";
}

let guy: NamedPerson = {
  firstName: "Jeremy",
  age: 36,
  hobbies: ["Cooking", "Sports"],
  greet(lastName: string) {
    console.log(`Hi, I am ${this.firstName} ${lastName}.`)
  }
}

// greeter({firstName: "Moses", age: 5});
greeter(guy);
changeName(guy);
greeter(guy);
guy.greet("Polley");

class Person implements NamedPerson {
  firstName: string = '';
  lastName: string = '';
  greet(lastName: string) {
    console.log(`Hi, I am ${this.firstName} ${lastName}.`)    
  }
}

let myPerson = new Person()
myPerson.firstName = "Judah";
myPerson.lastName = "Shoot";
greeter(myPerson);
myPerson.greet("Polley III");



// Function Types 

interface DoubleValueFunc {
  (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = (val1: number, val2: number) => {
  return (val1 + val2) * 2;
}

console.log(myDoubleFunction(10, 20));



// Interface Inheritence

interface AgedPerson extends NamedPerson {
  age: number;
}

let oldPerson: AgePerson = {
  age: 88,
  firstName: "Frank",
  greet(lastName: string = '') {
    console.log("old person hay");
  }
}

console.log(oldPerson);