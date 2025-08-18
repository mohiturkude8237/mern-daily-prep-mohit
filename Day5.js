// day5.js
// 📌 Topic: Arrays in JavaScript
// Interview Notes included

// 1. Creating Arrays
let fruits = ["apple", "banana", "mango"];
console.log("Fruits:", fruits);

// 2. Accessing elements
console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);

// 3. Adding and Removing
fruits.push("orange");   // add at end
console.log("After push:", fruits);

fruits.pop();            // remove last
console.log("After pop:", fruits);

fruits.unshift("grapes"); // add at start
console.log("After unshift:", fruits);

fruits.shift();           // remove first
console.log("After shift:", fruits);

// 4. Searching
console.log("Index of banana:", fruits.indexOf("banana"));
console.log("Includes mango?", fruits.includes("mango"));

// 5. Slice vs Splice
let sliced = fruits.slice(0, 2);   // returns new array
console.log("Sliced:", sliced);

fruits.splice(1, 1, "kiwi"); // remove 1 at index 1 and add kiwi
console.log("After splice:", fruits);

// 6. Combining
let veggies = ["carrot", "potato"];
let food = fruits.concat(veggies);
console.log("Concat:", food);

console.log("Joined:", food.join(" - "));

// 7. Looping
for (let fruit of fruits) {
  console.log("For...of:", fruit);
}

fruits.forEach((f, i) => console.log(`Index ${i}: ${f}`));

// ---------------------------------------------
// 📝 Interview Practice Questions
// ---------------------------------------------

// Q1. Reverse an array
let arr = [1, 2, 3, 4, 5];
let reversed = arr.reverse();
console.log("Reversed:", reversed);

// Q2. Find the maximum number in an array
let numbers = [10, 55, 2, 99, 23];
let max = Math.max(...numbers);
console.log("Max number:", max);

// Q3. Remove duplicates from array
let dupArr = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [...new Set(dupArr)];
console.log("Unique Array:", uniqueArr);

// Q4. Sum of all elements in array
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);

// Q5. Check if an element exists (without includes)
function elementExists(arr, elem) {
  for (let item of arr) {
    if (item === elem) return true;
  }
  return false;
}
console.log("Element exists (99)?", elementExists(numbers, 99));
console.log("Element exists (101)?", elementExists(numbers, 101));

// ---------------------------------------------
// End of Day 5 🚀
// ---------------------------------------------
