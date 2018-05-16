"use strict";
// arrow functions 
console.log('--------', 'Arrow Functions');
var add = function (number1, number2) {
    return number1 + number2;
};
console.log(add(10, 3));
var multiply = function (number1, number2) { return number1 * number2; };
console.log(multiply(10, 3));
var greet = function () {
    console.log('Hello there!');
};
greet();
var greetMe = function (name) { return console.log("Hello " + name); };
greetMe('Eric');
// Default parameters
console.log('-------- Default Parameters');
var countdown = function (start) {
    if (start === void 0) { start = 3; }
    while (start > 0) {
        start--;
    }
    console.log('Done!', start);
};
countdown(10);
// Rest
console.log("------------- Rest");
var numbers = [1, 10, 99, -5];
console.log(Math.max.apply(Math, numbers));
// Spread
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2, 6));
// Destructuring Arrays
console.log('-------- Destructuring Arrays');
var myHobbies = ["Cooking", "Sports"];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
// Destructuring Objects
console.log('-------- Destructuring Object');
var userData = {
    userName: 'Jeremy',
    age: '35'
};
// let myName = userData.userName;
// let myAge = userData.age;
var myName = userData.userName, myAge = userData.age;
console.log(myName, myAge);
