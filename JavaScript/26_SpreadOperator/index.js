// spread operatr =  ... allows an interrable suhch as an
//                  array or a string to be expanded into
//                  sspearate element (unpacks the element)

let number = [1,2,3,4,5];

let maximum  =  Math.max(...number);
let minimum  =  Math.min(...number);
console.log(maximum);
console.log(minimum);

let username = "Jhon Mark";
let letters =  [...username].join("-");

console.log(letters);

let fruits = ["apple","orange","banana"];
let vegitables = ["apple","orange","banana"];
let food = [...fruits, ...vegitables,"eggs","milk"];
console.log(food)

