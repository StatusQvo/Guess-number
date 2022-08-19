
let randomNumber = Math.floor(Math.random() * 100) + 1;


const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const warMess    = document.querySelector('.warningMessage');

let guessCount = 1;
let resetButton;
guessField.focus();


function checkGuess() {
    const userGuess = Number(guessField.value);
     if(guessCount===1) {
      guesses.textContent = 'Previous guesses: ';
    }  
    
    if(userGuess!==0 && userGuess<101){
      guesses.textContent += userGuess + ' ';
    }  
    
    if (userGuess===randomNumber){
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();

    } else if(guessCount===7){
    lastResult.textContent = '!!!GAME OVER!!!';
    lowOrHi.textContent = '';
    setGameOver();
    
  } else if (userGuess < 1){
   guessField.value = 1;
    guessCount--;
    lowOrHi.textContent = 'Числа должны быть от 1 до 100!';
  
  } else if (userGuess > 100){
    guessField.value = 100;
    guessCount--;
    lowOrHi.textContent = 'Числа должны быть от 1 до 100!';

  }  else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }
  
  guessCount++;
  guessField.focus(); 
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
    resetButton.focus();
 }


 function resetGame() {
    guessCount = 1;
  
    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetPara of resetParas) {
     resetPara.textContent = '';
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
  
    lastResult.style.backgroundColor = 'white';
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }


  guessField.addEventListener('keypress',function(event) {
if(event.key==='Enter'){
  if(guessSubmit.disabled){
    resetButton.click(); 
  } else {
     guessSubmit.click();
  } } } );
 




