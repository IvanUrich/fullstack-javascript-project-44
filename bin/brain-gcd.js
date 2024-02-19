#!/usr/bin/env node

import { questionAnswer, checkingTheAnswer, gcd } from '../src/index.js';  // Импорт [ Import ]
import { whatIsYourName } from '../src/cli.js';

const name = whatIsYourName();
console.log('Find the greatest common divisor of given numbers.'); // Правила игры [ Rules of the game ]

for (let i = 0; i < 3; i++) { // Цикл на три вопроса  [ A series of three questions ]

    let numberFirst = Math.floor(Math.random() * 100); // Случайное число от 1 до 100 [ Random number from 1 to 100 ]
    let numberSecond = Math.floor(Math.random() * 100); // Случайное число от 1 до 100 [ Random number from 1 to 100 ]

    const answer = Number(questionAnswer(`${numberFirst} ${numberSecond}`)); // Задаваемый вопрос + ответ [ Asked question + answer ]
    const examination = gcd(numberFirst, numberSecond); // Проверочный ответ НОД [ Test answer GCD ]

    if (checkingTheAnswer(answer, examination) === false) { // Проверка на провал и победу [ Check for failure and victory ]
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${examination}'.`)
        console.log(`Let's try again, ${name}!`);
        break;
    } else if (i === 2) {
        console.log(`Congratulations, ${name}!`);
    }
}