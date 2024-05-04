const equals = document.querySelector("#equals");
const topScreen = document.querySelector("#top-screen")
const bottomScreen = document.querySelector("#bottom-screen")
const buttons = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")

function operate(operator, num1, num2) {
    if (operator === "+") {
        return num1 + num2
    } else if (operator === "-") {
        return num1 - num2
    } else if (operator === "*") {
        return num1 * num2
    } else if (operator === "/") {
        return num1 / num2
    } 
}

//clears terminal with C
function clearTerminal() {
    bottomScreen.textContent = ""
    topScreen.textContent = ""
    
}


function main() {
    //allow screen first num
    buttons.forEach(button => {
        button.addEventListener("click", event => {
            bottomScreen.textContent = bottomScreen.textContent + event.currentTarget.innerText
        })
    })

    //store operator pressed
    //move first number to second screen
    //clear current numbers
    operators.forEach(operator => {
        operator.addEventListener("click", event => {
           let currentOperator = event.currentTarget.innerText
           let firstNum = parseInt(bottomScreen.textContent, 10)
           topScreen.textContent = firstNum + currentOperator
           bottomScreen.textContent = ""
           equals.addEventListener("click", () => {
            let secondNum = parseInt(bottomScreen.textContent, 10)
            bottomScreen.textContent = operate(currentOperator, firstNum, secondNum)
            topScreen.innerHTML = `&nbsp`
            firstNum = 0
            secondNum = 0
        })
    })})
    
    //puts first number and second number 
    //in correct place and returns final result
    
    
}

main()