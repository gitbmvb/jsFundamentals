'use strict';

/* The dash is the id selector:
const score0 = document.querySelector('#score--0'); */

// Selecting Element
const playerEls = [document.querySelector('.player--0'), document.querySelector('.player--1')];
const scoreEls = [document.getElementById('score--0'), document.getElementById('score--1')];
const currentEls = [document.getElementById('current--0'), document.getElementById('current--1')];

const diceEl = document.querySelector('.dice');
const btn = {
    new: document.querySelector('.btn--new'),
    roll: document.querySelector('.btn--roll'),
    hold: document.querySelector('.btn--hold'),
}

const maxScore = 10;
let scores, currentScore, activePlayer, playing;

// Starting Conditions

const init = function(){
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    playerEls[0].classList.add('player--active');
    playerEls[0].classList.remove('player--winner');
    playerEls[1].classList.remove('player--active');
    playerEls[1].classList.remove('player--winner');
    diceEl.classList.add('hidden');
    scoreEls[0].textContent = 0;
    scoreEls[1].textContent = 0;
    currentEls[0].textContent = 0;
    currentEls[1].textContent = 0;
};

init();

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    //.toggle() adds a specified class to an object which doesn't have it
    // and removes from the one that has it.
    playerEls[0].classList.toggle('player--active');
    playerEls[1].classList.toggle('player--active');
};

// Rolling dice functionality
btn['roll'].addEventListener('click', function(){
    if(playing){
        const dice = Math.trunc(Math.random() * 6) + 1;
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        if(dice !== 1){
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else{
            switchPlayer();
        }
    }
});


btn['hold'].addEventListener('click', function(){
    if(playing){
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        
        if(scores[activePlayer] >= maxScore){
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden');
        } else {
            switchPlayer();
        }
    }
});


btn['new'].addEventListener('click', init);
