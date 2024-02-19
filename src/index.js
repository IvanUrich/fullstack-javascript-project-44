/* eslint-disable no-param-reassign */

import readlineSync from 'readline-sync'; // Import

export const questionAnswer = (number) => { // Question answer
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: '); // Request a response
  return answer;
};

export const checkingTheAnswer = (answer, examination) => { // Checking the answer
  if (answer === examination) {
    console.log('Correct!');
    return true;
  }
  return false;
};

export const gcd = (a, b) => { // Greatest Common Divisor
  let i = a;
  while (a % i !== 0 || b % i !== 0) {
    i -= 1;
  }
  return i;
};

export const getArifmeticalProgression = (number, step) => { // Creating an Arithmetic Progression
  const arr = [number];
  for (let i = 1; i < 10; i += 1) {
    arr[i] = number + step;
    number += step;
  }
  return arr;
};

export const getArrQuestion = (arr, index) => { // Reworking the progression for the question
  const arrNew = [];
  for (let i = 0; i < arr.length; i += 1) { // new array - copy
    arrNew[i] = arr[i];
  }
  arrNew[index] = '..'; // Hiding the searched number
  const question = arrNew.join(' '); // Delimiter
  return question;
};

export const getYesOrNot = (number) => { // The answer to "Is it just a number?"
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
