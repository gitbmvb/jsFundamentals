'use strict';
/*
const calcAverage = (s1, s2, s3) => (s1 + s2 + s3)/3;

function checkWinner(avgD, avgK){
    if(avgD >= 2 * avgK)
        console.log("The Dolphins has won!");
    else if(avgD <= 2 * avgK)
        console.log("The Koalas has won!");
    else
        console.log("Sorry, no winners today!");
}

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

checkWinner(avgDolphins, avgKoalas);


const calcTip = value => value >= 50 && value <= 300 ? value*0.15 : value*0.2; 

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0],
bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(total);


const calcTip = value => value >= 50 && value <= 300 ? value*0.15 : value*0.2; 


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for(let i = 0; i < bills.length; i++){
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}
console.log(`Bills: ${bills}\nTips: ${tips}\nTotals = ${totals}`);

const calcAvg = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum += arr[i];
    return sum/arr.length;
}

console.log(`Bills Avg: ${calcAvg(bills)}\nTips Avg: ${calcAvg(tips)}\nTotals Avg: ${calcAvg(totals)}`);

*/