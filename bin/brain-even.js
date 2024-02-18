#!/usr/bin/env node

import { whatIsYourName } from '../src/cli.js'; // Импорт [ Import ]
import readlineSync from "readline-sync";

const name = whatIsYourName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let number = 0;

for (let i = 1; i <= 3; i++) { // Цикл на три вопроса  [ A series of three questions ]

    number = Math.floor(Math.random() * 100); // Случайное число от 1 до 100 [ Random number from 1 to 100 ]
    console.log(`Question: ${number}`); 
    const answer = readlineSync.question('Your answer: '); // Запрос ответа [ Request a response ]

    switch (answer) { // Обсчет логики ответа [ Calculation of response logic ]
        case 'yes': 
            if (number % 2 === 0) {
                console.log('Correct!');
            } else {
                console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}`);
                i = 5;
            }
            break;
        case 'no':
            if (number % 2 !== 0) {
                console.log('Correct!');
            } else {
                console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}`);
                i = 5;
            }
            break;
        default:
            console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}`);
            i = 5;
    }
    if (i !== 5) { // Проверка на провал [ Check for failure ]
        console.log(`Congratulations, ${name}`);
    }
}