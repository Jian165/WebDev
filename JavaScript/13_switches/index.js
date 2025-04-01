let day= 7;

switch(day){
    case 1:
        console.log("it is Monday");
        break;
    case 2:
        console.log("it is Tuesday");
        break;
    case 3:
        console.log("it is Wednesday");
        break;
    case 4:
        console.log("it is Thursday");
        break;
    case 5:
        console.log("it is Friday");
        break;
    case 6:
        console.log("it is Satruday");
        break;
    case 7:
        console.log("it is Sunday");
        break;
    default:
        console.log(`${day} is not a day`);
}

let testScroe = 92;
let letterGrade;

switch(true){
    case testScroe >= 90:
        letterGrade = "A"
        break;
    case testScroe >= 80:
        letterGrade = "B"
        break;
    case testScroe >= 70:
        letterGrade = "C"
        break;
    case testScroe >= 60:
        letterGrade = "D"
        break;
    default:
        letterGrade = "F";

}

console.log(letterGrade);
