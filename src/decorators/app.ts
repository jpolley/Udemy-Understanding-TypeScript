// function logged(constructorFn: Function) {
//   console.log(constructorFn);
// }

// @logged
// class Human {
//   constructor() {
//     console.log("Hi")
//   }
// }

// // Factory
// function logging(value: boolen) {
//   return value ? logged : null;
// }

// @logging(true)
// class Truck {

// }

// // Advanced 
// function printable(constructorFn: Function) {
//   constructorFn.prototype.print = function() {
//     console.log(this);
//   }
// }

// @logging(false)
// @printable
// class Farm {
//   name = "Green";
// }
// let farm = new Farm();
// (<any>farm).print();

// // Method Decorator
// function editable(value: boolean) {
//   return function(target: any, propName: string, descriptor: PropertyDescriptor) {
//     descriptor.writable = value;
//   }
// }

// class Task {
//   taskName: string;
//   constructor(name: string) {
//     this.taskName = name;
//   }

//   @editable(true)
//   calcBudget() {
//     console.log(1000);
//   }
// }
// let task = new Task("Super Task");
// task.calcBudget();
// task.calcBudget = function() {
//   console.log(2000);
// }
// task.calcBudget();