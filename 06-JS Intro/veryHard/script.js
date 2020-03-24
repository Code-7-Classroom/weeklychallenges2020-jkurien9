var Num1 = prompt ("Enter A Number");
var Num2 = prompt ("Enter Another Number");
var Operator = prompt ("Please Enter An Operator");

function add(Num1, Num2) {
    return Num1 + Num2;
}

function subtract(Num1, Num2) {
    return Num1 - Num2;
}

function multiply(Num1, Num2) {
    return Num1 * Num2;
}

function divide(Num1, Num2) {
    return Num1 / Num2;
}

switch(inputOperator.toString()){
  case '+':
    console.log(parseInt(inputNum1) + parseInt(inputNum2));
    break;
  case '-':
    console.log(parseInt(inputNum1) - parseInt(inputNum2));
    break;
  case '*':
    console.log(parseInt(inputNum1) * parseInt(inputNum2));
    break;
  case '/':
    console.log(parseInt(inputNum1) / parseInt(inputNum2));
    break;
}