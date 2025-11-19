// callback =  a function that is passed as an argument to another function. 

function hello(callback){
    console.log("Hello!")
    callback()
}

function wait(){
    console.log("Wait!")
}

function leave(){
    console.log("Leave")
}

function goodbye(){
    console.log("Goodbye!")
}

hello(goodbye)


function sum(callback,x,y){
    let result  = x + y;
    callback(result);
}

function displatConsole(result){
    console.log(result);
}

function displatPage(result){
    document.getElementById("myH1").textContent = result
}

sum(displatPage,5,20)
