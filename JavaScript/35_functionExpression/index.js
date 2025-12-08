// function declaration =   define a reusable block of code that performs
//                          a specific task

function hello(){
    console.log("Hello")
}
hello()

setTimeout(hello,500)

// function expression =    a way to define functions as a 
//                          values or variables


const hello2 = function(){
    console.log("Hello")
}

hello2();

setTimeout(function(){
    console.log("Hello")
}
    ,500)



console.log("________________________________________")
const numbers = [1,2,3,4,5,6];

const squares = numbers.map(function(element){
    return Math.pow(element,2)
})

console.log(squares)

const cubes = numbers.map(function(element){
    return Math.pow(element,3)
})

console.log(cubes)

const evenNumbers = numbers.filter(function(element){
    return element % 2 ===0
})

console.log(evenNumbers)

const oddNumbers = numbers.filter(function(element){
    return element % 2 !==0
})

console.log(oddNumbers)

const total = numbers.reduce(function(accumulator,element){
    return accumulator + element
})
console.log(total)





