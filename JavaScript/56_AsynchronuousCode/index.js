// synchronous =  Executes line by line consecutively in a sequential manaer
//                  code that waits for an operaton to complete.
//
// asynchronous = Allows multiple operatos to be performed concurrently without waiting 
//                  Doesn't block the execution flow and allows the program to continue 
//                  (I/O operatopns, network request, fetching data)
//                  Handle with: Callbacks, Promises, Async/Await

console.log("Task 1")
console.log("Task 2")
console.log("Task 3")

console.log("---------------------------")

setTimeout(() => console.log("Task 1"),2000);
console.log("Task 2");
console.log("Task 3");
console.log("Task 4");

console.log("---------------------------")
function func1 (callback){
    setTimeout(() => {
        console.log("Task 1"); 
        callback();
    },3000);
}

function func2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

func1(func2);
