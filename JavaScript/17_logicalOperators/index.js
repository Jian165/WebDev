// logical operator = Use to combine or multiple boolean values (true ornfalse )

// And = &&

let temp = 120;
if(temp > 0 && temp <= 30){
    console.log("The weather is Good");
}
else{
    console.log("The weather is bad");
}

// Or = ||

if(temp <= 0 || temp > 30){
    console.log("2: The weather is bad");
}
else{
    console.log("2: The weather is Good");
}

// not = !

const IsSunny = false;
if(!IsSunny){
    console.log("It is Cloudy today");
}
else{
    console.log("It's Sunny today");
}


