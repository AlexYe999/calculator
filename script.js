let prevAns = 0;
let currAns = 0;
let beforeOpp = 0;
let display = document.getElementById("display");
let decimal = false;
let decimalNum = 0;
let beforeOppNum = 0;
function clearFunc() {
    currAns = 0;
    beforeOpp = 0;
    display.innerHTML = 0;
    decimal = false;
    beforeOppNum = 0;
    decimalNum = 0;
}

function signFunc() {
    currAns = -currAns;
    display.innerHTML = currAns;
}

function percentFunc() {
    currAns /= 100;
    display.innerHTML = currAns;
}

function operatorFunc(operator) {
    switch (beforeOpp) {
        case 0:
            currAns = beforeOppNum + +currAns;
            break;
        case 1:
            currAns = beforeOppNum - +currAns;
            break;
        case 2:
            currAns = beforeOppNum * +currAns;
            break;
        case 3:
            currAns = beforeOppNum / +currAns;
            break;

    }
    display.innerHTML = currAns;
    beforeOppNum = +currAns;
    currAns = 0;
    switch (operator) {
        case '+':
            beforeOpp = 0;
            break;
        case '-':
            beforeOpp = 1;
            break;
        case '*':
            beforeOpp = 2;
            break;
        case '/':
            beforeOpp = 3;
            break;
    }
    decimal = false;
    decimalNum = 0;
}

function operandFunc(operand) {
    if (decimal) {
        decimalNum++;
        currAns = +currAns + parseInt(operand) / (10 ** decimalNum);
        currAns = currAns.toFixed(decimalNum);
    } else {
        currAns = +currAns * 10 + parseInt(operand);
    }
    display.innerHTML = currAns;
}

function decimalFunc() {
    if (!decimal && Number.isInteger(currAns)) {
        decimal = true;
        display.innerHTML = currAns + ".";
    }
}

function ansFunc() {
    currAns = prevAns;
    display.innerHTML = currAns;
}

function equalsFunc() {
    switch (beforeOpp) {
        case 0:
            currAns = beforeOppNum + +currAns;
            break;
        case 1:
            currAns = beforeOppNum - +currAns;
            break;
        case 2:
            currAns = beforeOppNum * +currAns;
            break;
        case 3:
            currAns = beforeOppNum / +currAns;
            break;

    }
    display.innerHTML = currAns;
    beforeOppNum = +currAns;
    prevAns = +currAns;
    currAns = 0;
}

let buttons = document.getElementsByTagName('button');
for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener("click", () => {
        switch (button.className) {
            case "clear":
                clearFunc();
                break;
            case "sign":
                signFunc();
                break;
            case "percent":
                percentFunc();
                break;
            case "operator":
                operatorFunc(button.value);
                break;
            case "operand":
                operandFunc(button.value);
                break;
            case "decimal":
                decimalFunc();
                break;
            case "ans":
                ansFunc();
                break;
            case "equals":
                equalsFunc();
                break;
        }
    });
}