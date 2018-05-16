// Simple Generic
function echo(data: any) {
  return data;
}
console.log(echo('Jeremy'));
console.log(echo(35));
console.log(echo({name: "jeremy", age: 36}));

// Better Generic
function betterEcho<T>(data: T) {
  return data;
}
console.log(betterEcho('Jeremy').length);
console.log(betterEcho(35));
console.log(betterEcho({name: "jeremy", age: 36}));

// Built-in Generics
let testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);

// Arrays
function printAll<T>(args: T[]) {
  args.forEach((element) => console.log(element));
}
printAll<string>(['Apple', 'Banana']);

// Generic Types
let echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>('Pizza Party!'))

// Generic Classes
class SimpleMath<T extends number | string> {
  baseValue: T;
  multiplyValue: T;
  calculate(): number {
    return +this.baseValue * +this.multiplyValue;
  }
}

const simpleMath = new SimpleMath<number>();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
