'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;

let score = 20;
let highScore = 0;

document.querySelector('.number').textContent = secretNumber;
document.querySelector('.number').textContent = '?';
document.querySelector('.guess').value = '';

document.querySelector('.check').addEventListener(
    'click', function(){
        const guess = Number(document.querySelector('.guess').value);

        // WHEN THERE IS NO INPUT 
        if(!guess){
            document.querySelector('.message').textContent = "No Number!";
        }

        // WHEN PLAYER WINS 
        else if(guess===secretNumber){

            document.querySelector('.message').textContent = "Correct Number";
            document.querySelector('body').style.backgroundColor='#60b347';

            document.querySelector('.number').style.width ='30rem';

            if(score > highScore){
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
        }

        // WHEN NUMBER IS TOO HIGH 
        else if(guess > secretNumber){
            if(score > 1){
                score--;
                document.querySelector('.score').textContent = score;
                document.querySelector('.message').textContent = "Too High";
            }
            else{
                document.querySelector('.message').textContent = 'You Lost The Game!';
            }
        }

        // WHEN NUMBER IS TO LOW 
        else if(guess < secretNumber){
            if(score > 1){
                score--;
                document.querySelector('.score').textContent = score;
                document.querySelector('.message').textContent = "Too Low";
            }
            else{
                document.querySelector('.message').textContent = 'You Lost The Game!';
            }
        }

    });

    document.querySelector('.again').addEventListener('click', function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;

        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';

        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
    });