/*
const JohnMass = 92, JohnHeigth = 1.95;
const MarkMass = 78, MarkHeigth = 1.69;


const JohnBMI = JohnMass / JohnHeigth ** 2;
const MarkBMI = MarkMass / MarkHeigth ** 2;
const MarkHigherBMI = MarkBMI > JohnBMI;


//console.log(MarkBMI, JohnBMI);
//console.log(MarkHigherBMI);
//(MarkHigherBMI) ?
//console.log(`Mark's BMI(${MarkBMI}) is higher than John's(${JohnBMI})!`) :
//console.log(`John's(${JohnBMI}) BMI is higher than Mark's(${MarkBMI})`);


const avgDolphins = (97 + 112 + 101)/3;
const avgKoalas = (109 + 95 + 123)/3;

if(avgDolphins > avgKoalas && avgDolphins >= 100)
    console.log("Dolphins won the competition!")
else if(avgDolphins < avgKoalas && avgKoalas >= 100)
    console.log("Koalas won the competition!")
else if(avgDolphins === avgKoalas && avgDolphins >= 100 && avgKoalas >= 100)
    console.log("It's a draw, ladies and gentlemen!");
else
    console.log("Unfortunately, no one has won the cpt.");
*/
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

console.log(
`Bill: ${bill}
Tip: ${tip}
Total: ${bill + tip}
`);
