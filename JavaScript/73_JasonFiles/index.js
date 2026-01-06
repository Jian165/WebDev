// JSON = (JavaScript Object Notation) data-interchange format
//          use for exchainging data between a server adn a web applicaion
//          JSON files (Key:value) OR [value1, value2, value3]
//
//          JSON.stringify() = converts a JS object to a JSON string.
//          JSON.pars() = converts a JSON string to a JS object

const names = ["spongebob","patrick","squidward","sandy"]
const jsonNamesString = JSON.stringify(names)
console.log(jsonNamesString)

const person = {
    "name":"Spongebob",
    "age":30,
    "isEmployed":true,
    "hobbies":["Jellyfishing","Karate","Cooking"]
}
const jsonPersonString = JSON.stringify(person)
console.log(jsonPersonString)

const people = [
    {
        "name":"Spongebob",
        "age":30,
        "isEmployed":true,
    },
    {
        "name":"Patrick",
        "age":34,
        "isEmployed":false,
    },
    {
        "name":"Squidward",
        "age":50,
        "isEmployed":true,
    },
    {
        "name":"Sandy",
        "age":27,
        "isEmployed":false,
    }
]
const jsonPeopleString = JSON.stringify(people)
console.log(jsonPeopleString)

console.log("____________________ Example Parse __________________")


const Person = `{"name":"Spongebob","age":30,"isEmployed":true,"hobbies":["Jellyfishing","Karate","Cooking"]}`

const Names = `["spongebob","patrick","squidward","sandy"]`;

const People = `[{"name":"Spongebob","age":30,"isEmployed":true},
{"name":"Patrick","age":34,"isEmployed":false},
{"name":"Squidward","age":50,"isEmployed":true},
{"name":"Sandy","age":27,"isEmployed":false}]`

const namesData = JSON.parse(Names);
console.log(namesData);

const personData = JSON.parse(Person);
console.log(personData);

const peopleData = JSON.parse(People);
console.log(peopleData);

console.log("____________________ Example fetch __________________")
fetch("person.json")
    .then(response => response.json())
    .then(value => console.log(value))

fetch("names.json")
    .then(response => response.json())
    .then(value => console.log(value))


fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value)))

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.name)))
    .catch(error => console.log(error))

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.age)))
    .catch(error => console.log(error))

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.isEmployed)))
    .catch(error => console.log(error))
