#!/usr/bin/env node

import { questionAnswer, checkingTheAnswer, gcd } from '../src/index.js'; //  Import
import { whatIsYourName } from '../src/cli.js';

const name = whatIsYourName(); // Getting a name
console.log('Find the greatest common divisor of given numbers.'); //  Rules of the game

for (let i = 0; i < 3; i += 1) { // A series of three questions
  const numberFirst = Math.floor(Math.random() * 100); // Random number from 1 to 100
  const numberSecond = Math.floor(Math.random() * 100); // Random number from 1 to 100

  const answer = Number(questionAnswer(`${numberFirst} ${numberSecond}`)); // Asked question + answer
  const examination = gcd(numberFirst, numberSecond); // Test answer GCD

  if (checkingTheAnswer(answer, examination) === false) { // Check for failure and victory
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${examination}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  } else if (i === 2) {
    console.log(`Congratulations, ${name}!`);
  }
}
