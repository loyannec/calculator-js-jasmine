class Calculator {
    /*
    The constructor going to take all the inputs for it as well as all the functions for the calculator.
    Where to place the display text for the calculator.
    */
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    /*
    All the operations that the calculator class can come perform according to each button.
    */
    clear() {                           // clear out different variables
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;     // since they dont have any operation selected
    }

    /*
    Removing a single number
    */
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    /*
    All the inner workings of how to set all the values inside of the calculator (appendNumber and chooseOperation).
    */
    appendNumber(number) {              // going to happen every single time a user clicks on a number to add the screen
        if (number === '.' && this.currentOperand.includes('.')) return;
        if (number === '.' && this.currentOperand === '') this.currentOperand = '0';
        // convert to a string just in case it's a number, also appending to the end,
        // because js will try to add as actual numbers it will try to do 1+1=2 instead of 1+1=11
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    /*
    Going to happen anytime a user clicks on one of the operations that the user selected
    */
    chooseOperation(operation) {
        if (this.currentOperand === '' && operation !== '-') {
            this.operation = undefined;
            return;         // if the actual operator is empty this ignore, just return
        }
        if (this.currentOperand === '' && operation === '-') {               // when if the data is empty it saves only the operation
            this.operation = operation;
            return;
        }
        if (this.previousOperand !== '') {
            this.compute()              // will update all the variables as need
        // if there is no operator previously and the save operation is for subtraction, it will add a (-) to the current operand
        } else if (this.operation === '-') {
            this.currentOperand = '-' + this.currentOperand;
        }
        this.operation = operation;      // the calculator will know what operation it needs to use when it computes the value
        this.previousOperand = this.currentOperand;        // done the typing the current number so recycle that over to this previous operand
        this.currentOperand = '';        // will to be equal to an empty string, essentially just to clear out that value of the current operand
    }

    /*
    Going to take values inside of the calculator and compute a single value for what need to display on the calculator
    */
    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch(this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            default:
                return
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    getDisplayNumber(number) {
        /*
        Will take string to turn it into an array the first number in the array is will be the part before the period and the second number is the part after the period.
        What we want to do is we want to get that first part because we want the integer values before that.
        */
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;
        // essentially this will happen anytime someone inputs nothing on the screen or inputs just a decimal place
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
        } if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        // will go to set this equal to an empty string, saving that and doing a calculation just with a simple one-click
        // equal it'll empty out that previous operand value and leave only with our current operand value
        } else {
            return integerDisplay;
        }
    }

    /*
    Going to update the values inside of output and with the operations all defined
    */
    updateDisplay() {
        if (isNaN(this.currentOperand) || !isFinite(this.currentOperand)) {
            this.currentOperandTextElement.innerText = 'Error';            // displays a message when trying to divide by 0
        } else {
            this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
        }
        if (this.operation != null && this.previousOperand !== '') {
            // will be a string that has the operation appended to the end of it
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        } else {
            this.previousOperandTextElement.innerText = '';
        }
    }
}