// Day 9 – Functions Advanced (Backend-Oriented)

// 1. Function Expression
const greet = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet("Mohit")); 

// 2. Arrow Functions (modern JS - used a lot in Node.js)
const add = (a, b) => a + b;
console.log("Sum:", add(5, 10));

// 3. Default Parameters
function multiply(a, b = 2) {
    return a * b;
}
console.log("Multiply with default:", multiply(5)); // 5*2=10
console.log("Multiply:", multiply(5, 3)); // 15

// 4. Rest Parameters (...args) → useful when unknown number of inputs
function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log("SumAll:", sumAll(1, 2, 3, 4, 5)); // 15

// 5. Callback Functions → function passed as argument
function processUserInput(name, callback) {
    console.log("Processing user:", name);
    callback(name);
}

processUserInput("Mohit", function(user) {
    console.log("Welcome,", user);
});

// 6. Higher Order Function (returns another function)
function makeMultiplier(multiplier) {
    return function(num) {
        return num * multiplier;
    };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log("Double 5:", double(5)); 
console.log("Triple 5:", triple(5)); 

// 7. Arrow Function + Callback (used in backend with arrays)
const users = ["Mohit", "Chetan", "Amit"];
users.forEach(user => console.log("User:", user));

// 8. Real backend-like Example (middleware style)
function authMiddleware(user, next) {
    if(user.isLoggedIn) {
        console.log("Access Granted:", user.name);
        next();
    } else {
        console.log("Access Denied!");
    }
}

authMiddleware({name: "Mohit", isLoggedIn: true}, () => {
    console.log("Fetching data from database...");
});



//Other Notes

function loginUser(username, password, callback) {
  console.log("Checking user in database...");

  setTimeout(() => {
    if (username === "admin" && password === "1234") {
      callback(null, { username: "admin", role: "superuser" });
    } else {
      callback("Invalid username or password", null);
    }
  }, 2000);
}

// Example usage
loginUser("admin", "1234", (err, user) => {
  if (err) {
    console.log("Login failed:", err);
  } else {
    console.log("Login successful:", user);
  }
});
