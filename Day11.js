// 📘 Day 11: Objects (Part 2 - Methods, 'this', Iteration)

// 1️⃣ Adding Methods to Objects
const user = {
    name: "Mohit",
    age: 27,
    greet: function () {
        console.log("Hello, " + this.name); // 'this' refers to current object
    }
};

user.greet(); // Hello, Mohit


// 2️⃣ Shorthand Method Syntax (Modern JS)
const user2 = {
    name: "Rahul",
    age: 25,
    greet() {
        console.log(`Hi, I am ${this.name}`);
    }
};

user2.greet(); // Hi, I am Rahul


// 3️⃣ The 'this' keyword inside methods
const car = {
    brand: "Tesla",
    model: "Model S",
    start: function () {
        console.log(`${this.brand} ${this.model} is starting...`);
    }
};

car.start(); // Tesla Model S is starting...


// 4️⃣ Iterating Over Object Keys & Values
const student = {
    name: "Chetan",
    age: 24,
    course: "MCA"
};

// 🔹 for...in loop (keys)
for (let key in student) {
    console.log(key, ":", student[key]);
}

// 🔹 Object.keys() → array of keys
console.log(Object.keys(student)); // [ 'name', 'age', 'course' ]

// 🔹 Object.values() → array of values
console.log(Object.values(student)); // [ 'Chetan', 24, 'MCA' ]

// 🔹 Object.entries() → array of [key, value]
console.log(Object.entries(student));
// [ [ 'name', 'Chetan' ], [ 'age', 24 ], [ 'course', 'MCA' ] ]


// 5️⃣ Nested Objects
const company = {
    name: "TechSoft",
    employees: {
        emp1: { name: "Amit", role: "Developer" },
        emp2: { name: "Sara", role: "Designer" }
    }
};

console.log(company.employees.emp1.name); // Amit


// 6️⃣ Object Methods - assign, freeze, seal
const obj1 = { a: 1 };
const obj2 = { b: 2 };

// 🔹 Merge objects
const merged = Object.assign({}, obj1, obj2);
console.log(merged); // { a: 1, b: 2 }

// 🔹 Freeze (no changes allowed)
const freezed = Object.freeze({ id: 101, name: "Locked" });
freezed.name = "Changed"; // ❌ No effect
console.log(freezed);

// 🔹 Seal (can update existing keys but can’t add/remove)
const sealed = Object.seal({ id: 201, status: "Active" });
sealed.status = "Inactive"; // ✅ allowed
sealed.newKey = "Not allowed"; // ❌ ignored
console.log(sealed);


// 📝 Practice Task:
// 1. Create an object `book` with title, author, and a method `summary()`
//    → should print "Book: {title} by {author}"
// 2. Create an object `bankAccount` with balance, deposit(amount), withdraw(amount).
//    - deposit() increases balance
//    - withdraw() decreases balance (but not below 0)
//    - test it with some deposits & withdrawals
