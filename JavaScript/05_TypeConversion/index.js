// type conversion = changes the datatype of a value to another
//                  (string, number, booleans)

let age = window.prompt("How old are you?");
age=Number(age);
age +=1

console.log(age,typeof age)
console.log("--------------------------")

let x="pizza"
let y="pizza"
let z="pizza"

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x,typeof x);
console.log(y,typeof y);
console.log(z,typeof z);
