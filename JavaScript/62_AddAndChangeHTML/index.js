// -------------- Example 1 <h1> ----------
// STEP 1 CREATE THE ELEMENT
const newH1 =  document.createElement("h1")

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "I like pizza!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";
// STEP 3 APPEND ELEMENT TO DOM

// document.body.append(newH1);
// document.body.prepend(newH1);
document.getElementById("box1").append(newH1);
// document.getElementById("box2").prepend(newH1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box3);

// const boxes = document.querySelectorAll(".box")
// document.body.insertBefore(newH1,boxes[1])

// REMOTE HTML ELEMENT
// document.body.removeChild(newH1)
// document.getElementById("box3").removeChild(newH1)

// ----------------- Example 2 --------------

const newListItem = document.createElement("li");
newListItem.textContent = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// document.body.append(newListItem);
// document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").prepend(newListItem);

// const banana =  document.getElementById("banana")
// document.getElementById("fruits").insertBefore(newListItem,banana);

// const listItems =  document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem,listItems[1])

document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").removeChild(newListItem);
