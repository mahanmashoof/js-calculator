let expression = "";

const addToExpression = (button) => {
  expression += button.getAttribute("data-value");
  document.getElementById("result").value = expression;
};

const delLast = () => {
  expression = expression.substring(0, expression.length - 1);
  document.getElementById("result").value = expression;
};

const clearExpression = () => {
  expression = "";
  document.getElementById("result").value = expression;
};

const calculateExpression = () => {
  try {
    expression = expression.length < 1 ? "" : eval(expression);
    document.getElementById("result").value = expression;
  } catch (e) {
    alert("Invalid expression");
  }
};
