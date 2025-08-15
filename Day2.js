// Day 2: Conditional Statements & Loops

// 1. If-Else Statement
let age = 20;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// 2. Else If Ladder
let marks = 75;

if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 75) {
    console.log("Grade: A");
} else if (marks >= 50) {
    console.log("Grade: B");
} else {
    console.log("Grade: Fail");
}

// 3. Switch Statement
let day = 3;

switch (day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    default: console.log("Weekend");
}

// 4. For Loop
for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}

// 5. While Loop
let count = 1;
while (count <= 3) {
    console.log("While count:", count);
    count++;
}

// 6. Do-While Loop
let num = 1;
do {
    console.log("Do-while number:", num);
    num++;
} while (num <= 2);

// Mini Exercises
// 1. Write a program that prints "Even" if a number is even, otherwise "Odd"
let number = 7;
if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// 2. Print numbers from 10 to 1 using a loop
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
