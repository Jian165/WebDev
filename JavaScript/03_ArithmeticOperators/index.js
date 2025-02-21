// arithmetic operator = operands (value, variables, etc.)
//                       oprators (+ - * /)
//                       ex. 11=x+5 

let students = 30;
// students = students + 1
// students = students - 1
// students = students * 2
// students = students / 2
// students = students ** 2
// students = students % 2

// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;
// students **= 2;
// students %= 2;

// students ++;
// students --;

/*
    oprator precidence
    1. parenthesis ()
    2. exponents
    3. multiplication & devision & modulo
    4. addition & subtraction
*/

let result = 1+2*3+4**2
console.log(result);

let result2 = 12 % 5 + 8 / 2;
console.log(result2);

let result3 = 6 / 2 ** (2 + 5);
console.log(result3);
