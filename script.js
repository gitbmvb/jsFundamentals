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
*/


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