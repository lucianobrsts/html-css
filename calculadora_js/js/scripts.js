const previousOperationText = document.querySelector("#previous-operation")
const currentOperationText = document.querySelector("#current-operation")
const buttons = document.querySelectorAll("#buttons-container button")

class Calculator {
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
    }

    // add digit to calculator screen
    addDigit(digit) {
        // check if current operation already has a dot
        if(digit === "." && this.currentOperationText.innerText.includes(".")) {
            return;
        }
        this.currentOperation = digit
        this.updatescreen()
    }

    // Process all calculator operation
    processOperation(operation) {
        // Get current and previos values
        let operationValue;
        const previous = +this.previousOperationText.innerText.split(" ")[0];
        const current = +this.currentOperationText.innerText

        switch(operation) {
            case "+":
                operationValue = previous + current;
                this.updatescreen(operationValue, operation, current, previous);
                break;
            default:
                return;
        }
    }

    // change values of the calculator screen
    updatescreen(
        operationValue = null,
        operation = null,
        current = null,
        previous = null
    ) {
        console.log(operationValue, operation, current, previous)

        if(operationValue === null) {
            this.currentOperationText.innerText += this.currentOperation;
        } else {
            // check if value is zero, if it is just add current value
            if(previous === 0) {
                operationValue = current
            }
            // add current value to previous
            this.previousOperationText.innerText = `${operationValue} ${operation}`
            this.currentOperationText.innerText = "";
        }
    }
}

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

       if(+value >= 0 || value === ".") {
        calc.addDigit(value);
       } else {
        calc.processOperation(value);
       }
    })
})
