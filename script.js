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

let eventCount = 0;

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        eventCount += 1;
        if (eventCount === 1 && !isNaN(e.target.textContent) ) {
            display.textContent = e.target.textContent;
        }
        else if (e.target.textContent === ".") {
            display.textContent = "0."
        }
        
        else {
            display.textContent += e.target.textContent;
            if (["+", "-", "/", "*"].includes(e.target.textContent)) {
                ops = e.target.textContent;
                ["+", "-", "/", "*"].forEach((item) => {
                    if (e.target.textContent === item) {
                        e.target.disabled = true;
                    }
                } )
                
            }
            if (e.target.textContent === "=") {
                displayValue = display.textContent.slice(0, display.textContent.length-1);
                let displayArray = displayValue.split(ops);
                firstNumber = displayArray[0];
                secondNumber = displayArray[1];
                let solution = operate(ops, +firstNumber, +secondNumber);
                display.textContent = solution;
            }
            
        }

    })
})

//weird behaviors 
//1. After the solution display the clicked number keep concating with soluion.
//2. After solution if "=" is clicked it keep adding solution with firstNumber
//3. Even in starting operations can be displayed in screen.
//4.if 0, it does not take operations 











