'use strict';

/*
DOM = Document Object Model:

Structured representation of html
documents. It allows javascript to
access html elements and styles to
manipulate them.
*/

/*
console.log(document.querySelector('.message').
textContent);

document.querySelector('.message').textContent = 'Correct Number!';

console.log(document.querySelector('.message').
textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function (){
    const guess = Number(document.querySelector('.guess').value);

    if (!guess){
        document.querySelector('.message').textContent = 'No number!';
    } else if (guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
    } else if (guess > secretNumber){
        document.querySelector('.message').textContent = 'Too High';
        if(score > 0){
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
        }
    } else if (guess < secretNumber){
        document.querySelector('.message').textContent = 'Too low';
        if(score > 0){
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
        }    
    }
});