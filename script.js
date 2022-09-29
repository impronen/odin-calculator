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
    else if (memDisplayArray[1] === operator){ // If operator has been declared
    calculate()
    operator = a
    operatorToMem(operator);
    } else { //If no operator has been declared, ie. the user has entered one number and presses operator
    operator = a
    displayToMem(displayNum);
    operatorToMem(operator);
    document.getElementById("currentNumber").innerHTML = displayNum;
    document.getElementById("memDisplayArray").innerHTML = memDisplayArray.join(' '); //Displays the updated array without commas
}}

//Calculate 
function calculate() {
    displayToMem(displayNum); 
    populateOperate();
    operate(operator, num1, num2);
    if (Number.isInteger(result) === false) {
        result = result.toFixed(2) //Rounding to 2 decimal places
    }
    displayNum = result
    document.getElementById("currentNumber").innerHTML = displayNum;
    document.getElementById("memDisplayArray").innerHTML = (`${num1} ${operator} ${num2} = ${result}`)
    resetActiveNumbers();
    memDisplayArray = [];
}

function equals() {
    calculate()
}

//Function to populate variables used in operate() function with values from memDisplayArray
function populateOperate() {
    num1 = memDisplayArray[0]
    operator = memDisplayArray[1]
    num2 = memDisplayArray[2] 
    console.log(num1, operator, num2)
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
    } else if (displayNum === result) {
    displayNum = num;
    }else {
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
    resetActiveNumbers()
    displayNum = 0;
    memDisplayArray = [];
    result = "";
    document.getElementById("currentNumber").innerHTML = displayNum;
    document.getElementById("memDisplayArray").innerHTML = memDisplayArray;
}

//Function to reset num1, num2 and operator
function resetActiveNumbers(){
    num1 = 0;
    num2  = 0;
    operator = "";
}

//Subfunction to push displayNum value to memDisplayArray
displayToMem = (displayNum) => {memDisplayArray.push(displayNum)}

//Subfunction to push operator value to memDisplayArray
operatorToMem = (operator) => {memDisplayArray.push(operator) 
    displayNum = 0; //Resets to zero in order to take in new number 
}


//Change of color for operator buttons (unfinishedcd)


/* function addClassOnSelection() {
    let rightButton = document.getElementsByClassName('RightButton');
    rightButton.classList.add("selectedButton");
}; */


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