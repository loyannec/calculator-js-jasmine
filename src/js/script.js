class Calculator {
    /*
    The constructor going to take all the inputs for it as well as all the functions for the calculator
    Where to place the display text for the calculator
    */
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    /*
    All the operations that the calculator class can come perform according to each button
    */
    clear() {                           // clear out different variables
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;     // since they dont have any operation selected
    }

    delete() {                          // removing a single number

    }

    appendNumber(number) {              // going to happen every single time a user clicks on a number to add the screen
        if (number === '.' && this.currentOperand.includes('.')) return
        //convert to a string just in case it's a number, also appending to the end,
        // because js will try to add as actual numbers it will try to do 1+1=2 instead of 1+1=11
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {        // going to happen anytime a user clicks on one of the operations that the user selected

        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {                         // going to take values inside of the calculator and compute a single value for what need to display on the calculator

    }

    updateDisplay() {                   // going to update the values inside of output and with the operations all defined
        this.currentOperandTextElement.innerText = this.currentOperand;
        this.previousOperandTextElement.innerText = this.previousOperand;
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-equals]');
const allClearsButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {                  // loop over all the different buttons
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()           // will be constantly updated every time when click on a button down
    })
})

operationButtons.forEach(button => {                  // loop over all the different buttons
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()           // will be constantly updated every time when click on a button down
    })
})
