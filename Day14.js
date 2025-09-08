// ================================
// 📘 Day 14: Advanced Object Methods
// ================================

// 1️⃣ Object.keys() → returns array of keys
const user = { id: 1, name: "Mohit", age: 27 };
console.log(Object.keys(user)); // [ 'id', 'name', 'age' ]


// 2️⃣ Object.values() → returns array of values
console.log(Object.values(user)); // [ 1, 'Mohit', 27 ]


// 3️⃣ Object.entries() → returns array of [key, value]
console.log(Object.entries(user));
// [ [ 'id', 1 ], [ 'name', 'Mohit' ], [ 'age', 27 ] ]


// 4️⃣ Object.assign() → copy or merge objects
const defaults = { role: "user", active: true };
const newUser = Object.assign({}, user, defaults);
console.log(newUser); 
// { id: 1, name: 'Mohit', age: 27, role: 'user', active: true }


// 5️⃣ Spread vs Assign (both used for merging)
const merged = { ...user, ...defaults };
console.log("Spread Merge:", merged);


// 6️⃣ Object.freeze() → makes object immutable (no changes allowed)
const freezedUser = Object.freeze({ id: 2, name: "Locked" });
freezedUser.name = "Changed"; // ❌ ignored
console.log("Freezed:", freezedUser);


// 7️⃣ Object.seal() → allows updating values, but no adding/removing
const sealedUser = Object.seal({ id: 3, name: "Sealed" });
sealedUser.name = "Updated"; // ✅ allowed
sealedUser.email = "test@test.com"; // ❌ not allowed
console.log("Sealed:", sealedUser);


// ================================
// 🔥 Mini Backend-Style Project: User Authentication
// ================================

let users = [];

// Register function
function registerUser(username, email, password) {
  const user = {
    id: users.length + 1,
    username,
    email,
    password, // (in real backend → never store plain password)
    createdAt: new Date(),
  };
  users.push(user);
  console.log("✅ User Registered:", username);
}

// Login function
function loginUser(username, password) {
  const found = users.find(u => u.username === username && u.password === password);
  if (found) {
    console.log("✅ Login Successful for:", username);
  } else {
    console.log("❌ Invalid username or password");
  }
}

// Usage
registerUser("mohit", "mohit@example.com", "12345");
registerUser("chetan", "chetan@example.com", "56789");

loginUser("mohit", "12345"); // ✅
loginUser("mohit", "wrong"); // ❌

console.log("All Users:", users);



// Day14.js
// Topic: Object Methods, "this", and Destructuring
// Important for Node.js backend when handling user data, DB records, etc.

// -------------------
// 1. Adding Methods to Objects
// -------------------
const user = {
  name: "Mohit",
  age: 27,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

user.greet(); // Hello, my name is Mohit

// -------------------
// 2. Shorthand Method Syntax
// -------------------
const account = {
  balance: 5000,
  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ₹${amount}. New balance: ₹${this.balance}`);
  },
};

account.deposit(2000); // Deposited ₹2000. New balance: ₹7000

// -------------------
// 3. The "this" keyword
// -------------------
const car = {
  brand: "Tata",
  model: "Nexon",
  showDetails() {
    console.log(`${this.brand} ${this.model}`);
  },
};

car.showDetails(); // Tata Nexon

// ❌ Wrong "this" (Arrow Function)
const wrongCar = {
  brand: "Mahindra",
  model: "XUV700",
  show: () => {
    console.log(this.brand, this.model); // undefined
  },
};

wrongCar.show(); // undefined undefined

// -------------------
// 4. Object Destructuring
// -------------------
const book = {
  title: "JavaScript Basics",
  author: "John Doe",
  year: 2025,
};

// Extract properties
const { title, year } = book;
console.log(title); // JavaScript Basics
console.log(year);  // 2025

// Rename while destructuring
const { author: writer } = book;
console.log(writer); // John Doe

// -------------------
// 5. Nested Destructuring
// -------------------
const employee = {
  id: 101,
  personal: {
    name: "Ravi",
    age: 30,
  },
  job: {
    role: "Backend Developer",
    location: "Nagpur",
  },
};

const {
  personal: { name, age },
  job: { role },
} = employee;

console.log(name); // Ravi
console.log(age);  // 30
console.log(role); // Backend Developer

// -------------------
// ✅ Practice Tasks
// -------------------
// 1. Create an object "student" with properties (name, roll, marks) and a method "getResult()" that prints pass/fail.
// 2. Create an object "bankAccount" with deposit() and withdraw() methods using "this".
// 3. Given a nested object (like employee), use destructuring to extract values into separate variables.
