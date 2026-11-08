class Calculator {
  constructor(previousOperationText, currentOperationText) {
    this.previousOperationText = previousOperationText;
    this.currentOperationText = currentOperationText;
    this.currentOperation = "";
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
      console.log("numero");
    } else {
      console.log("operação");
    }
  });
});
