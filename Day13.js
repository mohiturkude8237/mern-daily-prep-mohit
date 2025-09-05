// Day13.js
// =============================
// Objects Part 3: Modern Object Features
// =============================

// 1. Object Destructuring
// -----------------------------
const user = {
    id: 101,
    name: "Mohit",
    age: 27,
    location: "Bhandara",
    skills: ["JavaScript", "Node.js", "MongoDB"]
};

// Old way
console.log(user.name);
console.log(user.age);

// Modern way: Destructuring
const { name, age } = user;
console.log("Destructured:", name, age);

// You can rename variables
const { location: city } = user;
console.log("Renamed:", city);

// You can set default values
const { email = "Not Provided" } = user;
console.log("Default Value:", email);


// 2. Nested Destructuring
// -----------------------------
const employee = {
    empId: 2001,
    empName: "Rajesh",
    department: {
        deptId: "IT01",
        deptName: "Backend"
    }
};

const { department: { deptName } } = employee;
console.log("Nested Destructuring:", deptName);


// 3. Spread Operator with Objects
// -----------------------------
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Merge objects
const merged = { ...obj1, ...obj2 };
console.log("Merged Object:", merged);

// Copy object
const copy = { ...user };
copy.name = "Changed Mohit";
console.log("Original User:", user.name);
console.log("Copied User:", copy.name);


// 4. Rest Operator in Objects
// -----------------------------
const person = {
    firstName: "Ravi",
    lastName: "Kumar",
    age: 30,
    city: "Nagpur"
};

const { firstName, ...restDetails } = person;
console.log("First Name:", firstName);
console.log("Other Details:", restDetails);


// 5. Practical Example: User Registration (Backend style)
// -----------------------------
function registerUser({ username, email, password }) {
    return {
        id: Date.now(),
        username,
        email,
        // never store plain passwords in real backend (will learn hashing later!)
        password,
        createdAt: new Date()
    };
}

const newUser = registerUser({
    username: "mohit123",
    email: "mohit@example.com",
    password: "secure123"
});

console.log("Registered User:", newUser);

