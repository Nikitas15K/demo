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

// calculate function
function calculator(event) {
    // current clicked buttons value
    const clickedKeyValue = event.target.value;

    if (clickedKeyValue === ' = ') {
        //The eval() function evaluates JavaScript code represented as a string.
        number2 = eval(calculatorDisplay.value);
        calculatorDisplay.value = eval(parseFloat(number1) + symbol + parseFloat(number2));
    }
    else if (clickedKeyValue === 'C') {
        // start from 0
        calculatorDisplay.value = '';
    }

    else if (clickedKeyValue === ' + ' || clickedKeyValue === ' - ' || clickedKeyValue === ' * ' || clickedKeyValue === ' / ' || clickedKeyValue === ' ^ ') {
        number1 = eval(calculatorDisplay.value);
        symbol = clickedKeyValue;
        calculatorDisplay.value = '';
    }

    else {
        // concatenate it to the display
        calculatorDisplay.value += clickedKeyValue;
    }

}








