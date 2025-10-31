// Method Chaing = Calling one methiod after another
// in one continuous code

let username = window.prompt("Enter your username");
// ---- with no method chaining ----

username = username.trim();

let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraLetters = username.slice(1);
extraLetters = extraLetters.toLowerCase();

username = letter + extraLetters;
console.log(username);

// ---- with method chaining ----

let username2 = window.prompt("Enter your username");
username2 = username2.trim().charAt(0).toUpperCase() + username2.trim().slice(1).toLowerCase();
console.log(username2);





