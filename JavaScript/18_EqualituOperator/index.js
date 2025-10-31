// = assignment operator
// == comparison operator ( compare if values are equal)
// === strict comparison operator ( compare if values and datatype are equal)
// != inequality operator
// !== strict inequality operator

const Pi = 3.14;

console.log("Equality Operator:");
if(Pi == "3.14"){
    console.log("This is a Pi");
}
else{
    console.log("This is NOT a Pi");
}

console.log("Strict Equality Operator:");
if(Pi === "3.14"){
    console.log("This is a Pi");
}
else{
    console.log("This is NOT a Pi");
}

console.log("Inequality Operator:");
if(Pi != "3.14"){
    console.log("This is a NOT Pi");
}
else{
    console.log("This is a Pi");
}

console.log("Strict Inequality Operator:");
if(Pi !== "3.14"){
    console.log("This is a NOT Pi");
}
else{
    console.log("This is a NOT Pi");
}
