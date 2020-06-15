describe("Division test suite", function() {
    class MockOperandElement {
        constructor () {
            this.innerText = '';
        }
    }

    var previousOperandElement;
    var currentOperandElement;
    var calculator;

    beforeEach(function() {
        previousOperandElement = new MockOperandElement();
        currentOperandElement = new MockOperandElement();
        calculator = new Calculator(previousOperandElement, currentOperandElement);
    })

    it('should return 2 if append 6 and 3', function() {
        calculator.appendNumber(6);
        calculator.chooseOperation('÷');
        calculator.appendNumber(3);
        calculator.compute();
        calculator.updateDisplay();
        expect(currentOperandElement.innerText).toEqual('2');
    });

    it('should return 1.5 if append 4.5 and 3', function() {
        calculator.appendNumber(4.5);
        calculator.chooseOperation('÷');
        calculator.appendNumber(3);
        calculator.compute();
        calculator.updateDisplay();
        expect(currentOperandElement.innerText).toEqual('1.5');
    });

    it('should return "Error" when value 0 and 0', function() {
        calculator.appendNumber(0);
        calculator.chooseOperation('÷');
        calculator.appendNumber(0);
        calculator.compute();
        calculator.updateDisplay();
        expect(currentOperandElement.innerText).toEqual('Error');
	});

	it('should return "Error" when divide for 0', function() {
        calculator.appendNumber(5);
        calculator.chooseOperation('÷');
        calculator.appendNumber(0);
        calculator.compute();
        calculator.updateDisplay();
        expect(currentOperandElement.innerText).toEqual('Error');
    });
});
