// how to accept user input

// 1. Easy way = window prompt
/*
    let username;
    username = window.prompt("what's your username?");
    console.log(username);
*/

// 2. Professional way = HTML textbox

let username;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
}



