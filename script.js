class Calculator {
  constuctor(prevOperandField, curOperandField) {
    this.prevOperandField = prevOperandField;
    this.curOperandField = curOperandField;
    this.clear();
  }
  clear() {
    this.curOperand = "";
    this.prevOperand = "";
    this.operation = undefined;
  }
  delete() {}
  appendNum(number) {}
  chooseOperation(operation) {}
  compute() {}
  updateDisp() {}
}

const numberButtons = document.querySelectorAll(["data-num"]);
const operationButtons = document.querySelectorAll(["data-op"]);
const acButton = document.querySelector(["data-ac"]);
const delButton = document.querySelector(["data-del"]);
const equalButton = document.querySelector(["data-eql"]);
const prevOperandField = document.querySelector(["data-prev-op"]);
const curOperandField = document.querySelector(["data-cur-op"]);
