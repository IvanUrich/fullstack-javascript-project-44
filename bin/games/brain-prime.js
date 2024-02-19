#!/usr/bin/games/env node

import { questionAnswer, checkingTheAnswer, getYesOrNot } from '../../src/index.js';  // Импорт [ Import ]
import { whatIsYourName } from '../../src/cli.js';

const name = whatIsYourName();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".'); // Правила игры [ Rules of the game ]

for (let i = 0; i < 3; i++) { // Цикл на три вопроса  [ A series of three questions ]

    let number = Math.floor(Math.random() * 100 + 1); // Случайное число от 1 до 100 [ Random number from 1 to 100 ]
    
    const answer = questionAnswer(`${number}`); // Задаваемый вопрос + ответ [ Asked question + answer ]
    const examination = getYesOrNot(number); // Проверочный ответ [ Test answer ]
    
    if (checkingTheAnswer(answer, examination) === false) { // Проверка на провал и победу [ Check for failure and victory ]
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${examination}'.`)
        console.log(`Let's try again, ${name}`);
        break;
    } else if (i === 2) {
        console.log(`Congratulations, ${name}`);
    }
}
