// NodeList = Static collection of HTML elements by (id, class, elements)
//              can be created by using querySelectorAll()
//              similar to an array, but no (map, filter, reduce)
//              Nodelist won't update to automatically reflect changes


const newButton = document.createElement("button")
newButton.textContent = "Button 5"
newButton.classList = "myButtons"
document.body.appendChild(newButton)

let buttons = document.querySelectorAll(".myButtons")


buttons.forEach(button =>{

    button.style.backgroundColor = "green"
    button.textContent += "😁"

    button.addEventListener("click",event =>{
        event.target.style.backgroundColor = "tomato"
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons")
        console.log(buttons)
    });

    button.addEventListener("mouseover",event =>{
        event.target.style.backgroundColor = "hsl(205, 100%, 40%)"
    });

    button.addEventListener("mouseout",event =>{
        event.target.style.backgroundColor = "hsl(205, 100%, 60%)"
    });
});


