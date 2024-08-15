// Declaring function to get solution of expression
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

// Variables declaration
let firstNumber = '';
let secondNumber = '';
let operator = null;
let opCount = 0;
let solutionFlag = false;

//Selecting display by Id and all buttons by button element
const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');


//Looping through all the buttons
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let buttonText = e.target.textContent;
        
        // Reset when clicked "AC".
        if (buttonText === "AC") {
            display.textContent = "0";
            firstNumber = "";
            secondNumber = "";
            operator = null;
            opCount = 0;
        }

        //when operators are clicked.
        else if (["+", "-", "/", "*", "="].includes(buttonText)) {
            opCount++;
            // This line stores the first operator except "=". And add it in display.
            if (buttonText !== "=" && opCount === 1) {
                operator = buttonText;
                display.textContent += buttonText;
            }

            // The pattern that matches and "=" is clicked, will call operate.
            let regex = /\d{1,10}(\+|-|\*|\/)\d{1,10}/g;
            if (display.textContent.match(regex) && buttonText === "=") {
                let displayValue = display.textContent;

                //Splitting the pattern into array
                let displayStringArray = displayValue.split(operator);

                //Getting first and Second Number
                firstNumber = parseFloat(displayStringArray[0]);
                secondNumber = parseFloat(displayStringArray[1]);

                //Calling operate to get the solution
                let solution = operate(operator, firstNumber, secondNumber).toFixed(4);
                display.textContent = solution;
                solutionFlag = true;
                firstNumber = solution;
                opCount = 0;

            }
            
            // if (opCount >= 2 && solutionFlag) {
            //     display.textContent + display.textContent.slice(0, display.textContent.length-1);
            //     opCount = 0;
            // }  
        }



        else {
            let displayText = display.textContent === '0' ? buttonText : display.textContent + buttonText;
            display.textContent = displayText;

        }
        
    })
})

