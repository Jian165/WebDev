// classList = Element property in JavaScript use to interacti with an element's 
//              classes (CSS classes) Allows you to make reusable calsses for many elements
//              accross your webpage

// add()
// remove()
// toggle(remove if present, and if not)
// replace(oldClass, newClass)
// contains()

const myButton = document.getElementById("myButton");
const myH1 = document.getElementById("myH1");

myButton.classList.add("enabled")
// myButton.classList.remove("enabled")

myButton.addEventListener("click",event => {
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "🤬"

    }
    else{
        event.target.classList.replace("enabled","disabled")
    }
})

myButton.addEventListener("mouseover",event => {
    event.target.classList.toggle("hover")
})

myButton.addEventListener("mouseout",event => {
    event.target.classList.toggle("hover")
})


let buttons = document.querySelectorAll(".myButtons")
buttons.forEach(button =>{
    button.classList.add("enabled")
})

buttons.forEach(button =>{
    button.addEventListener("mouseover",event =>{
        event.target.classList.toggle("hover");
    })

    button.addEventListener("mouseout",event =>{
        event.target.classList.toggle("hover");
    })
})

buttons.forEach(button =>{
    button.addEventListener("click",event =>{

        if(event.target.classList.contains("disabled")){
            event.target.textContent += "🤬"
        }
        else{
            event.target.classList.replace("enabled","disabled")
        }
    })

})
