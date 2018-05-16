// arrow functions 
console.log('--------', 'Arrow Functions')

const add = function(number1: number, number2: number): number {
  return number1 + number2;
}
console.log(add(10, 3));

const multiply = (number1: number, number2: number) => number1 * number2
console.log(multiply(10, 3));

const greet = () => {
  console.log('Hello there!');
}
greet();

const greetMe = (name: string) => console.log(`Hello ${name}`)
greetMe('Eric')

// Default parameters
console.log('-------- Default Parameters')
const countdown = (start: number = 3): void => {
  while (start > 0) {
    start--;
  }
  console.log('Done!', start);  
}
countdown(10);

// Rest
console.log("------------- Rest");
const numbers: number[] = [1, 10, 99, -5];
console.log(Math.max(...numbers));

// Spread
function makeArray (...args: number[]) {
  return args;
}
console.log(makeArray(1, 2, 6));

// Destructuring Arrays
console.log('-------- Destructuring Arrays');
const myHobbies = ["Cooking", "Sports"];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2)

// Destructuring Objects
console.log('-------- Destructuring Object');

const userData = {
  userName: 'Jeremy',
  age: '35'
}
// let myName = userData.userName;
// let myAge = userData.age;
let {userName: myName, age: myAge} = userData;
console.log(myName, myAge);
