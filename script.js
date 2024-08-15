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
    
    }
}

// Variables declaration
let firstNumber = '';
let secondNumber = '';
let operator = null;
let opCount = 0;
let solutionFlag = false;
let dotCount = 0;

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
            dotCount = 0;
        }

        //when operators are clicked.
        else if (["+", "-", "/", "*", "="].includes(buttonText)) {
            opCount++;
            // This line stores the first operator except "=". And add it in display.
            if (buttonText !== "=" && opCount === 1) {
                operator = buttonText;
                display.textContent += buttonText;
                //When operator isd clicked flag is reset to false
                solutionFlag = false;
            }

            // The pattern that matches and "=" is clicked, will call operate.
            let regex = /\d{1,10}\.?(\+|-|\*|\/)\d{1,10}/g;
            if (display.textContent.match(regex) && buttonText === "=") {
                let displayValue = display.textContent;

                //Splitting the pattern into array
                let displayStringArray = displayValue.split(operator);

                //Getting first and Second Number
                firstNumber = parseFloat(displayStringArray[0]);
                secondNumber = parseFloat(displayStringArray[1]);

                
                //Calling operate to get the solution and rounding it to 2 decimals
                let solution = operate(operator, firstNumber, secondNumber).toFixed(2);
                display.textContent = solution;
                solutionFlag = true;


                //Setting things for next calculation.
                firstNumber = solution;
                secondNumber = '';
                opCount = 0;

            }

            //Resetting opCount to 0, if "=" is clicked after solution and secondNumber is not typed to match the pattern.
            if (buttonText === "=" && secondNumber === '') {
                opCount = 0;
            }
            
        }
        //Delete feature (backspace)
        else if (buttonText === "DEL") {
            //If length of display content is more than 1 than DEL not work.
            if (display.textContent.length > 1) {
                display.textContent = display.textContent.slice(0, display.textContent.length-1);
            }
           
        }

        //Handling dot , so can not put to dots on a single number
        

        else {
            //Resetting the display to first number after solution, if a number is clicked.
            if (solutionFlag === true) {
                display.textContent = buttonText;
                solutionFlag = false;
            }
            else {
                //If display is "0" at start then put "clicked" number else concate.
                let displayText = display.textContent === '0' ? buttonText : display.textContent + buttonText;
                display.textContent = displayText;
            }  

        }
        
    })
})

