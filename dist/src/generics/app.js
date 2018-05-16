"use strict";
// Simple Generic
function echo(data) {
    return data;
}
console.log(echo('Jeremy'));
console.log(echo(35));
console.log(echo({ name: "jeremy", age: 36 }));
// Better Generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho('Jeremy').length);
console.log(betterEcho(35));
console.log(betterEcho({ name: "jeremy", age: 36 }));
// Built-in Generics
var testResults = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);
// Arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(['Apple', 'Banana']);
// Generic Types
var echo2 = betterEcho;
console.log(echo2('Pizza Party!'));
// Generic Classes
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
