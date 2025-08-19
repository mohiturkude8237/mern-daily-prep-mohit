// Day 5 - Arrays Advanced Methods in JavaScript

// 1. forEach() → runs function for each element
let numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log("Number:", num));

// 2. map() → creates new array with modified values
let squares = numbers.map(num => num * num);
console.log("Squares:", squares); // [1,4,9,16]

// 3. filter() → filters based on condition
let evens = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evens); // [2,4]

// 4. reduce() → reduces array to single value
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum); // 10

// 5. find() → returns first match
let firstEven = numbers.find(num => num % 2 === 0);
console.log("First Even:", firstEven); // 2

// 6. some() → checks if any element satisfies condition
console.log("Has even?", numbers.some(num => num % 2 === 0)); // true

// 7. every() → checks if all elements satisfy condition
console.log("All positive?", numbers.every(num => num > 0)); // true

// 8. sort() → sorts elements (alphabetically by default)
let fruits = ["banana", "apple", "mango"];
console.log("Sorted Fruits:", fruits.sort()); // ["apple","banana","mango"]

// For numbers, provide compare function
let nums = [10, 2, 5, 1];
console.log("Sorted Numbers:", nums.sort((a, b) => a - b)); // [1,2,5,10]

/* -------------------------
   Practice Problems
------------------------- */

// Q1: Given an array of numbers, return new array with only numbers > 50
let arr1 = [10, 55, 30, 80, 45];
let greaterThan50 = arr1.filter(num => num > 50);
console.log("Numbers > 50:", greaterThan50);

// Q2: Find product of all numbers in an array
let arr2 = [2, 3, 4];
let product = arr2.reduce((acc, curr) => acc * curr, 1);
console.log("Product:", product); // 24
