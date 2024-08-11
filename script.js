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


// Defining function to calculate the expression.
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

//Selecting the display element to work it with.
const display = document.querySelector("#display");
// Selecting all the buttons.
const buttons = document.querySelectorAll('button');

//Declaring variable to hold the numbers and operator.
let firstNumber = '';
let secondNumber = '';
let ops = '';

//Declaring a variable to hold display value.
let displayValue;

//Clear feature
function clear(event) {
    if (event.target.textContent === 'AC') {
        display.textContent = "0";
    }
}

// delete feature
function del(event) {
    if (event.target.textContent === "DEL") {
        display.textContent = display.textContent.slice(0, display.textContent.length -4);
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", (e)=> {
        // populate the screen when clicked number is printed ont he screen 
        if (display.textContent === "0") {
            display.textContent = e.target.textContent;
        }
        else {
            display.textContent += e.target.textContent;
        }
        //when operation is clicked , save the number before it in firstNumber
        if (["+", "-", "*", "/"].includes(e.target.textContent)) {
            displayValue = display.textContent;
            firstNumber = displayValue.slice(0, displayValue.length-1);
            ops = e.target.textContent;

        }
        //As "=" is clicked
        if (e.target.textContent === "=") {
            displayValue = display.textContent;
            displayValue = displayValue.slice(0, displayValue.length-1);
            // Splitted the display string on operation
            //saved the operation in ops variable
            let displayArray = displayValue.split(ops);
            //Saved the last element (second number) of the array in secondNumber variable.
            secondNumber = displayArray[displayArray.length-1];
            // Calculate the solution using operate()
            let solution = operate(ops, +firstNumber, +secondNumber);
            //displayed the solution into the display screen.
            display.textContent = solution;
        }
        clear(e);
        del(e);

    })
})











