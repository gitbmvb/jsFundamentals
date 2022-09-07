'use strict';

/*
// Strict mode eliminates some JavaScript silent errors
// by changing them to throw errors.
// 'use strict' must be the first line of code. Or then,
// it won't be executed on strict mode.
let hasDriversLicense = false;
const passTest = true;

if(passTest)
    // hasDriverLicense = true;
    hasDriversLicense = true;

if(hasDriversLicense) console.log("I can drive");

//const interface = 'Audio';
*/
function logger(name){
    console.log(`My name is ${name}!`);
}

function fruitProcessor(apples=0, oranges=0){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}


logger("Bruno Martins");

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const test = logger("");
console.log(test);