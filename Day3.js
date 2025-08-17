// Day 3 - Arrays Basics in JavaScript
// Author: Mohit | Goal: Backend Developer in 2 Months 🚀

// ✅ Array Creation
let fruits = ["Apple", "Banana", "Mango"];
console.log("Fruits:", fruits);

// ✅ Accessing Elements
console.log("First Fruit:", fruits[0]);
console.log("Second Fruit:", fruits[1]);

// ✅ Modifying Elements
fruits[1] = "Orange";
console.log("After Modification:", fruits);

// ✅ Adding Elements
fruits.push("Grapes"); // adds at the end
console.log("After push:", fruits);

fruits.unshift("Pineapple"); // adds at the beginning
console.log("After unshift:", fruits);

// ✅ Removing Elements
fruits.pop(); // removes last
console.log("After pop:", fruits);

fruits.shift(); // removes first
console.log("After shift:", fruits);

// ✅ Array Length
console.log("Array Length:", fruits.length);

// ✅ Iterating Array (Loop)
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit at index ${i}:`, fruits[i]);
}

// =========================
// 🎯 Coding Challenges
// =========================

// Challenge 1: Find the largest number in an array
let numbers = [10, 45, 67, 23, 89, 12];
let maxNum = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maxNum) {
    maxNum = numbers[i];
  }
}
console.log("Largest number:", maxNum);

// Challenge 2: Reverse an array (without using reverse())
let original = [1, 2, 3, 4, 5];
let reversed = [];

for (let i = original.length - 1; i >= 0; i--) {
  reversed.push(original[i]);
}
console.log("Original:", original);
console.log("Reversed:", reversed);
