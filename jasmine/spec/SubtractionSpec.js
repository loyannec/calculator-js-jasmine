describe("Subtraction test suite", function() {
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

    it('should return 5 if append 8 and 3', function() {
        calculator.appendNumber(8);
        calculator.chooseOperation('-');
        calculator.appendNumber(3);
        calculator.compute();
        calculator.updateDisplay();
        expect(currentOperandElement.innerText).toEqual('5');
    });

    it('should return 4 if append 5.5 and 1.5', function() {
        calculator.appendNumber(5.5);
        calculator.chooseOperation('-');
        calculator.appendNumber(1.5);
        calculator.compute();
        calculator.updateDisplay();
        expect(currentOperandElement.innerText).toEqual('4');
    });

    it('should return 0 when value 0 and 0', function() {
        calculator.appendNumber(0);
        calculator.chooseOperation('-');
        calculator.appendNumber(0);
        calculator.compute();
        calculator.updateDisplay();
        expect(currentOperandElement.innerText).toEqual('0');
    });
});
