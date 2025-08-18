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



/* =========================================================
   📌 INTERVIEW NOTES — JavaScript Arrays (Day 3)
   =========================================================

1) How to detect an array?
   - typeof [] === "object" (misleading)
   - ✅ Use Array.isArray(value)  // true for arrays

2) push/pop vs unshift/shift (Performance)
   - push()  → add to end (O(1) amortized)
   - pop()   → remove from end (O(1))
   - unshift() → add to start (O(n))  // shifts indexes
   - shift()   → remove from start (O(n))
   👉 Prefer push/pop for performance.

3) slice() vs splice()
   - slice(start, end?) → does NOT mutate (returns copy)
   - splice(start, deleteCount, ...items?) → MUTATES array
   Examples:
     const a = [1,2,3,4];
     a.slice(1,3); // [2,3], a unchanged
     a.splice(1,2); // removes 2 items from index 1, a mutated

4) Shallow copy methods (not deep clone)
   const a = [1,2,{x:5}];
   const b = a.slice();         // shallow
   const c = [...a];            // shallow
   const d = Array.from(a);     // shallow
   // b[2].x = 9 also changes a[2].x because of shared reference.

5) Comparing arrays
   [1,2] === [1,2]  // false (different references)
   // Value comparison quick hacks:
   JSON.stringify(a) === JSON.stringify(b) // ok for primitives, order-sensitive
   a.length === b.length && a.every((v,i)=>v===b[i]) // cleaner

6) Iteration choices
   - for (let i=0; i<arr.length; i++) { ... }   // fastest/manual
   - for (const v of arr) { ... }               // clean values
   - arr.forEach(v => ...)                      // cannot break/return aggregate
   ⚠️ Avoid for...in on arrays (iterates keys, includes inherited props).

7) Searching
   - includes(value)        // boolean
   - indexOf(value)         // index or -1
   - find(fn) / findIndex(fn) // predicate-based

8) Sorting numbers correctly
   const nums = [10, 2, 5];
   nums.sort();              // ["10","2","5"] lexicographic → [10,2,5] wrong order
   nums.sort((a,b)=>a-b);    // ✅ numeric ascending

9) Reversing without mutation
   const r1 = arr.reverse();       // MUTATES original
   const r2 = [...arr].reverse();  // ✅ keeps original intact

10) Removing duplicates quickly
    const unique = [...new Set(arr)];

11) Insert/remove at a position
    // Insert 99 at index 2:
    arr.splice(2, 0, 99);
    // Remove 2 items from index 3:
    arr.splice(3, 2);

12) Strings ↔ Arrays
    "a,b,c".split(",")  // ["a","b","c"]
    ["a","b","c"].join("-") // "a-b-c"

13) Multidimensional arrays
    const grid = [[1,2],[3,4]];
    grid[1][0] // 3

14) Common pitfalls
    - Mutating methods (push/pop/shift/unshift/splice/reverse/sort) change original.
    - Keep an eye on shallow copies with nested objects.

15) How to explain in an interview (sample)
    “push/pop are O(1) because they work at the array end; unshift/shift are O(n)
     since they reindex all elements. Use slice for non-mutating copies and splice
     when you need to surgically insert/remove in-place.”

// 🎯 Quick Practice Prompts
// A) Write a function to remove all occurrences of a value from an array (without using filter).
// B) Write a function isArrayEqual(a,b) that returns true if two number arrays have same items in same order.

========================================================= */
