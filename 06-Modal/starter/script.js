'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

/* When multiple objects have the same class-name, the
querySelector() will choose just the first one. */


const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    //Obs.: No dot needed here.
}

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


btnsOpenModal.forEach(element => element.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Javascript won't immediately execute a function
// without "()" - just when the EventListener is called.


// Keyboard events are global events, because they don't
// happen in just one specific element.

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
