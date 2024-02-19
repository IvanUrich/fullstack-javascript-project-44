#!/usr/bin/env node
/* eslint-disable indent */
/* eslint-disable object-curly-newline */

import { questionAnswer,
         checkingTheAnswer,
         getArifmeticalProgression,
         getArrQuestion } from '../src/index.js'; // Импорт [ Import ]
import { whatIsYourName } from '../src/cli.js';

const name = whatIsYourName(); // Getting a name
console.log('What number is missing in the progression?'); // Правила игры [ Rules of the game ]

for (let i = 0; i < 3; i += 1) { // Цикл на три вопроса  [ A series of three questions ]
  const numberFirst = Math.floor(Math.random() * 100); // Random number - start of progression
  const stepProgression = Math.floor(Math.random() * 10 + 0.5); // Step progression
  const indexHiddenNumber = (Math.floor(Math.random() * 10)); // Hidden digit index
  const arrProgression = getArifmeticalProgression(numberFirst, stepProgression); // Get progression
  const arrQuestion = getArrQuestion(arrProgression, indexHiddenNumber); // Progression for a que-on
  const answer = Number(questionAnswer(arrQuestion)); // Asked question + answer
  const examination = arrProgression[indexHiddenNumber]; // Проверочный ответ [ Test answer ]

  if (checkingTheAnswer(answer, examination) === false) { // Check for failure and victory
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${examination}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  } else if (i === 2) {
    console.log(`Congratulations, ${name}!`);
  }
}
