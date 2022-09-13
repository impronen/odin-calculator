// Global variables
let result = "";

//Basic functions
function add(a, b) {return a + b}

function subtract(a, b) {return a - b}

function multiply(a, b) {return a * b}

function divide(a, b) {return a / b}

// Function to call calculations by operator
function operate(operator){
switch (operator) {
    case "+":
        result = add(a, b);
        break;
    case "-":
        result = subtract(a, b);
        break;
    case "*":
        result = multiply(a, b);
        break;
    case "/":
        result = divide(a, b);
        break;
}
return result
}
