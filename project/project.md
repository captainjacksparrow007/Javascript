# Project Javascript
[Click Here](https://stackblitz.com/edit/stackblitz-starters-6krukh?file=index.html)

# Project 1 - Color Changer
## Solution
```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    // console.log(e);
    // console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'orange') {
      body.style.backgroundColor = e.target.id;
      body.style.color = 'white';
    } else if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    } else {
      body.style.backgroundColor = 'brown';
    }
  });
});

const buttonReset = document.querySelector('#buttonId');
let colorChange = window.getComputedStyle(document.body).backgroundColor;
// console.log(colorChange);
buttonReset.addEventListener('click', (e) => {
  if (colorChange == 'white') {
    console.log('already reset');
  } else {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
  }
});

```

# Project 2 - BMI Calculator
## Solution 
```javascript
const answer = document.querySelector('.answer');
const value1 = document.querySelector('.value1');
const value2 = document.querySelector('.value2');
const btn = document.querySelector('.submit');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');

btn.addEventListener('click', (e) => {
  const weight = parseFloat(value2.value);
  const height = parseFloat(value1.value);
  if (!isNaN(weight) && !isNaN(height) && height > 0 && weight > 0) {
    e.preventDefault();
    const bmi = weight / (height * height);
    const text = document.createTextNode(bmi.toFixed(2));
    answer.textContent = '';
    answer.appendChild(text);
    answer.classList.add('highLight');
    if (bmi.toFixed(2) < 18.5) {
      one.style.backgroundColor = 'green';
      two.style.backgroundColor = '';
      three.style.backgroundColor = '';
    } else if (bmi.toFixed(2) >= 18.5 && bmi.toFixed(2) <= 25) {
      two.style.backgroundColor = 'green';
      one.style.backgroundColor = '';
      three.style.backgroundColor = '';
    } else if (bmi.toFixed(2) > 25) {
      three.style.backgroundColor = 'green';
      one.style.backgroundColor = '';
      two.style.backgroundColor = '';
    }
  } else {
    answer.textContent = 'Please enter valid numbers.';
  }
});

```

# Project 3 - Digital Clock
## Solution 
```javascript
const clock = document.getElementById('clock');

setInterval(() => {
  let date = new Date();
  const time = date.toLocaleTimeString([], {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  });
  clock.innerHTML = time;
}, 1000);

```

# Project 4 - Guess Number
## Solution
```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#sbt');
const userInput = document.querySelector('.userInput');
const lastResult = document.querySelector('#Pguess');
const attemptRemaining = document.querySelector('#attempts');
const LowOrHi = document.querySelector('.LowOrHi');
const resultPara = document.querySelector('.resultPara');
const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter the number only');
  } else if (guess < 1) {
    alert('Please enter number between 1 and 100 only');
  } else if (guess > 100) {
    alert('Please enter number between 1 and 100 only');
  } else {
    prevGuess.push(guess);
    if (numGuess >= 10) {
      displayGuess(guess);
      displayMessage(`Game Over the random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right you guessed in ${numGuess} attempts`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`number is tooo low give some higher number`);
  } else if (guess > randomNumber) {
    displayMessage(`number is tooo high guess a small one`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  lastResult.innerHTML += ` ${guess} `;
  attemptRemaining.innerHTML = `${10 - numGuess}`;
  numGuess++;
}

function displayMessage(message) {
  LowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
  resultPara.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    lastResult.innerHTML = '';
    attemptRemaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    resultPara.removeChild(p);
    displayMessage('');
    playGame = true;
  });
}
```

# Project 5 - Keyboard Check
## Solution
```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class="tableClass">
      <table>
        <tr>
          <th>Key Pressed</th>
          <th>Key Code</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key === ' ' ? 'Space' : e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
      </table>
    </div>
  `;
});

```

# Project 6 - Unlimited Colors
## Solution
```javascript
const btnStart = document.getElementById('start');
const btnStop = document.getElementById('stop');

const randomColor = () => {
  const hex = '123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId = null;
btnStart.addEventListener('click', (e) => {
  if (!intervalId) {
    intervalId = setInterval(changeColor, 1000);
  }
  function changeColor() {
    document.body.style.backgroundColor = randomColor();
  }
});

btnStop.addEventListener('click', (e) => {
  clearInterval(intervalId);
  console.log('stop');
  intervalId = null;
});

```