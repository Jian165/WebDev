// string slicing = creating a substring
//                  from a portion of another string 
//                  string.slice(start,end);

const fullName = "Jhon Mark"

let firstName = fullName.slice(0,3);
let secondName = fullName.slice(5,9);

console.log(firstName);
console.log(secondName);

let firstChar = fullName.slice(0,1);
let lastChar = fullName.slice(-1);

console.log(firstChar);
console.log(lastChar);

let FirstName = fullName.slice(0,fullName.indexOf(" "));
let LastName = fullName.slice(fullName.indexOf(" ")+1);

console.log(FirstName);
console.log(LastName);

const email = "jhonmarkduran@gmail.com"
let username = email.slice(0,email.indexOf("@"));
console.log(username);
