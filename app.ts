// string
let myName = 'Jeremy';

// number
let myAge = 35.6;

// boolean
let hasHobbies = true;

// assign types
let myRealAge: number;

// array
let hobbies: string[] = ["Cooking", "Sports"];

// tuple
let address: [string, number] = ["Superstreet", 99];

// enum
enum Color {
  Red, // 0
  Green = 100, // 100
  Blue = 2// 2
}

let myColor: Color = Color.Green;
myColor // 100

// any
let car: any = 'Honda';
car = { brand: 'Honda', model: 'Odyseey' };

// functions
function returnMyName(): string {
  return myName;
}
// console.log(returnMyName());

// void
function sayHello(): void {
  // console.log("Hello!");
  // this function doesn't return anything
}

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
multiply(2, 4);

// function types
let myMultiply: (val1: number, val2: number) => number;
myMultiply = multiply;
myMultiply(5, 2);

// objects
let userData: { name: string, age: number } = {
  name: 'Jeremy',
  age: 35
};

// complex object
let complex: {data:number[], output: (all: boolean) => number[]} = {
  data: [100, 3.99, 10],

  output: function (all: boolean): number[] {
    return this.data;
  }
};

// type alias
type Complex = {data:number[], output: (all: boolean) => number[]}

let complex2: Complex = {
  data: [100, 3.99, 10],

  output: function (all: boolean): number[] {
    return this.data;
  }
}; 

// union types
let myRealRealAge: number | string = 27;
myRealRealAge = "27";

// check types
let finalValue =  30;
if (typeof finalValue == "number") {
  // console.log(`Final value is a number: ${finalValue}`)
}

// never
function neverReturns(): never {
  throw new Error('An error!');
}

// nullable types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull; // type any & value undefined
canAlsoBeNull = null;
