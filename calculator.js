//global variables
let num1 = '';
let num2 = '';
let operand = '';

function operate (num1, operand, displayValue) {
    let operandIndex = displayValue.indexOf(operand) + 1;
    num2 = displayValue.slice(operandIndex);
    let display = document.querySelector('.display');
    let result = 0;
    switch (operand) {
        case '+':
            return display.textContent = add(num1, num2);
            break;
        case '-':
            return display.textContent = subtract(num1, num2);
            break;
        case '*': 
            return display.textContent = multiply(num1, num2);
            break;
        case '/':
            return display.textContent = divide(num1, num2);
            break;
        case '^':           
            return display.textContent = exponent(num1, num2);
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
    if (value === '+' || value === '-' || value === '*' || value === '/' || value === '^'){
        operand = value;
        num1 = document.querySelector('.display').textContent;
        document.querySelector('.display').textContent += `${value}`;
    } else {
        document.querySelector('.display').textContent += `${value}`;
    }
}

//Event Listeners
const numeric = document.querySelectorAll('.numeric');
numeric.forEach(button => button.addEventListener('click', (e) => changeDisplay(e.target.id)));

const operators = document.querySelectorAll('.operators button');
operators.forEach(operator => operator.addEventListener('click', (e) => changeDisplay(e.target.textContent)));

const equals = document.querySelector('#equals');
equals.addEventListener('click', (e) => operate(num1, operand, document.querySelector('.display').textContent));

const clear = document.querySelector('#clear');
clear.addEventListener('click', reset);

//operator functions
function add (a, b)  {return a + b};
function subtract (a, b)  {return a - b};
function multiply (a, b) {return a * b};
function divide (a, b) {return a / b};
function exponent (a, b) {return Math.pow(a,b)};