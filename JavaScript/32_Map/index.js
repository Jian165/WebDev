// .map() = accepts a callback and applies that function 
//          to each element fo an array, then return a new array

const numbers = [1,2,3,4,5];
const squares = numbers.map(square);

console.log(numbers)
console.log(squares)
console.log(cube)

function square(element){
    return Math.pow(element,2)
}

function cube(element){
    return Math.pow(element,3)
}

console.log("________________________________________")

const students = ["Spongebob","Patrick","Squidward","Sandy"];
const studentUpper = students.map(upperCase)
const studentLower = students.map(lowerCase)

console.log(students)
console.log(studentUpper)
console.log(studentLower)

function upperCase(element){
    return element.toUpperCase(element)
}

function lowerCase(element){
    return element.toLowerCase(element)
}

console.log("________________________________________")

const dates = ["2023-1-10","2025-2-20","2026-3-30"]
const formattedDates =  dates.map(formatDates)
console.log(formattedDates)

function formatDates(elements){
    const parts = elements.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`
}

