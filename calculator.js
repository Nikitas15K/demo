//selectors
const buttons = document.querySelectorAll('button');
const calculatorDisplay = document.querySelector('.calculator_display');
const calculator_history = document.querySelector('.calculator_history');
let number1 = 0;
let number2 = 0;
let symbol = '';

//eventListener to each button
buttons.forEach(function (button) {
    button.addEventListener('click', calculator);
});

function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x)
}


// calculate function
function calculator(event) {
    // current clicked buttons value
    const clickedKeyValue = event.target.value;

    if (clickedKeyValue === ' = ') {
        //The eval() function evaluates JavaScript code represented as a string.
        number2 = eval(parseFloat(calculatorDisplay.value));
        if (symbol === 'math_log') {
            calculatorDisplay.value = eval(Math.log(number1) / Math.log(number2));
        } else {
            calculatorDisplay.value = eval(parseFloat(number1) + symbol + parseFloat(number2));
        }
        calculator_history.innerHTML = "";
        symbol = '+';
        number1 = 0;
    }

    else if (clickedKeyValue == 'math_sqrt') {
        number1 = parseFloat(calculatorDisplay.value);
        number2 = parseFloat(0.5);
        calculatorDisplay.value = eval(number1 ** number2);
        calculator_history.innerHTML = "";
        symbol = "+";
        number1 = 0;
    }

    else if (clickedKeyValue === 'C') {
        // clear all
        calculatorDisplay.value = '';
        calculator_history.innerHTML = '';
        number1 = 0;
        number2 = 0;
        symbol = '';
    }

    else if (clickedKeyValue === ' + ' || clickedKeyValue === ' - ' || clickedKeyValue === ' * ' || clickedKeyValue === ' / ' || clickedKeyValue === ' ** ' || clickedKeyValue === 'math_log') {
        //!if math.log symbol is being already displayed in calculator history
        if (symbol === 'math_log') {
            number2 = eval(parseFloat(calculatorDisplay.value));
            number1 = eval(Math.log(number1) / Math.log(number2));
            symbol = clickedKeyValue;
            calculatorDisplay.value = "";
            calculator_history.innerHTML = number1 + symbol;
        }

        //!if a math symbol is being displayed in calculator history and calculatorDisplay is empty
        if (symbol !== '' && calculatorDisplay.value == '') {

            symbol = clickedKeyValue;
            calculatorDisplay.value = "";
            calculator_history.innerHTML = number1 + symbol;
        }
        //!if a math symbol is being displayed in calculator history and calculatorDisplay is not empty
        else if (symbol !== '' && calculatorDisplay.value !== '') {
            number2 = eval(parseFloat(calculatorDisplay.value));
            number1 = eval(parseFloat(number1) + symbol + parseFloat(number2));
            symbol = clickedKeyValue;
            calculatorDisplay.value = "";
            calculator_history.innerHTML = number1 + symbol;
        }
        //!if there is NO math symbol calculator history and calculatorDisplay is empty
        else if (symbol == '' && calculatorDisplay.value == '') {
            symbol = clickedKeyValue;
            calculatorDisplay.value = "";
            calculator_history.innerHTML = number1 + symbol;
        }
        //!if there is NO math symbol calculator history and calculatorDisplay is NOT empty
        else {
            number1 = eval(parseFloat(calculatorDisplay.value));
            symbol = clickedKeyValue;
            calculatorDisplay.value = "";
            calculator_history.innerHTML = number1 + symbol;
        }
    }

    else {
        // concatenate it to the display
        calculatorDisplay.value += clickedKeyValue;
    }

    if (calculatorDisplay.value.includes("NaN") || calculatorDisplay.value.includes("undefined")) {
        calculator_history.innerHTML = "Something went wrong. Press C"
        calculatorDisplay.value = "0";
    }

}








