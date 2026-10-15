// Question 1: Variables and conditionals
let age = 20;

if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are not an adult");
}

// Question 2: Check email
let email = "";

if (email === "") {
    console.log("Please enter your email!");
} else {
    console.log("Email accepted");
}

// Question 3: For loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Question 4: While loop
let count = 1;

while (count <= 5) {
    console.log("Hello");
    count++;
}

// Question 5: Arrays
let names = ["Emmanuel", "John", "Peter", "David", "James"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// Question 6: Array index
let languages = ["HTML", "CSS", "JavaScript", "Python"];

console.log(languages[2]);

// Question 7: Objects
let student = {
    name: "Emmanuel James",
    score: 85
};

console.log(student.name);
console.log(student.score);

// Question 8: AND operator
let studentAge = 20;
let hasID = true;

if (studentAge >= 18 && hasID === true) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}

// Question 9: OR operator
let hasEmail = true;
let hasPhone = false;

if (hasEmail || hasPhone) {
    console.log("Contact information provided");
} else {
    console.log("No contact information provided");
}

// Question 10: Equality operators
console.log("1234" == 1234);
console.log("1234" === 1234);
