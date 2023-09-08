//global variables
let var1 = '';
let num2 = '';
let operand = '';

function operate (var1, operator, displayValue) {
    let num1 = Number(var1);
    let operandIndex = displayValue.indexOf(operator) + 1;
    num2 = Number(displayValue.slice(operandIndex));
    let result = 0;
    switch (operand) {
        case '+':
            operand = '';
            return display.value = add(num1, num2);
            break;
        case '-':
            operand = '';
            return display.value = subtract(num1, num2);
            break;
        case 'x': 
            operand = '';
            return display.value = multiply(num1, num2);
            break;
        case '/':
            operand = '';
            return display.value = divide(num1, num2);
            break;
        case '^':
            operand = '';
            return display.value = exponent(num1, num2);
    };
}

function reset () {
    display.value = '';
    var1 = '';
    num2 = '';
    operand = '';
}

function changeDisplay (key) {

    if (operand !== '' && key === '+' || operand !== '' && key === '-' || operand !== '' && key === 'x' || 
        operand !== '' && key === '/' || operand !== '' && key === '^' ) {
            var1 = operate(var1, operand, display.value);
            display.value += `${key}`;
            operand = key;
    } else if (key === '+' || key === '-' || key === 'x' || key === '/' || key === '^'){
        operand = key;
        var1 = display.value;
        display.value += `${key}`;
    } else {
        display.value += `${key}`;
    };
}

function remove (string) {
    display.value = string.slice(0, string.length - 1);
};

//Event Listeners
const display = document.querySelector('.display');

const numeric = document.querySelectorAll('.numeric');
numeric.forEach(button => button.addEventListener('click', (e) => changeDisplay(e.target.id)));

const operators = document.querySelectorAll('button.operator');
operators.forEach(operator => operator.addEventListener('click', (e) => changeDisplay(e.target.textContent)));

const equals = document.querySelector('#equals');
equals.addEventListener('click', (e) => operate(var1, operand, display.value));

const clear = document.querySelector('#clear');
clear.addEventListener('click', reset);

const backspace = document.querySelector('#backspace');
backspace.addEventListener('click', (e) => remove (display.value));

//operator functions
function add (a, b)  {return a + b};
function subtract (a, b)  {return a - b};
function multiply (a, b) {return a * b};
function divide (a, b) {
    if(b === 0) {
        return 'Err';
    }
    else{
        return a / b;
    };
};
function exponent (a, b) {return Math.pow(a,b)};

//keyboard support
display.addEventListener('keydown', (e) => checkKeyValue(e));

function checkKeyValue(key) {
    let value = key.key;
    let numbersOperators = '1234567890*/+-^.';
    if(!numbersOperators.includes(value)) {
        key.preventDefault();
    };
    if(value === 'Backspace'){
        remove(display.value);
    };
}