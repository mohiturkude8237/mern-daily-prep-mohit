// Day 8 - Functions Basics in JavaScript

// 1. Function Declaration
function greet() {
  console.log("Hello Mohit, Welcome to Backend Journey!");
}
greet();

// 2. Function with Parameters
function add(a, b) {
  return a + b;
}
console.log("Sum:", add(5, 10));

// 3. Function Expression
const multiply = function (x, y) {
  return x * y;
};
console.log("Multiply:", multiply(4, 6));

// 4. Arrow Function
const subtract = (a, b) => a - b;
console.log("Subtract:", subtract(10, 3));

// 5. Default Parameters
function greetUser(name = "Guest") {
  console.log("Hello,", name);
}
greetUser("Mohit");
greetUser();

// 6. Rest Parameters
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log("Sum of all:", sumAll(1, 2, 3, 4, 5));

// 7. Returning Objects
function createUser(username, age) {
  return {
    username,
    age,
    isActive: true,
  };
}
console.log("User Object:", createUser("Mohit", 25));

// 8. Function inside Object (Methods)
const calculator = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
};
console.log("Calc Add:", calculator.add(7, 3));
console.log("Calc Sub:", calculator.sub(7, 3));

// 9. Callback Function Example
function processUserInput(name, callback) {
  console.log("Processing user:", name);
  callback(name);
}
processUserInput("Mohit", (name) => {
  console.log("Callback executed for", name);
});

// 10. Interview Concept - Function Hoisting
hoisted(); // works even before declaration
function hoisted() {
  console.log("This function is hoisted!");
}
