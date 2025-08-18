// day4.js - Functions in JavaScript

// 1. Basic function
function greet() {
  console.log("Hello, welcome to Day 4!");
}
greet(); // Call the function

// 2. Function with parameters
function add(a, b) {
  return a + b;
}
console.log("Addition:", add(5, 7));

// 3. Function with default parameter
function multiply(a, b = 2) {
  return a * b;
}
console.log("Multiply with default:", multiply(5));
console.log("Multiply both args:", multiply(5, 3));

// 4. Arrow functions
const square = (num) => num * num;
console.log("Square:", square(6));

// 5. Function Expression
const subtract = function (x, y) {
  return x - y;
};
console.log("Subtract:", subtract(10, 4));

// 6. Function Scope Example
let globalVar = "I am global";

function scopeExample() {
  let localVar = "I am local";
  console.log(globalVar); // can access global
  console.log(localVar);  // can access local
}
scopeExample();
// console.log(localVar); // ❌ Error: not accessible outside

// 7. Functions inside Functions (Nested Functions)
function outerFunction() {
  function innerFunction() {
    console.log("Hello from inner function!");
  }
  innerFunction();
}
outerFunction();

// 8. Higher Order Functions (function passed as argument)
function doOperation(a, b, operation) {
  return operation(a, b);
}

const sum = (x, y) => x + y;
const product = (x, y) => x * y;

console.log("HOF Sum:", doOperation(4, 6, sum));
console.log("HOF Product:", doOperation(4, 6, product));


// 🔥 Challenge Tasks for You 🔥
// 1. Write a function `isEven` that checks if a number is even.
// 2. Write an arrow function `findMax` that returns the larger of two numbers.
// 3. Create a function `reverseString` that reverses a given string.
// 4. Create a higher-order function `applyTwice(func, value)` that applies a function two times on a value.
//    Example: applyTwice(square, 2) → 16
