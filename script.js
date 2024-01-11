'use strict';
// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.between').textContent);
// document.querySelector('.message').textContent = 'Correct Number! 🎉';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;

// Generate a random number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    // delete guess value
    document.querySelector('.guess').value = '';
    // When there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = 'No number! 🚫';
    displayMessage('No number! 🚫');
        // When player wins
    }else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = 'Correct Number! 🎉';
        displayMessage('Correct Number! 🎉');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        // Highscore
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // When guuess is wrong
    }else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? `${guess} is Too high! 📈` : `${guess} is Too low! 📉`);
            // document.querySelector('.message').textContent = guess > secretNumber ? `${guess} is Too high! 📈` : `${guess} is Too low! 📉`;
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            // document.querySelector('.message').textContent = 'You lost the game! 😥';
            displayMessage('You lost the game! 😥');
            document.querySelector('.score').textContent = 0;
        }
    }
            
        
        // When guuess is too high
    // }else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = `${guess} is Too high! 📈`;
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else {
    //         document.querySelector('.message').textContent = 'You lost the game! 😥';
    //         document.querySelector('.score').textContent = 0;
    //     }
    //     // When guess is too low
    // }else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = ` ${guess} is Too low! 📉`;
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else {
    //         document.querySelector('.message').textContent = 'You lost the game! 😥';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});

// Coding Challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)

document.querySelector('.again').addEventListener('click', function () { 
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#20335d';
    document.querySelector('.number').style.width = '15rem';
});


