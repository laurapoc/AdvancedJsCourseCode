function guessingGame() {
  let randomNumber = Math.floor(Math.random() * 100);
  let attempts = 0;
  let gameOver = false;
  return function (number) {
    console.log(randomNumber);
    attempts++;

    if (gameOver) {
      gameOver = false; // Reset gameOver to allow new games
      randomNumber = Math.floor(Math.random() * 100); // Reset random number
      attempts = 0; // Reset attempts
      return "The game is over, you already won!";
    }
    if (randomNumber === number) {
      gameOver = true;
      const guessString = attempts === 1 ? "guess" : "guesses";
      return `You win! You found ${randomNumber} in ${attempts} ${guessString}.`;
    }
    if (randomNumber > number) {
      return `${number} is too low!`;
    }
    if (randomNumber < number) {
      return `${number} is too high!`;
    }
  };
}

const game = guessingGame();
// console.log(game(50));
// console.log(game(40));
// console.log(game(20));
// console.log(game(77));

// example from cource:
function guessingGame2() {
  const ANSWER = Math.floor(Math.random() * 100);
  let isOver = false;
  let numGuesses = 0;

  return function guess(num) {
    if (isOver) return "The game is over, you already won!";
    numGuesses++;
    if (num === ANSWER) {
      isOver = true;
      const guess = numGuesses === 1 ? "guess" : "guesses";
      return `You win! You found ${num} in ${numGuesses} ${guess}.`;
    }
    if (num < ANSWER) return `${num} is too low!`;
    if (num > ANSWER) return `${num} is too high!`;
  };
}

function createAccount(pinStr, deposit) {
  let currBalance = deposit;
  return {
    checkBalance: (pin) => {
      if (pin !== pinStr) {
        return "Invalid PIN.";
      }
      return deposit;
    },
    deposit: (pin, depAmount) => {
      if (pin !== pinStr) {
        return "Invalid PIN.";
      }
      currBalance += depAmount;
      return `Successfully deposited $${depAmount}. Current balance: $${currBalance}.`;
    },
    withdraw: (pin, withdraw) => {
      if (pin !== pinStr) {
        return "Invalid PIN.";
      }
      if (withdraw > currBalance) {
        return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      }
      if (withdraw <= currBalance) {
        currBalance -= withdraw;
        return `Successfully withdrew $${withdraw}. Current balance: $${currBalance}.`;
      }
    },
    changePin: (pin, newPin) => {
      if (pin !== pinStr) {
        return "Invalid PIN.";
      }
      pinStr = newPin;
      return "PIN successfully changed!";
    },
  };
}

let account = createAccount("1234", 100);
// console.log(account.checkBalance("oops"));
// console.log(account.checkBalance("1234"));
// console.log(account.deposit("1234", 250));
// console.log(account.withdraw("1234", 300));
// console.log(account.withdraw("1234", 100));
// console.log(account.changePin("1234", "5678"));
// console.log(account.checkBalance("5678"));

const specialAdd = function (number) {
  if (number === undefined) return 0;
  return function addNext(num) {
    if (num === undefined) return number;
    if (num) {
      number += num;
      return addNext;
    }
  };
};

specialAdd();
specialAdd(2);
