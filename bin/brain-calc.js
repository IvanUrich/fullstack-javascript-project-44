#!/usr/bin/env node

import { questionAnswer, checkingTheAnswer } from '../src/index.js'; // Импорт [ Import ]
import { whatIsYourName } from '../src/cli.js';

const name = whatIsYourName();
console.log('What is the result of the expression?'); // Правила игры [ Rules of the game ]
const operator = ['+', '-', '*'];

for (let i = 0; i < 3; i +=  1) { // Цикл на три вопроса  [ A series of three questions ]

  const numberFirst = Math.floor(Math.random() * 100); // Random number from 1 to 100
  const numberSecond = Math.floor(Math.random() * 100); // Random number from 1 to 100
  const indexOperand = Math.abs(Math.floor((Math.random() * 10) / 3 - 1)); // Operator index

  const answer = Number(questionAnswer(`${numberFirst} ${operator[indexOperand]} ${numberSecond}`)); // Asked question + answer
  const examination = eval(`${numberFirst} ${operator[indexOperand]} ${numberSecond}`); // Test answer

  if (checkingTheAnswer(answer, examination) === false) { // Проверка на провал и победу [ Check for failure and victory ]
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${examination}'.`)
    console.log(`Let's try again, ${name}!`);
    break; 
  } else if (i === 2) {
    console.log(`Congratulations, ${name}!`);
  }
}
