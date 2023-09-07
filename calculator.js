//global variables
let var1 = '';
let num2 = '';
let operand = '';

function operate (var1, operator, displayValue) {
    let num1 = Number(var1);
    let operandIndex = displayValue.indexOf(operator) + 1;
    num2 = Number(displayValue.slice(operandIndex));
    let display = document.querySelector('.display');
    let result = 0;
    switch (operand) {
        case '+':
            operand = '';
            return display.textContent = add(num1, num2);
            break;
        case '-':
            operand = '';
            return display.textContent = subtract(num1, num2);
            break;
        case 'x': 
            operand = '';
            return display.textContent = multiply(num1, num2);
            break;
        case '/':
            operand = '';
            return display.textContent = divide(num1, num2);
            break;
        case '^':
            operand = '';
            return display.textContent = exponent(num1, num2);
    };
}

function reset () {
    document.querySelector('.display').textContent = '';
    var1 = '';
    num2 = '';
    operand = '';
}

function changeDisplay (value) {
    if (operand !== '' && value === '+' || operand !== '' && value === '-' || operand !== '' && value === 'x' || 
        operand !== '' && value === '/' || operand !== '' && value === '^' ) {
            var1 = operate(var1, operand, document.querySelector('.display').textContent);
            document.querySelector('.display').textContent += `${value}`;
            operand = value;
    } else if (value === '+' || value === '-' || value === 'x' || value === '/' || value === '^'){
        operand = value;
        var1 = document.querySelector('.display').textContent;
        document.querySelector('.display').textContent += `${value}`;
    } else {
        document.querySelector('.display').textContent += `${value}`;
    };
}

function remove (string) {
    document.querySelector('.display').textContent = string.slice(0, string.length - 1);
};

//Event Listeners
const numeric = document.querySelectorAll('.numeric');
numeric.forEach(button => button.addEventListener('click', (e) => changeDisplay(e.target.id)));

const operators = document.querySelectorAll('button.operator');
operators.forEach(operator => operator.addEventListener('click', (e) => changeDisplay(e.target.textContent)));

const equals = document.querySelector('#equals');
equals.addEventListener('click', (e) => operate(var1, operand, document.querySelector('.display').textContent));

const clear = document.querySelector('#clear');
clear.addEventListener('click', reset);

const backspace = document.querySelector('#backspace');
backspace.addEventListener('click', (e) => remove (document.querySelector('.display').textContent));

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