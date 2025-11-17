// array = a variable like structure that can hold
// more than 1 values

let fruits =  ["apple","orange","banana","coconut"];

// fruits.push("coconut"); -- add at the end
// fruits.pop(); -- remove 1 at the end
// fruits.unshift("mango"); -- add at the start
// fruits.shift(); -- remove at the start

console.log(fruits[0]);
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])

let numberOfFruits =  fruits.length;
console.log(numberOfFruits);

let index = fruits.indexOf("orange")
console.log(index);

fruits.sort().reverse();

for( let i=fruits.length-1; i >=0; i--)
{
    console.log(fruits[i]);
}

console.log("________________________________");

for(let fruit of fruits)
{
    console.log(fruit)
}

