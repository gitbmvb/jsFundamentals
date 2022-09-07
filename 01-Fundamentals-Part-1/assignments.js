// Lectures 1 to 5
const country = "Brazil";
const continent = "South America";
const population = 212.6e6;
const isIsland = false;
let language; // undefined;
language = "Brazilian Portuguese";

console.log(
`Country = ${country}
Continent = ${continent}
Population(aprox.) = ${population}
Is island? = ${isIsland}
Language = ${language}
`);

const populationFiland = 6e6;
const halfPopulation = population/2;

console.log(halfPopulation);
console.log(population + 1);
console.log(`Does Brazil have a bigger population
than Filand? = ${population > populationFiland}.`);

const average = 33e6;
console.log(`Does Brazil have more people than
the average? ${population > average}.`);

const description = `${country} is in ${continent},
and its ${population} people speak ${language}.`;
console.log(description);

// Lecture 6
if(population > average)
    console.log(country + "'s population is above average.");
else
    console.log(country + "'s population is " + (average - population) +
    " below average.");

// Lecture 7

//=4 int
console.log('9' - '5');

//  = 617 string
console.log('19' - '13' + '17');

// 23 int
console.log('19' - '13' + 17);

// False
console.log('123' < 57);

//1143 int
console.log(typeof (5 + 6 + '4' + 9 - 4 - 2));