
let userName ="Jian165"
let userName2 =" Jian165    "
console.log(userName.charAt(2));

console.log(userName.indexOf("n"));
console.log(userName.lastIndexOf("n"));

console.log(userName.length);
console.log(userName.trim());
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());

console.log(userName.repeat(3));

let result =  userName2.startsWith(" ");
console.log(result);

if(result){
    console.log("Your username can't begin with ' '");
}
else{
    console.log(userName);
}

let result2 =  userName2.endsWith(" ");
console.log(result2);
if(result2){
    console.log("Your username can't ends with ' '");
}
else{
    console.log(userName);
}

let firstName = "Jhon Mark"
let result3 =  firstName.includes(" ");
console.log(result3);
if(result3){
    console.log("Your username can't include ' '");
}
else{
    console.log(userName);
}

let phoneNumber1 = "123-456-7890"
phoneNumber1 = phoneNumber1.replaceAll("-","/");
console.log(phoneNumber1);

let phoneNumber2 = "123-456-7890"
phoneNumber2 = phoneNumber2.padStart(20,"*");
console.log(phoneNumber2);

let phoneNumber3 = "123-456-7890"
phoneNumber3 = phoneNumber3.padEnd(20,"*");
console.log(phoneNumber3);

