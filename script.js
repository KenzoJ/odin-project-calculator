const btn1 = document.querySelector("#btn1")


function add(a, b) {return a + b}

function subtract(a, b) {return a - b}

function multiply(a, b) {return a * b}

function divide(a, b) {return a / b}

function operate(operator, num1, num2) {
    
    if (operator === "+") {
        return add(num1, num2)
    } else if (operator === "-") {
        return subtract(num1, num2)
    } else if (operator === "*") {
        return multiply(num1, num2)
    } else if (operator === "/") {
        return divide(num1, num2)
    } return "error"
}

function clearTerminal() {
    console.log("cleared!")
}



/* let num1 = parseInt(prompt("number 1"), 10)
let operator = prompt("operator")
let num2 = parseInt(prompt("number 2"), 10)
console.log(operate(operator, num1, num2))
 */