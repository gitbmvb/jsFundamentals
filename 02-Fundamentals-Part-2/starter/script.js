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


// Working with arrays

const chemicalElements = ['Carbon',
'Hydrogen', 'Oxygen', 'Phosphor'];

console.log(chemicalElements);
console.log(chemicalElements[0]);
console.log(chemicalElements.length);

const years = new Array(1918, 1945, 1991);
console.log(years);

chemicalElements[3] = 'Sulfur';
//An array's item can be changed, although its a const variable
console.log(chemicalElements);

const bruno = ['Bruno', 'Martins', 2003, 19,
'Software Engineering Student'];
console.log(bruno);

// Basic Array Operations


const chemicalElements = ['Carbon',
'Hydrogen', 'Oxygen', 'Phosphor'];

//.push() = add a new element to the end of the array
const nytro = chemicalElements.push("Nytrogen")
console.log(nytro);
console.log(chemicalElements);

//.unshift() = add a new element to the beginning of the array
const Ur = chemicalElements.unshift("Uranium");
console.log(Ur);//return the amount of elements stored in the array
console.log(chemicalElements);

//.pop() = deletes the last element
const popped = chemicalElements.pop();
console.log(popped);
console.log(chemicalElements);

//.shift() = deletes the first element from the array
chemicalElements.shift();
console.log(chemicalElements);


//.indexof() = returns the index of a certain element inside a array
//.includes() = boolean functions which returns if a
// element exists in a array or not. (Strict equality)

console.log(chemicalElements.indexOf("Oxygen"));

//This element doesn't exist in the array, so
//the program returns -1.
console.log(chemicalElements.indexOf("Sodium"));
console.log(chemicalElements.includes("Hydrogen"));

if(chemicalElements.includes("Oxygen"))
    console.log("Yeah, there is oxygen here!")

//Introduction to objects

// Objets are property-indexed arrays

const bruno = {
    firstName: 'Bruno',
    lastName: 'Martins',
    age: 19,
    job: 'Software Engineering Student'

};

// Dot vs. Bracket Notation

console.log(bruno);
console.log(bruno['firstName']);
const nameKey = 'Name';
console.log(bruno['last' + nameKey]);
console.log(bruno.firstName);
bruno.lastName = 'Martins Valério Bomfim';
bruno["job"] = "Student";

const info = prompt('What do you wanna know about me?');

if(bruno[info]){
    alert(bruno[info]);
} else {
    alert("This is not a valid property.");
}
*/

// Object methods

const bruno = {
    firstName: 'Bruno',
    lastName: 'Martins',
    favProgLangs: ['Python', 'Javascript', 'PHP', 'Html', 'C++'],
    job: 'Software Engineering Student',
    birthYear: 2003,
    hasDriversLicense: true,
    
    // calcAge: function(birthYear){
    //     return 2022 - birthYear;
    // } Method = object's function

    calcAge: function(birthYr=this.birthYear){
        return 2022 - birthYr;
    }
};

console.log(bruno.calcAge(2000));
console.log(bruno['calcAge']());
