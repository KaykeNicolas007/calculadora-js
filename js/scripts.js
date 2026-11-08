class Calculator {
  constructor(previousOperationText, currentOperationText) {
    this.previousOperationText = previousOperationText;
    this.currentOperationText = currentOperationText;
    this.currentOperation = "";
  }

  addDigit(digit) {
    if (this.currentOperationText.innerText.includes(".") && digit === ".")
      return;
    this.currentOperation = digit;
    this.updateScreen();
  }

  updateScreen(
    operationValue = null,
    operation = null,
    current = null,
    previous = null,
  ) {
    if (operationValue === null) {
      this.currentOperationText.innerText += this.currentOperation;
    } else {
      if (previous === 0) {
        operationValue = current;
      }
      this.previousOperationText.innerText = `${operationValue} ${operation}`;
      this.currentOperationText.innerText = "";
    }
  }

  processOperation(operation) {
    if (this.currentOperationText.innerText === "" && operation !== "C") {
      if (this.previousOperationText.innerText !== "") {
        this.changeOperation(operation);
      }
      return;
    }

    let operationValue;
    const previous = +this.previousOperationText.innerText.split(" ")[0];
    const current = +this.currentOperationText.innerText;

    switch (operation) {
      case "+":
        operationValue = previous + current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "-":
        operationValue = previous - current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "*":
        operationValue = previous * current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "/":
        operationValue = previous / current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "DEL":
        this.processDelOperator();
        break;
      case "CE":
        this.processClearOperationOperator();
        break;
      case "C":
        this.processClearAllOperation();
        break;
      case "=":
        this.processEqualOperation();
        break;
      default:
        return;
    }
  }

  changeOperation(operation) {
    const mathOperations = ["+", "-", "*", "/"];

    if (!mathOperations.includes(operation)) return;

    this.previousOperationText.innerText =
      this.previousOperationText.innerText.slice(0, -1) + operation;
  }

  processDelOperator() {
    this.currentOperationText.innerText =
      this.currentOperationText.innerText.slice(0, -1);
  }

  processClearOperationOperator() {
    this.currentOperationText.innerText = "";
  }

  processClearAllOperation() {
    this.previousOperationText.innerText = "";
    this.currentOperationText.innerText = "";
  }

  processEqualOperation() {
    const operation = previousOperationText.innerText.split(" ")[1];
    this.processOperation(operation);
  }
}

const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    const value = event.target.innerText;

    if (+value >= 0 || value === ".") {
      calc.addDigit(value);
    } else {
      calc.processOperation(value);
    }
  });
});
