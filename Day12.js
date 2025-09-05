// -----------------------------
// Day 12: Objects Deep Dive
// -----------------------------

// 1. Nested Objects
const user = {
  id: 101,
  name: "Mohit",
  address: {
    city: "Bhandara",
    state: "Maharashtra",
    country: "India",
  },
  skills: ["JavaScript", "Node.js", "MongoDB"],
};

console.log("User Name:", user.name);
console.log("City:", user.address.city);
console.log("First Skill:", user.skills[0]);


// 2. Adding Methods to Objects
const student = {
  name: "Chetan",
  marks: 90,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

student.greet(); // Hello, my name is Chetan


// 3. 'this' Keyword
const person = {
  name: "John",
  age: 25,
  getAge: function () {
    return this.age;  // 'this' refers to current object
  },
};

console.log("Age:", person.getAge()); // 25


// 4. Object.keys(), Object.values(), Object.entries()
const product = {
  id: 201,
  name: "Laptop",
  price: 50000,
};

console.log(Object.keys(product));   // ['id', 'name', 'price']
console.log(Object.values(product)); // [201, 'Laptop', 50000]
console.log(Object.entries(product)); // [['id',201], ['name','Laptop'], ['price',50000]]


// 5. Looping over Objects
for (let key in product) {
  console.log(key + ":", product[key]);
}


// 6. Practice Mini Backend-Style Example
// User Registration System using Objects

let users = [];

function registerUser(username, email) {
  const newUser = {
    id: users.length + 1,
    username,
    email,
    createdAt: new Date(),
    greet: function () {
      console.log(`Welcome, ${this.username}!`);
    },
  };

  users.push(newUser);
  return newUser;
}

// Register 2 users
let u1 = registerUser("Mohit", "mohit@example.com");
let u2 = registerUser("Chetan", "chetan@example.com");

console.log(users);
u1.greet();
u2.greet();
