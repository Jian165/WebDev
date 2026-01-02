// ES6 Module =  An external file that contains reusable code
//              that can be imported into other JavaScript file.
//              write reusable code form many different apps.
//              can be container variables, classes, functions.. and more
//              intruduce as a part of ECMAScript 2015 update


import {PI,getCircumference,getArea,getVolume} from './mathUtil.js';

console.log(PI);
const circumfenrece = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`${circumfenrece.toFixed(2)}cm`)
console.log(`${area.toFixed(2)}cm^2`)
console.log(`${volume.toFixed(2)}cm^3`)


