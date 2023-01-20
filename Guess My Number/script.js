'use strict';

const secretNumber = Math.trunc(Math.random()*20)+1;

let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener(
    'click', function(){
        const guess = Number(document.querySelector('.guess').value);

        if(!guess){
            document.querySelector('.message').textContent = "No Number!";
        }

        else if(guess===secretNumber){
            document.querySelector('.message').textContent = "Correct Number";
        }

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