// Day 7 - More Objects Practice & Interview Questions

// 1. Checking if a property exists
const person = { name: "Mohit", age: 25 };
console.log("Has age?", "age" in person); // true
console.log("Has city?", "city" in person); // false

// 2. Looping through object properties
for (let key in person) {
  console.log(key, ":", person[key]);
}

// 3. Object.freeze() - makes object immutable
const car = { brand: "Toyota", model: "Fortuner" };
Object.freeze(car);
car.model = "Innova"; // Won't change
console.log("Frozen car:", car);

// 4. Object.seal() - allows update but not add/remove
const bike = { brand: "Yamaha", model: "R15" };
Object.seal(bike);
bike.model = "MT15"; // allowed
bike.year = 2024; // not added
delete bike.brand; // not deleted
console.log("Sealed bike:", bike);

// 5. Object.assign() - copy objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = Object.assign({}, obj1, obj2);
console.log("Merged object:", merged);

// 6. Spread operator with objects
const spreadMerged = { ...obj1, ...obj2, e: 5 };
console.log("Spread merged:", spreadMerged);

// 7. Destructuring objects
const student = { id: 101, name: "Chetan", course: "B.Sc" };
const { id, name, course } = student;
console.log("Destructured:", id, name, course);

// 8. Nested destructuring
const employee = {
  empId: 201,
  empName: "Mohit",
  address: {
    city: "Bhandara",
    state: "Maharashtra"
  }
};

const {
  address: { city, state }
} = employee;
console.log("City:", city, "State:", state);

// 9. Interview question: shallow vs deep copy
const original = { x: 1, y: { z: 2 } };

// Shallow copy
const shallowCopy = { ...original };
shallowCopy.y.z = 99; 
console.log("Original after shallow copy change:", original);

// Deep copy (using JSON)
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.y.z = 100;
console.log("Original after deep copy change:", original);
console.log("Deep copy:", deepCopy);
