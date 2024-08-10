function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y
}

function divide(x, y) {
    return x / y;
}

let firstNumber, secondNumber, ops;

function operate(operation, x, y) {
    switch(operation) {
        case "+":
            return add(x, y);

        case "-":
            return subtract(x, y);

        case "*":
            return multiply(x, y);

        case "/":
            return divide(x, y);
    }
}

const display = document.querySelector("#display");

const buttons = document.querySelectorAll('button');

function del(str) {
    return str.slice(0, str.length-1)
}




