// eventListener =  Lsitiner for specific events to create interactive web pages
//                  events: keydown, keyup
//                  document.addEventListener(event,callback);


const myBox = document.getElementById("myBox")
const movementAmount  = 10;

let x = 0;
let y = 0;

document.addEventListener("keydown",event =>{
    myBox.textContent = "😮";
    myBox.style.backgroundColor = "tomato"
})

document.addEventListener("keyup",event =>{
    myBox.textContent = "😃";
    myBox.style.backgroundColor = "lightblue"
})

document.addEventListener("keydown", event =>{
    if(event.key.startsWith("Arrow")){
        event.preventDefault();
        switch(event.key){
            case "ArrowUp":
                y-= movementAmount;
            break;
            case "ArrowDown":
                y+= movementAmount;
            break;
            case "ArrowLeft":
                x-= movementAmount;
            break;
            case "ArrowRight":
                x+= movementAmount;
            break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});
