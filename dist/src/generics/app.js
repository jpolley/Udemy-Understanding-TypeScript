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
var testResultss = [1.94, 2.33];
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
// // Generic Classes
// class SimpleMath<T extends number | string> {
//   baseValue: T;
//   multiplyValue: T;
//   calculate(): number {
//     return +this.baseValue * +this.multiplyValue;
//   }
// }
// const simpleMath = new SimpleMath<number>();
// simpleMath.baseValue = 10;
// simpleMath.multiplyValue = 20;
// console.log(simpleMath.calculate());
