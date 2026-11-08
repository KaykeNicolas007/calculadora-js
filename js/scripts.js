class Calculator {
  constructor(previousOperationText, currentOperationText) {
    this.previousOperationText = previousOperationText;
    this.currentOperationText = currentOperationText;
    this.currentOperation = "";
  }

  addDigit(digit) {
    this.currentOperation = digit;
    this.updateScreen();
  }

  updateScreen() {
    this.currentOperationText.innerText += this.currentOperation;
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
      console.log("operação");
    }
  });
});
