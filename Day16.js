// Day 16 - Array Higher Order Functions
// --------------------------------------
// These functions are super important in backend for processing data 
// (user lists, products, transactions, etc.)

const numbers = [1, 2, 3, 4, 5, 6];

// 1. forEach (just loops, no return)
numbers.forEach(num => {
  console.log("Number:", num);
});

// 2. map (returns a new array)
const squares = numbers.map(num => num * num);
console.log("Squares:", squares); // [1,4,9,16,25,36]

// 3. filter (returns array of matching items)
const evens = numbers.filter(num => num % 2 === 0);
console.log("Evens:", evens); // [2,4,6]

// 4. reduce (reduces array to single value)
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum); // 21

// 5. find (returns first matching item)
const firstEven = numbers.find(num => num % 2 === 0);
console.log("First Even:", firstEven); // 2

// 6. some (checks if at least one matches)
const hasOdd = numbers.some(num => num % 2 !== 0);
console.log("Has Odd Number:", hasOdd); // true

// 7. every (checks if all match)
const allPositive = numbers.every(num => num > 0);
console.log("All Positive:", allPositive); // true


// --------------------------------------
// Mini Backend-Style Examples
// --------------------------------------

// Example 1: Filter active users
const users = [
  { id: 1, name: "Mohit", active: true },
  { id: 2, name: "Chetan", active: false },
  { id: 3, name: "Raj", active: true }
];

const activeUsers = users.filter(user => user.active);
console.log("Active Users:", activeUsers);

// Example 2: Get all user names
const names = users.map(user => user.name);
console.log("User Names:", names);

// Example 3: Calculate total balance
const accounts = [
  { id: 101, balance: 1000 },
  { id: 102, balance: 2000 },
  { id: 103, balance: 3000 }
];

const totalBalance = accounts.reduce((acc, account) => acc + account.balance, 0);
console.log("Total Balance:", totalBalance); // 6000


// --------------------------------------
// Mini Practice Task
// --------------------------------------
// 1. Create an array of products with {id, name, price}.
// 2. Use map to get only product names.
// 3. Use filter to get products with price > 1000.
// 4. Use reduce to calculate total price.
// 5. Use find to get the first product with price < 500.
