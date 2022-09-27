// Global variables
let result = "";
let operator = "";

let displayNum = 0;
let memDisplayArray = [];

let num1 = 0;
let num2  = 0;
let results = 0;

document.getElementById("currentNumber").innerHTML = displayNum;
document.getElementById("memDisplayArray").innerHTML = memDisplayArray;

//Basic functions
add = (a, b) => {return a + b}
subtract = (a, b) => {return a - b}
multiply = (a, b) => {return a * b}
divide = (a, b) => {return a / b}

//Function to select the operator & move the displayNum & operator to  memDisplayArray
selectOperator = (a) => {
    
    if (memDisplayArray[0] == []){} //Remove initial value of zero from array  
    if (displayNum === 0){} // Does not add zeroes to memory array
    if (memDisplayArray[2] === []) {
        // make something that just updates the array / or display with resul + operator
    } 
    
    else if (memDisplayArray[1] === operator){ // If operator has been declared
    console.log("ELSE IF")
    calculate()
    operator = a
    operatorToMem(operator);
    }
    else { console.log("ELSE")
    operator = a
    displayToMem(displayNum);
    operatorToMem(operator);
    document.getElementById("currentNumber").innerHTML = displayNum;
    document.getElementById("memDisplayArray").innerHTML = memDisplayArray.join(' '); //Displays the updated array without commas
}}

//Subfunction to push displayNum value to memDisplayArray
displayToMem = (displayNum) => {memDisplayArray.push(displayNum)}

//Subfunction to push operator value to memDisplayArray
operatorToMem = (operator) => {memDisplayArray.push(operator) 
    displayNum = 0; //Resets to zero in order to take in new number 
}

//Calculate 

function calculate() {
    displayToMem(displayNum); 
    populateOperate();
    operate(operator, num1, num2);
    displayNum = result
    document.getElementById("currentNumber").innerHTML = displayNum;
    document.getElementById("memDisplayArray").innerHTML = (`${num1} ${operator} ${num2} = ${result}`)
    resetActiveNumbers();
    memDisplayArray.splice(0, 1, result); //Splice the result as the index [0] of the array. 
    memDisplayArray.splice(1, 5); //Clears the rest of the array
    
}


function populateOperate() {
    num1 = memDisplayArray[0]
    operator = memDisplayArray[1]
    num2 = memDisplayArray[2] 
    console.log(num1, operator, num2)
}

//Function to reset num1, num2 and operator
function resetActiveNumbers(){
    num1 = 0;
    num2  = 0;
    operator = "";
}

// Function to call calculations by operator
function operate(operator, num1, num2){
switch (operator) {
    case "+":
        result = add(num1, num2);
        break;
    case "-":
        result = subtract(num1, num2);
        break;
    case "x":
        result = multiply(num1, num2);
        break;
    case "/":
        result = divide(num1, num2);
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
    displayToMem(displayNum);
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
    resetActiveNumbers()
    displayNum = 0;
    memDisplayArray = [];
    result = "";
    document.getElementById("currentNumber").innerHTML = displayNum;
    document.getElementById("memDisplayArray").innerHTML = memDisplayArray;
}

/* //Looping the memory to find  values to feed to operate function
function loopTheMemory(memDisplayArray){
        results = memDisplayArray.reduce((endResult, arrayItem) => {
            console.log(endResult)
            if (Number.isInteger(arrayItem) && endResult === 0) num1 = arrayItem
            else if (Number.isInteger(arrayItem)) num2 = arrayItem
            else operator = arrayItem
            operate(operator, num1, num2)
        }, 0)
        console.log(num1, operator, num2)
        displayNum = result
        document.getElementById("currentNumber").innerHTML = displayNum;
        
} */