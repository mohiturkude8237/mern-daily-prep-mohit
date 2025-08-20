// Day 6 - Objects in JavaScript

// 1. Creating a simple object
const user = {
  name: "Mohit",
  age: 25,
  isDeveloper: true
};

console.log("User object:", user);

// 2. Accessing properties
console.log("Name:", user.name); // Dot notation
console.log("Age:", user["age"]); // Bracket notation

// 3. Updating properties
user.age = 26;
console.log("Updated Age:", user.age);

// 4. Adding new properties
user.city = "Bhandara";
console.log("After adding city:", user);

// 5. Deleting a property
delete user.isDeveloper;
console.log("After deleting isDeveloper:", user);

// 6. Nested objects
const student = {
  id: 1,
  name: "Chetan",
  subjects: {
    math: 85,
    physics: 90,
    electronics: 80
  }
};

console.log("Student physics marks:", student.subjects.physics);

// 7. Object inside array
const users = [
  { id: 1, name: "Mohit" },
  { id: 2, name: "Chetan" }
];

console.log("First user:", users[0].name);

// 8. Object methods
const car = {
  brand: "Toyota",
  model: "Fortuner",
  start: function () {
    console.log(this.brand + " " + this.model + " started...");
  }
};

car.start();

// 9. Built-in Object methods
console.log("Keys:", Object.keys(user));
console.log("Values:", Object.values(user));
console.log("Entries:", Object.entries(user));
