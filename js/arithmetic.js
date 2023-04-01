let currentInput = "";
let currentOperation = null;
let inputHistory = "";
const input = document.getElementById("input");
const result = document.getElementById("result");



      function appendInput(digit) {
        if (currentInput.length < 12) {
          currentInput += digit;
          document.getElementById("input").value = currentInput;
          updateVisibilityData();
        }
      }
      function appendDecimal() {
        if (!currentInput.includes(".")) {
          currentInput += ".";
          document.getElementById("input").value = currentInput;
        }
      }
      function clearInput() {
        currentInput = "";
        inputHistory = "";
        document.getElementById("input").value = "";
        updateVisibilityData();
      }
      function executeOperation(operation) {
        if (!currentInput.endsWith(".")) {
          inputHistory += `${currentInput} ${operation}`;
        } else {
          inputHistory += `${currentInput} ${operation}`;
        }
        currentInput = "";
        currentOperation = operation;
        updateVisibilityData();
      }

      function removeLastInput() {
        currentInput = currentInput.slice(0, -1);
        inputHistory = inputHistory.slice(0, -1);
        updateVisibilityData();
      }

      function computeResult() {
        const prevInput = parseFloat(inputHistory);
        const currentInputNum = parseFloat(currentInput);
        let result;

        switch (currentOperation) {
          case "+":
            result = (prevInput + currentInputNum) + "\n";
            break;
          case "-":
            result = prevInput - currentInputNum;
            break;
          case "*":
            result = prevInput * currentInputNum;
            break;
          case "/":
            result = prevInput / currentInputNum;
            break;
          case "%":
            result = prevInput / 100;
            break;
          default:
            result = currentInputNum;
            break;
        }
        currentInput = String(result);
        currentOperation = null;
        inputHistory = "";
        if (currentInput.length > 12) {
          currentInput = currentInput.slice(0,12);
        }
        input.innerText = `${currentInput}`;
        document.getElementById("input").value = currentInput;
        updateVisibilityData();
      }
      function updateVisibilityData() {
        inputHistoryDisplay = inputHistory.replace("*", "x").replace("/", " ÷");
        const displayString = `${inputHistoryDisplay} ${currentInput}`;
        document.getElementById("input").innerHTML = displayString;
}