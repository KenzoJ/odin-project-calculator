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
    operators.forEach(operator => {
        operator.classList?.remove("clicked")
    })
    firstNum = 0
    secondNum = 0
}

function checkNum(number) {
    if (parseInt(number, 10) > 0) {
        return number
    } else {
        console.log("success")
        clearTerminal()
    } 
}

function main() {
    equals.disabled = true
    //allow screen first num
    buttons.forEach(button => {
        button.addEventListener("click", event => {
            if (bottomScreen.textContent.length < 12) {
                bottomScreen.textContent = bottomScreen.textContent + event.currentTarget.innerText
            }
        })
    })

    //store operator pressed
    //move first number to second screen
    //clear current numbers
    operators.forEach(operator => {
        operator.addEventListener("click", event => {
            operator.classList.add("clicked")
           let currentOperator = event.currentTarget.innerText
           let firstNum = parseInt(bottomScreen.textContent, 10)
           topScreen.textContent = firstNum
           bottomScreen.textContent = ""
           equals.disabled = false
           equals.addEventListener("click", () => {
                operator.classList.remove("clicked")
                let checkedFirstNum = checkNum(bottomScreen.textContent)
                let secondNum = parseInt(checkedFirstNum, 10)
                let answer = operate(currentOperator, firstNum, secondNum)
                console.log("answer: " + answer)
                if (answer === !NaN || answer == !undefined || answer) {
                    bottomScreen.textContent = answer.toString().slice(0, 12)
                    topScreen.innerHTML = `&nbsp`
                } else {
                    topScreen.innerHTML = `&nbsp`
                    bottomScreen.textContent = "Err"

                }
            
    }) })})
    
    //puts first number and second number 
    //in correct place and returns final result
    
    
}

main()