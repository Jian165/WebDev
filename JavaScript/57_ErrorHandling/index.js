// Error = An object that is created to represent a problem that occures
//          occur often with user input or established a connection

// try {} = Encloses code that might potentially cause an error 
// catch {} = Catches and handles any throw errors form try {}
// finally {} =  (optional always executs. used mostly for clean up 
//              ex. close files, close connection, release resources

try{
    console.log("Hello")
    console.log(x);
    // NETWORK ERRORS
    // PROMISE REJECTION
    // SECURITY ERRORS
}
catch(error){
    console.error(error)
}
finally{
    // CLOSE FILES
    // CLOSE CONNECTIONS
    // RELEASE RESOURCES
    console.log("This always executes");
}

console.log("You have reached the end!")

console.log("-------- Example 2 ----------")

try{
    const dividend =  Number(window.prompt("Enter dividend: "));
    const divisor =  Number(window.prompt("Enter divisor: "));
    
    if( divisor == 0){
        throw new Error("You can't devided by zero!");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number");
    }

    const result = dividend/ divisor;
    console.log(result)
}
catch(error){
    console.error(error);
}






