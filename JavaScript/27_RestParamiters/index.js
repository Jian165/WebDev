// rest paramiters = (...rest) allow a function work with a variable
//                  number for arguments bound by them into an array
//                  spread = expands an array into separate elements
//                  rest =  bundles separate element iinto an array

const food1 = "pizza"
const food2 = "humburger"
const food3 = "hotdog"
const food4 = "sushi"
const food5 = "ramen"

function openFridge(...foods){
    console.log(...foods)
}

openFridge(food1,food2,food3,food4,food5);

function getfoods(...foods)
{
    return foods;
}

const foods = getfoods(food1,food2,food3,food4,food5)
console.log(foods)

function sum(...numbers){
    let result = 0;

    for(let number of numbers){
        result += number
    }
    return result;
}

const total = sum(1,2,3,4,5)
console.log(`your total is $${total}`);


function average(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number
    }
    return result/numbers.length;
}

const totalAverage = average(100,89,90,85,75)
console.log(`your average is ${totalAverage}`);


function combineString(...strings){
    return strings.join(" ");
}

const fullName = combineString("Mr.","Jhon Mark","A.","Duran")
console.log(fullName)







