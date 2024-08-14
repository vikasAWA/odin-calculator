function operate(opt, x, y) {
    switch (opt) {
        case "+":
            return x + y;
        case "-":
            return x -y;
        case "*":
            return x * y;
        case "/":
            return x / y;
        default:
            return y;
    }
}

let firstNumber = '';
let secondNumber = '';
let operator = null;
let opCount = 0;
let solutionFlag = false;

const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');



buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let buttonText = e.target.textContent;
        
        if (buttonText === "AC") {
            display.textContent = "0";
            firstNumber = "";
            secondNumber = "";
            operator = null;
            opCount = 0;
        }
        else if (["+", "-", "/", "*", "="].includes(buttonText)) {
            opCount++;
            if (buttonText !== "=" && opCount === 1) {
                operator = buttonText;
            }
            display.textContent += buttonText;
            let regex = /\d{1,10}(\+|-|\*|\/)\d{1,10}/g;
            if (display.textContent.match(regex) && buttonText === "=") {
                let displayValue = display.textContent;
                displayValue = displayValue.slice(0, displayValue.length-1);
                let displayStringArray = displayValue.split(operator);
                firstNumber = parseFloat(displayStringArray[0]);
                secondNumber = parseFloat(displayStringArray[1]);

                let solution = operate(operator, firstNumber, secondNumber).toFixed(4);
                display.textContent = solution;

                // if (solution) {
                //     solutionFlag = true;
                //     firstNumber = solution;
                //     operator = null;
                // }

            }
            
            if (opCount >= 2 && secondNumber === '' || buttonText === "=" && secondNumber === '') {
                display.textContent = display.textContent.slice(0, display.textContent.length-1);
                opCount = 0;
            }
            
        }

        else {
            if (solutionFlag === false) {
                let displayText = display.textContent === '0' ? buttonText : display.textContent + buttonText;
                display.textContent = displayText;
            }

        }
        
    })
})

