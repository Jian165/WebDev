// object =  A collection of related properties and/or methods
//          can represent real world object (people,products,place)
//         obejct  = {key:value,function()} 


const person = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age:30,
    isEmployed:true,
    sayHello: function() {console.log("Hi I am Spongebob")},
    eat: function() {console.log("I am eating Krabby Patty")}
}

console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.isEmployed)
person.sayHello();
person.eat();

console.log()

const person2 = {
    firstName: "Patric",
    lastName: "Star",
    age:42,
    isEmployed:false,
    sayHello:() => {console.log("Hey, I'm Patric... ")},
    eat: () => {console.log("I am eating roast beef, chicken, and pizza")}
}

console.log(person2.firstName)
console.log(person2.lastName)
console.log(person2.age)
console.log(person2.isEmployed)
person2.sayHello();
person2.eat();

console.log()

