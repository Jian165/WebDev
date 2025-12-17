// setTimeout = function in javascript that allows you to schedule
//              the execution of a function after an amout of time (milliseconds)
//              times are approximate (varies base on the workload of the javascript runtime env.)
// setTimeout(callback,delay);

function sayHello() {
    window.alert("Hello");
}

// setTimeout(sayHello,2000);
// setTimeout(function(){window.alert("goodbye")},4000);
// setTimeout(() => window.alert("Hello Again"),6000);

// const timeoutId = setTimeout(() => window.alert("Hello Again"),6000);
// clearTimeout(timeoutId)

let timeoutId;

function startTimer(){
    timeoutId = setTimeout(() => window.alert("Hello"),3000)
    console.log("STARTED")
}

function clearTimer(){
    clearTimeout(timeoutId)
    console.log("CLEARED")
}



