const equals = document.querySelector("#equals");
const screen = document.querySelector("#screen")
const buttons = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")

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
    screen.textContent = "0"
}

buttons.forEach(button => {
    button.addEventListener("click", event => {
        screen.textContent = screen.textContent + event.currentTarget.innerText
    })
})

equals.addEventListener("click", () => {
    operate()
})


operators.forEach(operator => {
    operator.addEventListener("click", event => {
       event.currentTarget.innerText

    })
})


/* let num1 = parseInt(prompt("number 1"), 10)
let operator = prompt("operator")
let num2 = parseInt(prompt("number 2"), 10)
console.log(operate(operator, num1, num2))
 */