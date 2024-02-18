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

export const getArifmeticalProgression = (number, step) => { // Создание арифметической прогрессии [ Creating an Arithmetic Progression ]
    const arr = [number];
    for (let i = 1; i < 10; i++) {
        arr[i] = number + step;
        number += step;
    }
    return arr;
};

export const getArrQuestion = (arr, index) => { // Переделка прогрессии для вопроса [ Reworking the progression for the question ]
    const arrNew = [];
    for (let i = 0; i < arr.length; i++) { // Новый массив - копия [ new array - copy ]
    arrNew[i] = arr[i];    
    }
    arrNew[index] = ".."; // Скрытие искомого числа [ Hiding the searched number ]
    const question = arrNew.join(' '); // Разделитель [ Delimiter ]
    return question;
};