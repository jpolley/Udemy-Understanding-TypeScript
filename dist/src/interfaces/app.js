"use strict";
var greeter = function (person) {
    console.log("Hello " + person.firstName + "!");
};
var changeName = function (person) {
    person.firstName = "Amy";
};
var guy = {
    firstName: "Jeremy",
    age: 36,
    hobbies: ["Cooking", "Sports"],
    greet: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName + ".");
    }
};
// greeter({firstName: "Moses", age: 5});
greeter(guy);
changeName(guy);
greeter(guy);
guy.greet("Polley");
var Person = /** @class */ (function () {
    function Person() {
        this.firstName = '';
        this.lastName = '';
    }
    Person.prototype.greet = function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName + ".");
    };
    return Person;
}());
var myPerson = new Person();
myPerson.firstName = "Judah";
myPerson.lastName = "Shoot";
greeter(myPerson);
myPerson.greet("Polley III");
var myDoubleFunction;
myDoubleFunction = function (val1, val2) {
    return (val1 + val2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 88,
    firstName: "Frank",
    greet: function (lastName) {
        if (lastName === void 0) { lastName = ''; }
        console.log("old person hay " + lastName);
    }
};
console.log(oldPerson);
