// argv0 = node process, argv1 = file name
// parseInt takes the string you pass into it and attempts to make it a number
// can also do const num1 = parseInt(process.argv[2]); Number() works better here because it's super obvious why you've used it
console.log(process.argv);

const num1 = Number(process.argv[2]);
const operator = process.argv[3];
const num2 = Number(process.argv[4]);

function operate(number1, number2, operator) {
    // switch case is a tool if you know it will be this or this or this (specific things) - should include a default
    switch(operator) {
        case '+': {
            return number1 + number2;
        }
        case '-': {
            return number1 - number2;
        }
        case '*': {
            return number1 * number2;
        }
        case '/': {
            return number1 / number2;
        }
        default: {
            throw new Error('I don\'t know what to do!');
        }
    }
}

// function sum(num1, num2) {
//     return num1 + num2;
// }

const result = operate(num1, num2, operator);

console.log(result);