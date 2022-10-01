'use strict';

/*
DOM = Document Object Model:

Structured representation of html
documents. It allows javascript to
access html elements and styles to
manipulate them.
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const changeContent = (message, target='message') => document.querySelector(`.${target}`).textContent = message;


document.querySelector('.check').addEventListener('click', function (){
    const guess = Number(document.querySelector('.guess').value);

    if (!guess){
        changeContent('No number!');
    } else if (guess === secretNumber){
        if(score > highscore) highscore = score;
        changeContent(highscore, 'highscore');
        changeContent('Correct number!');
        changeContent(secretNumber, 'number');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    } else if (guess !== secretNumber){
        if(score > 1){
            score--;
            guess > secretNumber ? changeContent('Too high') : changeContent('Too low');
            changeContent(score, 'score');
        } else {
            changeContent('You lost the game!')
            document.querySelector('body').style.backgroundColor = 'red';
        }

    }
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    changeContent(highscore, 'highscore');
    changeContent('Start guessing...');
    changeContent('?', 'number');
    changeContent(score, 'score');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
});