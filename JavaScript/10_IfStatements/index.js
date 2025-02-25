// IF STATEMENT = if a condition is true, execute some code
//                  if not, do something else

let age = 13;

if(age >= 18){
    console.log("You are old enough to enter this site");
}
else{
    console.log("You must be 18+ to enter this site");
}

console.log("--------------------------------");
let isStudent = false;
if(isStudent)
{
    console.log("You are a student");
}
else{

    console.log("You are NOT a student");
}

console.log("--------------------------------");

let ageRec = 25;
let hasLicense = true;
if(ageRec >=16){
    console.log("You are old enough to drive");
    if(hasLicense){
        console.log("you have your license!");
    }
    else{
        console.log("You do not have your lisence yet!");
    }
}
else{
    console.log("You must be 16+ to have a license");
}

console.log("--------------------------------");
let ageRec2 = 101;
if(ageRec2 >= 100){
    console.log("You are old Enough to enter to this site");
}
else if(age==0){
    console.log("You can't enter. You ware just born");
}
else if(ageRec2 < 0){
    console.log("Your age can't be below 0");
}
else if(ageRec2 >= 18){
    console.log("You are TOO OLD to enter this site");
}
else{
    console.log("you must be 18+ to enter this site");
}
