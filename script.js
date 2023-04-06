let expression = "";

// Function to add value to expression
function addToExpression(button) {
  expression += button.getAttribute("data-value");
  document.getElementById("result").value = expression;
}

// Function to clear expression
function clearExpression() {
  expression = "";
  document.getElementById("result").value = expression;
}

// Function to calculate expression
function calculateExpression() {
  try {
    expression = expression.length < 1 ? "" : eval(expression);
    document.getElementById("result").value = expression;
  } catch (e) {
    alert("Invalid expression");
  }
}
