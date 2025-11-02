// functions =  A Sections of reusable code.
//              Declare code once, use it whenever you want.
//              call the Fucntion to execute the code

/*
    function happyBirthday(){
        console.log("Happy Brithday to you!")
        console.log("Happy Brithday to you!")
        console.log("Happy Brithday Dear you!")
        console.log("Happy Brithday to you!")
    }

    happyBirthday();
*/

/*
    function happyBirthday(username,age){
        console.log("Happy Brithday to you!")
        console.log("Happy Brithday to you!")
        console.log(`Happy Dear ${username} you!`)
        console.log("Happy Brithday to you!")
        console.log(`YOu are ${age}`)
    }

    happyBirthday("Jhon Mark",23);
    happyBirthday("SpongeBob",30);
    happyBirthday("Patrick",37);
*/

function add(x,y){
    return x + y;
}

function subtract(x,y){
    return x-y;
}

function multiplay(x,y){
    return x*y;
}

function devide(x,y){
    return x/y;
}

function isEven(number){
    return number % 2 === 0 ? true: false;
}

function isValidEmail(email)
{
    return email.includes("@") ? true : false;
}

console.log(isValidEmail("jhonmark@gmail.com"));
console.log(isValidEmail("jhonmarkgmail.com"));


