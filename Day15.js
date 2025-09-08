// Day 15 - Advanced Objects in JavaScript
// ----------------------------------------
// Topics: 
// 1. Object Destructuring
// 2. Spread & Rest with Objects
// 3. Object Methods (keys, values, entries, assign, freeze, seal)

// 1. Object Destructuring
const user = {
  id: 101,
  name: "Mohit",
  role: "Backend Developer",
  skills: ["JS", "Node.js", "MongoDB"]
};

// Old way
console.log(user.name);
console.log(user.role);

// New way (Destructuring)
const { name, role, skills } = user;
console.log(name);  // Mohit
console.log(role);  // Backend Developer
console.log(skills); // ["JS", "Node.js", "MongoDB"]

// Rename while destructuring
const { name: username } = user;
console.log(username); // Mohit


// 2. Spread & Rest with Objects
const userDetails = { ...user, country: "India", experience: "1 Year" };
console.log(userDetails);

const { id, ...restDetails } = user;
console.log(id);         // 101
console.log(restDetails); // Everything except id


// 3. Object Methods
const product = {
  id: 1,
  name: "Laptop",
  price: 50000
};

// Object.keys -> array of keys
console.log(Object.keys(product)); // ['id', 'name', 'price']

// Object.values -> array of values
console.log(Object.values(product)); // [1, 'Laptop', 50000]

// Object.entries -> array of [key, value] pairs
console.log(Object.entries(product));
// [['id',1], ['name','Laptop'], ['price',50000]]

// Object.assign -> clone or merge
const productCopy = Object.assign({}, product, { brand: "Dell" });
console.log(productCopy);

// Object.freeze -> object cannot be modified
Object.freeze(product);
product.price = 60000; // will not change
console.log(product.price); // 50000

// Object.seal -> properties can't be added/removed, but existing can be modified
const sealedObj = { x: 10, y: 20 };
Object.seal(sealedObj);
sealedObj.x = 30; // allowed
sealedObj.z = 40; // not allowed
console.log(sealedObj);


// ----------------------------------------
// Mini Practice Task (Very Important!)
// ----------------------------------------

// 1. Create an object called "employee" with properties: id, name, position, salary.
// 2. Use destructuring to get the name and position from it.
// 3. Use spread operator to create a copy of employee and add "department".
// 4. Use Object.keys() to list all properties.
// 5. Freeze the employee object and try to change salary (observe what happens).
