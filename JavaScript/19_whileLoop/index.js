// while loop repeat soem code while condition is true

username = ""
while (username === "" || username === null)
{
    username = window.prompt("Enter your username")
}
console.log(`Hello ${username}`)
