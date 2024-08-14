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
        }
        else {
            let displayText = display.textContent === '0' ? buttonText : display.textContent + buttonText;
            display.textContent = displayText;
        }
        
    })
})

