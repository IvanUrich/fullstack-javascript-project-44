#!/usr/bin/env node

import { questionAnswer } from '../src/index.js';//  Import
import { whatIsYourName } from '../src/cli.js';

const name = whatIsYourName(); //  Getting a name
console.log('Answer "yes" if the number is even, otherwise answer "no".'); //  Rules of the game
let number = 0;

for (let i = 1; i <= 3; i += 1) { //   A series of three questions
  number = Math.floor(Math.random() * 100); // Random number from 1 to 100
  const answer = questionAnswer(number); // Question answer

  switch (answer) { // Calculation of response logic
    case 'yes':
      if (number % 2 === 0) {
        console.log('Correct!');
      } else {
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
        i = 5;
      }
      break;
    case 'no':
      if (number % 2 !== 0) {
        console.log('Correct!');
      } else {
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
        i = 5;
      }
      break;
    default:
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      i = 5;
  }
  if (i !== 5 && i === 3) { //  Check for failure
    console.log(`Congratulations, ${name}!`);
  }
}
