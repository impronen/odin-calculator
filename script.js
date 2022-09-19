// Global variables
let result = "";
let operator = "";

let displayNum = 0;
let memDisplayArray = ["0"];

document.getElementById("currentNumber").innerHTML = displayNum;
document.getElementById("memDisplayArray").innerHTML = memDisplayArray;

//Basic functions
add = (a, b) => {return a + b}
subtract = (a, b) => {return a - b}
multiply = (a, b) => {return a * b}
divide = (a, b) => {return a / b}

//Function to select the operator & move the displayNum & operator to  memDisplayArray
selectOperator = (a) => {operator = a
    
    if (memDisplayArray[0] == ['0']){
    memDisplayArray.shift()
    }
    memDisplayArray.push(displayNum, operator)
    document.getElementById("memDisplayArray").innerHTML = memDisplayArray.join(' ');
    displayNum = 0;
    document.getElementById("currentNumber").innerHTML = displayNum;
}

//Function to take input and operator and do the calculation
function calclulation (displayNum, operator) {
    if (memDisplayArray === 0) {
        memDisplayArray = [];
    }
    memDisplayArray.push(displayNum, operator);
}

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
    if (displayNum === 0){
    displayNum = num;
    
} else {
    displayNum = '' + displayNum + num; //Concatenate 
    let a = parseInt(displayNum); //Convert back to integer
    displayNum = a;
}
document.getElementById("currentNumber").innerHTML = displayNum;
};

//Change negative/positive

function negativePositive(displayNum) {
    if (displayNum < 0) {
        displayNum = Math.abs(displayNum);
        console.log(displayNum);
    } else if (displayNum > 0) {
        displayNum = -displayNum
        console.log(displayNum);
    } else {

    }
    document.getElementById("currentNumber").innerHTML = displayNum;
}

//Clear display
function clearMem(){
    displayNum = 0;
    memDisplayArray = ["0"];
    result = "";
    document.getElementById("currentNumber").innerHTML = displayNum;
    document.getElementById("memDisplayArray").innerHTML = memDisplayArray;
}