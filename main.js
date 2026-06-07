let display = document.querySelector("#display");
let numberOne = 0;
let numberTwo = 0;
let secondNumber = false;
let operationSelected = document.querySelector(".function");
function initializeNumbers() {
    let numbers = document.querySelectorAll(".number");
    for (let number of numbers) {
        number.addEventListener("click", () => {
            if (!secondNumber) {
                numberOne = (numberOne * 10) + Number(number.textContent);
                display.textContent = numberOne;
            }
            else {
                numberTwo = (numberTwo * 10) + Number(number.textContent);
                display.textContent = numberTwo;
            }
        })
        number.addEventListener("mousedown", () => { number.style.backgroundColor = "darkGrey" });
        number.addEventListener("mouseup", () => { number.style.backgroundColor = "lightGrey" });
    }
}
function initializeOperations() {
    let operations = document.querySelectorAll(".function");
    for (let operation of operations) {
        operation.addEventListener("click", () => {
            operationSelected.style.backgroundColor = "darkGrey";
            operationSelected = operation;
            secondNumber = true;
            operation.style.backgroundColor = "orange";
        })
    }
}
function operate(num1, num2, operation) {
    switch (operation.textContent) {
        case "*": {
            return num1 * num2;
        }
        case "+": {
            return num1 + num2;
        }
        case "-": {
            return num1 - num2;
        }
        case "/": {
            if (num2 == 0) {
                return "invalid";
            }
            return num1 / num2;
        }
    }

}
let equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
    if (secondNumber) {
        let result = operate(numberOne, numberTwo, operationSelected);
        if (result == "invalid") {
            display.textContent = "Invalid Operation";
            numberOne = 0;
        }
        else {
            display.textContent = result;
            numberOne = Number(display.textContent);
        }
        numberTwo = 0;
        secondNumber = false;
        operationSelected.style.backgroundColor = "darkGrey"
    }
})
let clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    numberOne = 0;
    numberTwo = 0;
    operationSelected.style.backgroundColor = "darkGrey"
    display.textContent = 0;

})
clear.addEventListener("mousedown", ()=>{
    clear.style.backgroundColor = "orange"
})
initializeNumbers();
initializeOperations();