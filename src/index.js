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

export const gcd = (a, b) => { // Наибольший Общий Делитель  [ Greatest Common Divisor ]
    let i = a;
      while (a % i !== 0 || b % i !== 0) {
      i = i - 1;
      }
      return i;
};