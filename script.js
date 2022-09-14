// Global variables
let result = "";

let displayNum = 0;
let memDisplayArray = ["0"];

document.getElementById("currentNumber").innerHTML = displayNum;
document.getElementById("memDisplayArray").innerHTML = memDisplayArray;

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

//Function to populate display w/ chosen digit
function populateDisp(num) {
    displayNum = num;
    document.getElementById("currentNumber").innerHTML = displayNum;
}