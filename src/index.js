import readlineSync from "readline-sync"; // Импорт [ Import ]

export const questionAnswer = (number) => { // Вопрос ответ [ Question answer ]
    console.log(`Question: ${number}`); 
    const answer = readlineSync.question('Your answer: '); // Запрос ответа [ Request a response ]
    return answer;
};

export const checkingTheAnswer = (answer, examination) => { // Проверка ответа [ Checking the answer ]
    if (answer === examination) {
        console.log('Correct!');
        return true;
    } else {
        return false;
    }
    
};