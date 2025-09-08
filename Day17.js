// Day 17 - Strings & String Methods
// ---------------------------------
// In backend development, strings are used for:
// - Handling user input
// - Tokens (JWT)
// - Query parsing
// - File paths
// - Logs & messages

// 1. Creating Strings
let str1 = "Hello";
let str2 = 'World';
let str3 = `Welcome, ${str1} ${str2}!`; // Template literals
console.log(str3);

// 2. String Length
console.log("Length:", str1.length);

// 3. Accessing characters
console.log("First char:", str1[0]);
console.log("Last char:", str1[str1.length - 1]);

// 4. Common Methods
let msg = "   NodeJS Backend Developer   ";

console.log(msg.toUpperCase()); // "   NODEJS BACKEND DEVELOPER   "
console.log(msg.toLowerCase()); // "   nodejs backend developer   "

console.log(msg.trim()); // Removes extra spaces
console.log(msg.trimStart()); // Removes left spaces
console.log(msg.trimEnd());   // Removes right spaces

console.log(msg.includes("Backend")); // true
console.log(msg.startsWith("   Node")); // true
console.log(msg.endsWith("Developer   ")); // true

console.log(msg.indexOf("Backend")); // position of "Backend"
console.log(msg.replace("NodeJS", "ExpressJS")); 

// 5. Slice & Substring
let text = "JavaScript";
console.log(text.slice(0, 4));  // "Java"
console.log(text.substring(4, 10)); // "Script"

// 6. Split & Join
let csv = "apple,banana,grapes";
let fruits = csv.split(",");
console.log(fruits); // ["apple","banana","grapes"]

console.log(fruits.join(" | ")); // "apple | banana | grapes"

// 7. Repeat
console.log("Hi ".repeat(3)); // Hi Hi Hi

// ---------------------------------------
// Backend-Style Examples
// ---------------------------------------

// Example 1: Check if password is strong
function checkPasswordStrength(password) {
  if (password.length < 8) return "Weak Password";
  if (!password.includes("@")) return "Add special char (@)";
  return "Strong Password";
}
console.log(checkPasswordStrength("test123"));     // Weak Password
console.log(checkPasswordStrength("mohit@123"));   // Strong Password

// Example 2: Parse a token (JWT-like string)
let token = "abc.def.ghi";
let parts = token.split(".");
console.log("Header:", parts[0]);
console.log("Payload:", parts[1]);
console.log("Signature:", parts[2]);

// Example 3: Sanitize user input (trim + lowercase)
function sanitizeInput(input) {
  return input.trim().toLowerCase();
}
console.log(sanitizeInput("   MOHIT ")); // "mohit"


// ---------------------------------------
// Mini Practice Task
// ---------------------------------------
// 1. Take a string "Backend Developer Mohit Urkude".
// 2. Use split() to get words.
// 3. Use join() to convert words into "Backend-Developer-Mohit-Urkude".
// 4. Write a function to check if a given email ends with "@gmail.com".
// 5. Write a function to count how many times "a" appears in a string.
