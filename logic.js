function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            add(a, b);
            break;
        case "-":
            subtract(a, b);
            break;
        case "*":
            multiply(a, b);
            break;
        case "/":
            divide(a, b);
            break;
    }
}

let num1;
let num2;
let operator;
let displayVal = "";

const display = document.querySelector("#display");
const numButtons = Array.from(document.querySelectorAll(".num-button"));
numButtons.forEach(item => {
    item.addEventListener("click", () => {
        display.textContent += item.textContent;
        displayVal = display.textContent;
    })
});
const opButtons = Array.from(document.querySelectorAll(".operator-button"));
opButtons.forEach(item => {
    item.addEventListener("click", () => {
        display.textContent += " " + item.textContent + " ";
        displayVal = display.textContent;
    })
});