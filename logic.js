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
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

function calc() {
    if (displayVal.slice(-1) == " ") {
        displayVal = displayVal.slice(0, -3);
    }

    let disArr = displayVal.split(" ");
    let numStrings = [];
    let operators = [];

    for (let i = 0; i < disArr.length; i++) {
        if (i % 2 === 0) {
            numStrings.push(disArr[i]);
        }
        else {
            operators.push(disArr[i]);
        }
    }

    let nums = numStrings.map((item) => Number(item));

    while (operators.includes("*") || operators.includes("/")) {
        let prioIndex = operators.findIndex(item => item == "*" || item == "/");
        operator = operators.find(item => item == "*" || item == "/");
        num1 = nums[prioIndex];
        num2 = nums[prioIndex + 1];
        if (operator == "/" && num2 == 0) {
            alert("You can't do that, c'mon");
            display.textContent = "";
            displayVal = display.textContent;
            return;
        }
        nums.splice(prioIndex, 2, operate(operator, num1, num2));
        operators.splice(prioIndex, 1);
    }

    while (nums.length > 1) {
        operator = operators[0];
        num1 = nums[0];
        num2 = nums[1];
        nums.splice(0, 2, operate(operator, num1, num2));
        operators.shift();
    }

    display.textContent = Math.round(nums[0] * 100) / 100;
    displayVal = display.textContent;
}

let num1;
let num2;
let operator;
let displayVal = "";
let okToPoint = true;

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
        if (display.textContent == "") {
            alert("You cannot begin with an operator");
        }
        else {
            if (display.textContent.slice(-1) == " ") {
                alert("You cannot enter an operator after an operator");
            }
            else {
                display.textContent += " " + item.textContent + " ";
                displayVal = display.textContent;
                okToPoint = true;
            }
        }
    })
});

const equalsBtn = document.querySelector("#equals");
equalsBtn.addEventListener("click", calc);

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
    display.textContent = "";
    displayVal = display.textContent;
});

const pointBtn = document.querySelector("#point");
pointBtn.addEventListener("click", () => {
    if (okToPoint && (display.textContent != "" || display.textContent.slice(-1) == " ")) {
        display.textContent += ".";
        displayVal = display.textContent;
        okToPoint = false;
    }
});

const backspaceBtn = document.querySelector("#backspace");
backspaceBtn.addEventListener("click", () => {
    if (display.textContent != "") {
        if (display.textContent.slice(-1) == " ") {
            display.textContent = display.textContent.slice(0, -3);
        }
        else {
            display.textContent = display.textContent.slice(0, -1);
        }
        displayVal = display.textContent;
    }
});