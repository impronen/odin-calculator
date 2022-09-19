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
    if (memDisplayArray[0] == ['0']){memDisplayArray.shift()} //Remove initial value of zero from array  
    if (displayNum === 0){} // Does not add zeroes to memory array
    else {
    displayToMem(displayNum);
    operatorToMem(operator);   
    document.getElementById("currentNumber").innerHTML = displayNum;
    document.getElementById("memDisplayArray").innerHTML = memDisplayArray.join(' '); //Displays the updated array without commas
}
}

//Subfunction to push displayNum value to memDisplayArray
displayToMem = (displayNum) => {memDisplayArray.push(displayNum)}

//Subfunction to push operator value to memDisplayArray
operatorToMem = (operator) => {memDisplayArray.push(operator) 
    displayNum = 0; //Resets to zero in order to take in new number 
}

//Function to take input and operator and do the calculation 
function calculation (memDisplayArray, displayNum) {
    memDisplayArray.push(displayNum)
    document.getElementById("memDisplayArray").innerHTML = memDisplayArray.join(' ');
    let usedArray = memDisplayArray;
    usedArray.forEach(element => {
        console.log(element)
    });
}

//Looping the memory to find Nan values (operators) and using them as a starting point on what to feed to operate function
function loopTheMemory(){
    memDisplayArray.map
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

function negativePositive(num) {
    if (displayNum < 0) {
        num = Math.abs(displayNum);
        displayNum = num
    } else if (displayNum > 0) {
        num = -displayNum
        displayNum = num
    } else {}
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