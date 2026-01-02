// eleemnt selectors = Methods use to target and manipulate HTML element
//                      they allow you to select one or multiple HTML elements
//                      form the DOM (Document object model)
//
//  1. document.getElementById()        //ELEMENT OR NULL
//  2. document.getElementsClassName()  //HTML COLLECTION
//  3. document.getElementByTagName()   //HTML COLLECTION
//  4. document.querySelector()         //FIRST ELEMENT OR NULL
//  5. document.querySelectorAll()      //NODELIST

console.log("--------- Example 1 ---------")

const myHeading  = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow"
myHeading.style.textAlign = "center"

console.log("--------- Example 2 ---------")

const fruits =  document.getElementsByClassName("fruits")
console.log(fruits)

// fruits[0].style.backgroundColor = "yellow"

// for(let fruit of fruits){
//     fruit.style.backgroundColor = "yellow"
// }

Array.from(fruits).forEach(fruits => {
    fruits.style.backgroundColor = "yellow"
});

console.log("--------- Example 3 ---------")

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li")
 

// console.log(h4Elements)
// h4Elements[1].style.backgroundColor = "blue"

// for(let h4Element of h4Elements){
//     h4Element.style.backgroundColor = "lightblue"
// }
// 
// for(let liElement of liElements){
//     liElement.style.backgroundColor = "lightgreen"
// }


Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "lightgreen"
});

Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "lightblue"
});

console.log("--------- Example 4 ---------")

const element = document.querySelector("h3")
// const element = document.querySelector(".fruits")
element.style.backgroundColor = "orange"

console.log("--------- Example 5 ---------")
const fruits2 = document.querySelectorAll("li")

fruits2.forEach(food =>{
    food.style.fontWeight = "bold"
})
fruits2[0].style.backgroundColor = "gray"

