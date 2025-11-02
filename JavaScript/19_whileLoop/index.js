// while loop repeat soem code while condition is true

/*
    username = ""
    while (username === "" || username === null)
    {
        username = window.prompt("Enter your username")
    }
    console.log(`Hello ${username}`)
*/

/*
    let username;
    do{
        username = window.prompt("Enter your username")
    }
    while(username === "" || username === null)
    console.log(`Hello ${username}`)
*/

let loggedIn = false;
let username;
let password;

while(!loggedIn)
{
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("You are Logged in!")
    }
    else{
        console.log("Invalid Credentials!a Please try again");
    }
}
