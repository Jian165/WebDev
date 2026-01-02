// DOM Navigation =  The Process of navigation through the structure
//                  of an HTML document using Javascript
//
//.firstElementChild
//.lastElementChild
//.nextElementSibling
//.previousElementSibling
//.parentElement
//.children

// --------------- .firstElementChild ------------
//
// const element = document.getElementById("furits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";
//

// const ulElements = document.querySelectorAll("ul")
// 
// ulElements.forEach(ulElements =>{
//     const firstChild = ulElements.firstElementChild;
//     firstChild.style.backgroundColor = "yellow";
// })


// --------------- .lastElementChild ------------

// const element = document.getElementById("fruits");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "yellow";
//

// const ulElement =  document.querySelectorAll("ul");
// ulElement.forEach(ulElement =>{
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "yellow";
// });


// --------------- .nextElementSibling ------------
// const element = document.getElementById("apple");
// const nextSibling =  element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow";

// --------------- .previousElementSibling ------------

// const element = document.getElementById("orange");
// const prevSubling = element.previousElementSibling;
// prevSubling.style.backgroundColor = "yellow";

// --------------- .parentElement ------------

// const element = document.getElementById("carrots");
// const parent = element.parentElement;
// parent.style.backgroundColor = "yellow";

// --------------- .children ------------
// const element = document.getElementById("deserts");
// const children = element.children;
// Array.from(children).forEach(child =>{
//     child.style.backgroundColor = "yellow";
// });
 
const element = document.getElementById("fruits");
const children = element.children;
children[1].style.backgroundColor = "yellow";




