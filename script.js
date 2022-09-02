/*

let js = "amazing";

//if (js == "amazing") alert("Yeeees");
console.log("Hello, there!");

console.log(typeof 9);


//Ways to declare variables in js

//let is used for changeable data (during execution).
//Also, it's possible to declare variables with
//no value (indefined)


let age = 19;
age = 30;

//const = for constant values during all the
//execution. Here, it's obligatory to give to the
//variable a value.

const myBirth = 2003;
//myBirth = 2004; -->Error
//const job; -->Error

//var is the older version of let
var job = "student";
job = "universitary student";


//Declaring variables with no type is a bad idea.


//BASIC OPERATORS
const now = 2022;
const ageBruno = now - 2003;
const myMumsAge = now - 1963;
console.log(ageBruno, myMumsAge);
console.log(ageBruno * 2, ageBruno / 2, myMumsAge / 2 ** 3);

const firstName = "Bruno";
const lastName = "Martins";
console.log(firstName + " " + lastName);

//Comparison operators >,<.<=,>=
console.log(ageBruno > myMumsAge);

const isFullAge = ageBruno >= 19;
console.log(isFullAge);


//If else statements
const age = 15;
const isOldEnough = age >= 18;

//If-else control structure
if(isOldEnough){
    console.log("You can start driving license!");
} else{
    const yearsLeft = 18 - age;
    console.log(`You are too young. Wait another ${yearsLeft} years`);
}

let century;
const birthYear = 2003;
if(birthYear <= 2000){
    century = 20;
} else{
    century = 21;
}
console.log(century);

const name = "World";
const news = `Hello, ${name}!`;
console.log(news);

console.log('String with\n\
multiple\n\
lines');

console.log(`String
with
multiple
linessss`);



//Type conversion and coercion

//Type conversion is when we manually convert
// from a type to another
//Type coercion is when js do it automatically.

//Conversion
const inputYear = '2003';
//console.log(inputYear + 18); ERROR: inputYear is a string.
console.log(Number(inputYear) + 18);
console.log(String(2003));

//Coercion
console.log("I'm " + 19 + " years old.");
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23'/'2');


//Truthy and falsy values

//False values = 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean('Bruno'));
console.log(Boolean(''));
console.log(Boolean({}));
console.log(Boolean(undefined));


//Ex
const money = 10;
if(money){
    console.log("Don't spend it all!");
} else {
    console.log("You should get a job.");
}
//Check if a variable is defined of not
let height = 0;
if(typeof height == undefined){
    console.log("Height is defined.");
} else{
    console.log("It's undefined.");
}


//Equlity operators === vs ==
const age = '18';

//Strictly equal-->best to use
if(age === 18) console.log("You just have became an adult!(1)");

if(age == 18) console.log("You just have became an adult!(2)");

const favNumber = Number(prompt("What's your favorite number?"));

console.log(favNumber);


//Boolean logic and logic operators
const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);

const isTired = false;

console.log(hasDriversLicense && hasGoodVision || !isTired);


//Switch statement

const day = "tuesday";

switch(day){
    case 'monday'://equivalent to day === 'monday'
        console.log("Let's study OOP!");
        break;
    case 'tuesday':
    case 'wednesday': //day === 'tuesday' || day === 'wednesday'
        console.log("Let's study calculus!");
        break;
    default:
        console.log("That's not a valid day.");
        break;
}

if(day === 'monday')
    console.log("Let's study OOP!");
else if(day === 'tuesday' || day === 'wednesday')
    console.log("Let's study calculus!");
else
    console.log("That's not a valid day.");
 

//Statements and Expressions

//Statement = bigger block of code that is executed and
//doesn't produce a value by itself.

//Expression = piece of code that produces a value.


//The conditional (ternary) operator

const age = 19;

const letter = age >= 18 ? "A": "B";
console.log(letter)


*/