//global variables
let num1 = '';
let num2 = '';
let operand = '';

function operate (num1, operand, displayValue) {
    let operandIndex = displayValue.indexOf(`${operand}`) + 1;
    num2 = displayValue.slice(operandIndex);
    let display = document.querySelector('.display');
    let result = 0;
    switch (operand) {
        case '+':
            result = add(num1, num2);
            display.textContent = result;
            return
            break;
        case '-':
            result = subtract(num1, num2);
            display.textContent = result;
            return
            break;
        case '*': 
            result = multiply(num1, num2);
            display.textContent = result;
            return
            break;
        case '/':
            result = divide(num1, num2);
            display.textContent = result;
            return
            break;
        case '^':
            result = exponent(num1, num2);
            display.textContent = result;
            return
    };
}

function reset () {
    let display = document.querySelector('.display');
    display.textContent = '';
    num1 = '0';
    num2 = '0';
    operand = '';
}

function changeDisplay (value) {
    document.querySelector('.display').textContent += value;
    if (value === '+' || value === '-' || value === '*' || value === '/' || value === '^'){
        operand = value;
        num1 = document.querySelector('.display').textContent;
        document.querySelector('.display').textContent += value;
    }
}

//Event Listeners
const numeric = doucment.querySelectorAll('.numeric');
numeric.forEach(button => button.addEventListener('click', (e) => changeDisplay(e.target.value)));

const operators = document.querySelectorAll('.operators button');
operators.forEach(operator => operator.addEventListener('click', (e) => changeDisplay(e.target.value)));

const equals = document.querySelector('#=');
equals.addEventListener('click', operate);

const clear = document.querySelector('#clear');
clear.addEventListener('click', reset);

//operator functions NOT WORKING
function add(a, b) => a + b;
function subtract(a, b) => a - b;
function multiply(a, b) => a * b;
function divide(a, b) => a / b;
function exponent(a, b) => Math.pow(a,b);