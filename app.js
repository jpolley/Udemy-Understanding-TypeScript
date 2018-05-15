"use strict";
// string
var myName = 'Jeremy';
// number
var myAge = 35.6;
// boolean
var hasHobbies = true;
// assign types
var myRealAge;
// array
var hobbies = ["Cooking", "Sports"];
// tuple
var address = ["Superstreet", 99];
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // 2
})(Color || (Color = {}));
var myColor = Color.Green;
myColor; // 100
// any
var car = 'Honda';
car = { brand: 'Honda', model: 'Odyseey' };
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log("Hello!");
    // this function doesn't return anything
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
multiply(2, 4);
// function types
var myMultiply;
myMultiply = multiply;
myMultiply(5, 2);
// objects
var userData = {
    name: 'Jeremy',
    age: 35
};
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 27;
myRealRealAge = "27";
// check types
var finalValue = 30;
if (typeof finalValue == "number") {
    console.log("Final value is a number: " + finalValue);
}
// never
function neverReturns() {
    throw new Error('An error!');
}
// nullable types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull; // type any & value undefined
canAlsoBeNull = null;
var canThisBeAny = null;
console.log(typeof canThisBeAny);
