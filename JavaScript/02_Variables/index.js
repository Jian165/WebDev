// vairable = container that stores a value.
//            Behaves as if it were the value it contains

// 1.declaration let x;
// 2.assignment x=100;

let x;
x = 100;

console.log(x);

let age = 25;
console.log(age);

let price = 10.99;
console.log(price);

let gpa = 2.1;
console.log(gpa);

let firstName = "Jhon Mark";
console.log(firstName);
let favoriteFood = "Crabs";
let email = "duranjhonmark2@gmail.com";

console.log(`You are ${age} yeas old`);
console.log(`The price is $${age}`);
console.log(`Your gpa is:${gpa}`);
console.log(`Your name is ${firstName}`);
console.log(`You Like ${favoriteFood}`);
console.log(`Your Email is ${email}`);

console.log(``)

console.log(typeof price)
console.log(typeof age)
console.log(typeof gpa)

console.log(``)

let online = false
console.log(typeof online);

let forSale = true
let isStudent = true

console.log(`Bro is online ${online}`);
console.log(`Enrolled: ${isStudent}`);

let fullName = "Jhon Mark";
let studentAge = 23;
let student = true;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} yeals old`;
document.getElementById("p3").textContent = ` Enroled: ${student}`;
