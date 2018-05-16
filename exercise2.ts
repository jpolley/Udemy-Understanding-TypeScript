// Exercise 1 - Maybe use an Arrow Function?
let double = (value: number) => value * 2;
console.log(double(10));

// Exercise 2 - If only we could provide some default values...
let greet = (name: string = 'friend!') => {
  console.log("Hello, " + name);
};
greet();
greet("Anna");

// Exercise 3 - Isn't there a shorter way to get all these Values?
let numbers: number[] = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

// Exercise 4 - I have to think about Exercise 3 ...
let newArray: number[] = [55, 20];
newArray.push(...numbers);
console.log(newArray);

// Exercise 5 - That's a well-constructed array.
let testResults: number[] = [3.89, 2.99, 1.38];
let [result1, result2, result3] = testResults
console.log(result1, result2, result3);

// Exercise 6 - And a well-constructed object!
let scientist: {firstName: string, experience: number} = {firstName: "Will", experience: 12};
let {firstName, experience} = scientist
console.log(firstName, experience);