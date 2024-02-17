import readlineSync from "readline-sync";

const readlineSync = require('readline-sync');
const name = readlineSync.question('What is your name? ');
console.log(`Hello, ${name}!`);