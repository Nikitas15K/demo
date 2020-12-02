//selectors
const buttons = document.querySelectorAll('button');
const calculatorDisplay = document.querySelector('.calculator_display');
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

function hasNumbers(x)
{
return /\d/.test(x);
} 

// calculate function
function calculator(event) {
    // current clicked buttons value
    const clickedKeyValue = event.target.value;

    if (clickedKeyValue === ' = ') {
        //The eval() function evaluates JavaScript code represented as a string.
        number2 = eval(parseFloat(calculatorDisplay.value));
        if (symbol === 'Math.log') {
            calculatorDisplay.value = eval(Math.log(number1) / Math.log(number2))
        } else {
            calculatorDisplay.value = eval(parseFloat(number1) + symbol + parseFloat(number2));
        }
    }

    else if (clickedKeyValue === 'Math.sqrt') {
        number1 = eval(calculatorDisplay.value);
        calculatorDisplay.value = eval(Math.sqrt(number1));

    }

    else if (clickedKeyValue === 'C') {
        // start from 0
        calculatorDisplay.value = '';
    }

    else if (clickedKeyValue === ' + ' || clickedKeyValue === ' - ' || clickedKeyValue === ' * ' || clickedKeyValue === ' / ' || clickedKeyValue === ' ** ' || clickedKeyValue === 'Math.log') {
        number1 = eval(parseFloat(calculatorDisplay.value));
        symbol = clickedKeyValue;
        calculatorDisplay.value = "";
    }

    else {
        // concatenate it to the display
        calculatorDisplay.value += clickedKeyValue;
    }

    if (calculatorDisplay.value === "NaN" || calculatorDisplay.value === "undefined"){
        calculatorDisplay.value = "";
    }

}








