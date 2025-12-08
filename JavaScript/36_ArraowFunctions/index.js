// arrow functions =  a concise way to write function expressions
//                      good for single functions that you only use once
//                      (paramters) => some code

const hello = (name) => console.log(`Hello ${name}`);
hello("Jhon Mark");

console.log("____________________________________");

const helloName = (name,age) => {
    console.log(`Hello ${name}`);
    console.log(`you are ${age} years old`);
};

helloName("Jhon Mark",24);

console.log("____________________________________");
setTimeout(() => console.log("Hello"),3000)

console.log("____________________________________");
const numbers = [1,2,3,4,5,6]

const squares = numbers.map((element) => Math.pow(element,2));
console.log(squares)

const cube = numbers.map((element) => Math.pow(element,3));
console.log(cube)

const evenNums = numbers.filter((element) => element % 2 === 0);
console.log(evenNums)

const oddNums = numbers.filter((element) => element % 2 !== 0);
console.log(oddNums)

const total = numbers.reduce((accumulator,element) => accumulator+element);
console.log(total)


