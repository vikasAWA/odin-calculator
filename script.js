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

function operate(operation, x, y) {
    switch(operation) {
        case "+":
            return add(x, y);

        case "-":
            return subtract(x, y);

        case "X":
            return multiply(x, y);

        case "/":
            return divide(x, y);
    }
}

