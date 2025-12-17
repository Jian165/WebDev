// destructuring = extract values from arrays and objects,
//                  then assign them to variables in a covinient way
//                  [] = to perform array destructuring
//                  {} = to perform object destructuring

console.log("------------------ Example 1 ------------")
// Swap the value of two variables

let a = 1;
let b = 2;

[a,b] = [b,a];

console.log(a);
console.log(b);

console.log("------------------ Example 2 ------------")
// Swap 2 elements in an array

const colors = ["red","green","blue","black","white"];
[colors[0],colors[4]] = [colors[4],colors[0]];
console.log(colors)

console.log("------------------ Example 3 ------------")
//aassin array elements to variables 

const colors2 = ["red","green","blue","black","white"];
const [firstColor,secondColor,thirdColor,...extraColors] = colors2

console.log(firstColor)
console.log(secondColor)
console.log(thirdColor)
console.log(extraColors)

console.log("------------------ Example 4 ------------")
// extranct values form object

const person1 = {
    firstName: "Spongebob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry Cook"
}

const {firstName,lastName,age,job="Unemplyed"} = person1
console.log(firstName,lastName,age,job)

const person2 = {
    firstName2: "Patrick",
    lastName2: "Star",
    age2: 34,
}

const {firstName2,lastName2,age2,job2="Unemplyed"} = person2
console.log(firstName2,lastName2,age2,job2)

console.log("------------------ Example 5 ------------")
// destructuring in function parameters
//
const person3 = {
    firstName: "Spongebob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry Cook"
}

const person4 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}

function displayPerson({firstName,lastName,age,job="Unemployed"}){
    console.log(`name: ${firstName} ${lastName}`)
    console.log(`age: ${age}`)
    console.log(`job: ${job}`)
    console.log()
}

displayPerson(person3)
displayPerson(person4)




