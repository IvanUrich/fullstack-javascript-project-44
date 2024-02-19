#!/usr/bin/env node

import { questionAnswer, 
         checkingTheAnswer, 
         getArifmeticalProgression,
         getArrQuestion } from '../src/index.js';  // Импорт [ Import ]
import { whatIsYourName } from '../src/cli.js';

const name = whatIsYourName();
console.log('What number is missing in the progression?'); // Правила игры [ Rules of the game ]


for (let i = 0; i < 3; i++) { // Цикл на три вопроса  [ A series of three questions ]

    let numberFirst = Math.floor(Math.random() * 100); // Случайное число - начало прогрессии [ Random number - start of progression ]
    let stepProgression = Math.floor(Math.random() * 10 + 0.5); // Шаг прогрессии [ Step progression ]
    let indexHiddenNumber = (Math.floor(Math.random() * 10)); // Индекс скрытой цифры [Hidden digit index ]
    const arrProgression = getArifmeticalProgression(numberFirst, stepProgression); // Получение прогрессии [ Getting progression ]
    const arrQuestion = getArrQuestion(arrProgression, indexHiddenNumber); // Прогрессия для вопроса [ Progression for a question ]
    const answer = Number(questionAnswer(arrQuestion)); // Задаваемый вопрос + ответ [ Asked question + answer ]
    const examination = arrProgression[indexHiddenNumber]; // Проверочный ответ [ Test answer ]
    
    if (checkingTheAnswer(answer, examination) === false) { // Проверка на провал и победу [ Check for failure and victory ]
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${examination}'.`)
        console.log(`Let's try again, ${name}!`);
        break;
    } else if (i === 2) {
        console.log(`Congratulations, ${name}!`);
    }

}