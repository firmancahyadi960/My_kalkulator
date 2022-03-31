let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const displayScreen = document.querySelector('.display');

const updateScreen = (number) => {
    displayScreen.value = number;
}

const inputNumber = (number) => {
    if (currentNumber === '0'){
        currentNumber = number;
    }else {
        currentNumber += number;
    }
}

const numbers = document.querySelectorAll("#number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});

// codingan Operator aritmatika
const operators = document.querySelectorAll("#operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    });
});

const inputOperator = (operator) => {
    if (calculationOperator === ''){
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '';
}

// Codingan button equal atau sama dengan
const equalSign = document.querySelector('#equal');

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
});

const calculate = () => {
    let result = '';
    switch(calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(prevNumber) -  parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(prevNumber) *  parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(prevNumber) /  parseFloat(currentNumber);
            break;
        case '%':
            result = parseFloat(prevNumber) %  parseFloat(currentNumber);
            break;
        case '**':
            result = parseFloat(prevNumber) ** parseFloat(currentNumber);
            break;
        // case 'akar':
        //     result = Math.sqrt(parseFloat(prevNumber));
        //     break;
        default:
            break;
    }
    currentNumber = result;
    calculationOperator = '';
}

// codingan Button CLEAR
const clearBtn = document.querySelector('#all-clear');
clearBtn.addEventListener('click',() => {
    clearAll();
    updateScreen(currentNumber);
});

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

// codingan angka desimal
const decimal = document.querySelector('#decimal');

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});

inputDecimal = (dot) => {
    if (currentNumber.includes('.')){
        return;
    }
    currentNumber += dot;
}