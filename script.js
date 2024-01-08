'use strict';
// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.between').textContent);
// document.querySelector('.message').textContent = 'Correct Number! 🎉';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
const my_func = function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
};

document.querySelector('.check').addEventListener('click', my_func);
