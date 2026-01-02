// DOM = DOCUMENT OBJECT MODEL
//      object{} that will represent the gapge you see in the web browser
//      and provide you with an API to interact with it.
//      web browser construct the DOM when it loads an HTML document and structures all the element
//      in a tree-like representation Javascript  caon access the DOM to dynamically change the content,
//      structure, and styles of a web page.

document.title = "My Document";
document.body.style.backgroundColor = "hsl(0,0%,15%)";
console.log(document);
console.dir(document);

const username = "Mark";
const welcomeMsg = document.getElementById("welcome-msg");
welcomeMsg.textContent += username === "" ? `Guest`:username;

