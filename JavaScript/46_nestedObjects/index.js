// nested objects = objects nested of another objects.
//                  allws you to represent more complex data structure child object is enclosed by a parent object
//
//                  person{address{},contactInfo{}}
//                  shoppingCart{keyboard{},mouse{},monitor

const person = {
    fullName: "Spongebob Squarepants",
    age:30,
    isStudent:true,
    hoobies:["karate","jellyfishing","cooking"],
    address:{
        street: "123 Conch St.",
        city: "Bikini Bottom",
        country: "Int. water",
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.hoobies[1]);
console.log(person.address.street);

for(const property in person.address){
    console.log(person.address[property])
}

console.log("________________ Example 2 __________________");

class Address{
    constructor(street,city,country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

class Person{
    constructor(name,age,...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address)
    }
}

const person1 = new Person("Spongebob",30,
    "124 Conch st.",
    "Bikini Bottom",
    "Int. Waters",);

console.log(person1.name)
console.log(person1.age)
console.log(person1.address)
console.log(person1.address.city)

const person2 = new Person("Patrick",37,
    "128 Conch st.",
    "Bikini Bottom",
    "Int. Waters",);

const person3 = new Person("Squidward",45,
    "126 Conch st.",
    "Bikini Bottom",
    "Int. Waters",);



