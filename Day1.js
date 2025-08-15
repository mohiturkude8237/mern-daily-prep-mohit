// Day 1: JS Basics - Variables, Data Types, Operators

// Variables
let name = "Mohit";
const age = 23;
var city = "Bhandara";

// Operators
console.log("Age + 2 =", age + 2);      // 25
console.log("Age > 20 =", age > 20);    // true
console.log("Age == 23 =", age == 23);  // true
console.log("Age === '23' =", age === "23"); // false

// Data types
let isDeveloper = true;
let skills = ["HTML", "CSS", "JavaScript"];
let info = { city: "Bhandara", country: "India" };

console.log("Skill at index 1:", skills[1]); // CSS
console.log("City:", info.city);            // Bhandara

// Mini Exercises
// 1. Create 3 variables: myName, myAge, myCity
let myName = "Mohit";
let myAge = 23;
let myCity = "Bhandara";

// 2. Print a sentence using template literals
console.log(`My name is ${myName}, I am ${myAge} years old, living in ${myCity}.`);

// 3. Try using + operator with numbers and strings
console.log("Age + 5 =", myAge + 5);       // 28
console.log("Age + ' years' =", myAge + " years"); // "23 years"
