const resultSelector = document.getElementById("result");
let lastValue = undefined;
let operation = "";
let lastClick = "";
let clearOnNext = false;
const sum = (a, b) => {
    return Number(a) + Number(b);
}
const sub = (a, b) => {
    return Number(a) - Number(b);
}
const mul = (a, b) => {
    return Number(a) * Number(b);
}
const div = (a, b) => {
    return Number(a) / Number(b);
}
const clear = () => {
    resultSelector.innerText = 0;
    operation = "";
    lastValue = undefined;
}
const addDot = () => {
    if (clearOnNext === true) {
        putZero();
        clearOnNext = false;
    }
    let actual = document.getElementById("result");
    if (Number(actual.innerHTML) === 0) {
        actual.innerText = elem;
    } else {
        actual.innerHTML = actual.innerHTML.concat(".");
    }
}
const putZero = () => {
    resultSelector.innerText = 0;
}
const addNumber = (elem) => {
    if (clearOnNext === true) {
        putZero();
        clearOnNext = false;
    }
    let actual = document.getElementById("result");
    if (Number(actual.innerHTML) === 0) {
        actual.innerText = elem;
    } else {
        actual.innerHTML = actual.innerHTML.concat(elem);
    }
}
const backSpace = () => {
    if (resultSelector.innerText != 0) {
        let value = resultSelector.innerText;
        resultSelector.innerText = value.substring(0, value.length - 1);
        console.log(value, value.substring(1));
    }
}

const doSum = (elem) => {
    console.log("LAST VAL", lastValue, lastClick);
    if (lastValue !== undefined && lastClick !== "=") {
        doEq();
        operation = "+";
        clearOnNext = true;
    } else {
        lastValue = Number(resultSelector.innerText);
        operation = "+";
        putZero();
    }
    lastClick = "+";
}
const doSub = (elem) => {
    if (lastValue !== undefined && lastClick !== "=") {
        doEq();
        operation = "-";
        clearOnNext = true;

    } else {
        lastValue = Number(resultSelector.innerText);
        operation = "-";
        putZero();
    }
    lastClick = "-";
}
const doMul = (elem) => {
    if (lastValue !== undefined && lastClick !== "=") {
        doEq();
        operation = "*";
        clearOnNext = true;
    } else {
        lastValue = Number(resultSelector.innerText);
        operation = "*";
        putZero();
    }
    lastClick = "*";
}
const doDiv = (elem) => {
    if (lastValue !== undefined && lastClick !== "=") {
        doEq();
        operation = "/";
        clearOnNext = true;
    } else {
        lastValue = Number(resultSelector.innerText);
        operation = "/";
        putZero();
    }
    lastClick = "/";
}
const doEq = (elem) => {
    console.log(Number(lastValue), Number(resultSelector.innerText), operation);
    if (lastValue !== undefined) {
        let operationResult;
        switch (operation) {
            case "+":
                operationResult = sum(Number(lastValue), Number(resultSelector.innerText));
                resultSelector.innerText = operationResult;
                lastValue = operationResult;
                break;
            case "-":
                operationResult = sub(Number(lastValue), Number(resultSelector.innerText));
                resultSelector.innerText = operationResult;
                lastValue = operationResult;
                break;
            case "/":
                operationResult = div(Number(lastValue), Number(resultSelector.innerText));
                resultSelector.innerText = operationResult;
                lastValue = operationResult;
                break;
            case "*":
                operationResult = mul(Number(lastValue), Number(resultSelector.innerText));
                resultSelector.innerText = operationResult;
                lastValue = operationResult;
                break;
            default:
                break;
        }
    } else {
        resultSelector.innerText = "ERROR";
    }
    console.log(lastValue);
    lastClick = "=";
}
// Create events
let buttonsSelector = document.querySelectorAll(".buttons div");
buttonsSelector.forEach((elem) => {
    if (elem.id === "clear") {
        elem.addEventListener("click", clear);
    } else if (elem.id === "supr") {
        elem.addEventListener("click", backSpace);
    } else if (elem.id === "/") {
        elem.addEventListener("click", () => doDiv(elem));
    } else if (elem.id === "X") {
        elem.addEventListener("click", () => doMul(elem));
    } else if (elem.id === "-") {
        elem.addEventListener("click", () => doSub(elem));
    } else if (elem.id === "=") {
        elem.addEventListener("click", () => doEq(elem));
    } else if (elem.id === "+") {
        elem.addEventListener("click", () => doSum(elem));
    } else if (elem.id === ".") {
        elem.addEventListener("click", () => addDot(elem));
    } else {
        elem.addEventListener("click", () => { addNumber(Number(elem.innerText)) });
    }
})