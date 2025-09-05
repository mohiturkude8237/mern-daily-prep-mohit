// ==========================
// 📌 Day 10: Objects + this
// ==========================

// 1️⃣ Object Basics
// Objects = collection of key-value pairs
const user = {
  name: "Mohit",
  age: 23,
  city: "Bhandara",
};

console.log(user.name);   // Dot notation → "Mohit"
console.log(user["age"]); // Bracket notation → 23

// 2️⃣ Adding / Updating / Deleting properties
user.email = "mohit@example.com";  // Add
user.age = 24;                     // Update
delete user.city;                  // Delete

console.log(user);

// 3️⃣ Methods (Functions inside objects)
const student = {
  name: "Chetan",
  marks: 90,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
student.greet(); // "Hello, my name is Chetan"

// 4️⃣ The `this` keyword
// `this` refers to the object calling the method
const person = {
  name: "Alice",
  age: 25,
  showInfo() {
    console.log(this.name + " is " + this.age + " years old.");
  },
};
person.showInfo(); // "Alice is 25 years old."

// ❌ Common mistake
const broken = {
  name: "Bob",
  sayHi: () => {
    console.log("Hi " + this.name); // Arrow fn ❌ doesn't bind its own 'this'
  },
};
broken.sayHi(); // "Hi undefined"

// ✅ Fix: Use normal function
const fixed = {
  name: "Bob",
  sayHi() {
    console.log("Hi " + this.name);
  },
};
fixed.sayHi(); // "Hi Bob"

// 5️⃣ Nested Objects
const company = {
  name: "TechCorp",
  address: {
    city: "Nagpur",
    pincode: 440001,
  },
};
console.log(company.address.city); // Nagpur

// 6️⃣ Looping through objects
for (let key in user) {
  console.log(key, ":", user[key]);
}

// 7️⃣ Object Methods
console.log(Object.keys(user));   // ["name", "age", "email"]
console.log(Object.values(user)); // ["Mohit", 24, "mohit@example.com"]
console.log(Object.entries(user));// [["name","Mohit"],["age",24],["email","mohit@example.com"]]

// ==========================
// 🔥 Mini Backend-Style Practice
// ==========================

// Task 1: Create an object "product" with properties: id, name, price, stock
// Add a method to reduce stock when someone "buys" the product

const product = {
  id: 101,
  name: "Laptop",
  price: 50000,
  stock: 10,
  buy: function (quantity) {
    if (this.stock >= quantity) {
      this.stock -= quantity;
      console.log(`${quantity} ${this.name}(s) purchased. Remaining stock: ${this.stock}`);
    } else {
      console.log("Not enough stock!");
    }
  },
};

product.buy(3); // Laptop stock reduces to 7
product.buy(5); // stock reduces to 2
product.buy(3); // "Not enough stock!"

// Task 2: Create a "user" object with properties: id, username, password
// Add a method "login" that checks username & password
// (simulate backend login system)

const authUser = {
  id: 1,
  username: "admin",
  password: "12345",
  login: function (u, p) {
    if (u === this.username && p === this.password) {
      console.log("✅ Login successful!");
    } else {
      console.log("❌ Invalid credentials");
    }
  },
};

authUser.login("admin", "12345"); // ✅
authUser.login("admin", "wrong"); // ❌
