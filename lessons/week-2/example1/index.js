// Because we created this module, we have to give the absolute path
const operators = require('./calc2');

const num1 = 4;
const num2 = 2;

const result = operators.multiply(num1, num2);

console.log(result);

// In Node, usually have an index.js as the singular point/beginning of something (like app.js for React)

//////////

const randomStuff = require('./names');

// const name = randomName.pickName();
// console.log(name);

const coolSentence = randomStuff.generateSentence();
console.log(coolSentence);

const uptime = randomStuff.uptime() / 60 / 60 / 24;
console.log(uptime);