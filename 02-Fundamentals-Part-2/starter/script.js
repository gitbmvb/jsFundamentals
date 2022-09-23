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



// Functions Declarations x Expressions

// Function declarations use the "function" keyword
// Variables can assign a function value before its declaration
const myBirdsAge = calcAge1(2018);
console.log(myBirdsAge);

function calcAge1(birthYear){
    return 2022 - birthYear;
}

console.log(calcAge1(2003));

//In a function expression, a variable becomes a function
// (anonymous function)

const calcAge2 = function (birthYear){
    return 2022 - birthYear;
}

console.log(calcAge2(2003));



// Arrow functions

// Arrow functions is a shorter and fast-to-write type of function expression
// If a arrow functions has multiple lines, it
// must have a return


const calcAge3 = birthYear => 2022 - birthYear;
const yearRet = birthYear => 65 - calcAge3(birthYear);
const yearNow = (birthYear, age) => birthYear + age;

console.log(yearRet(2003));
console.log(yearNow(2003, 19));



// Functions calling other functions

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const juice = `Juice with ${cutFruitPieces(apples)} apple pieces and ${cutFruitPieces(oranges)} orange pieces.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

// Reviewing functions

const calcAge3 = birthYear => 2022 - birthYear;
const yearRet1 = birthYear => 65 - calcAge3(birthYear) <= 0 ? "Already retired!" : 65 - calcAge3(birthYear);

console.log(yearRet1(2003));
*/