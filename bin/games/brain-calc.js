#!/usr/bin/games/env node

import { questionAnswer, checkingTheAnswer } from '../../src/index.js';  // Импорт [ Import ]
import { whatIsYourName } from '../../src/cli.js';

const name = whatIsYourName();
console.log('What is the result of the expression?'); // Правила игры [ Rules of the game ]
const operator = ['+', '-', '*'];

for (let i = 0; i < 3; i++) { // Цикл на три вопроса  [ A series of three questions ]

    let numberFirst = Math.floor(Math.random() * 100); // Случайное число от 1 до 100 [ Random number from 1 to 100 ]
    let numberSecond = Math.floor(Math.random() * 100); // Случайное число от 1 до 100 [ Random number from 1 to 100 ];
    let indexOperand = Math.abs(Math.floor((Math.random() * 10) / 3 - 1)); // Индекс оператора [ Operator index ]

    const answer = Number(questionAnswer(`${numberFirst} ${operator[indexOperand]} ${numberSecond}`)); // Задаваемый вопрос + ответ [ Asked question + answer ]
    const examination = eval(`${numberFirst} ${operator[indexOperand]} ${numberSecond}`); // Проверочный ответ [ Test answer ]
    
    if (checkingTheAnswer(answer, examination) === false) { // Проверка на провал и победу [ Check for failure and victory ]
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${examination}'.`)
        console.log(`Let's try again, ${name}!`);
        break;
    } else if (i === 2) {
        console.log(`Congratulations, ${name}!`);
    }
}
