var output = document.querySelector('.output');
var numStr = '';
var numStrArr = [''];
var operand;
var calculated = false;
/*declare the following variables and types
num1 as number
num2 as number
operand as string

Figure out how to set the values of num1 and num2 as the buttons are clicked
*/
var calc = document.getElementById('calc');
if (calc) {
    calc.addEventListener('click', function (evt) {
        var button = evt.target;
        if (calculated) {
            output.value = '';
            calculated = false;
        }
        if (button.className.indexOf('num') !== -1) {
            console.log(button.innerHTML);
            numStr += button.innerHTML;
            output.value += button.innerHTML;
        }
        if (button.className.indexOf('operator') !== -1 && numStr.length !== 0) {
            console.log(button.innerHTML);
            console.log(numStr);
            numStrArr[0] = numStr;
            numStr = '';
            operand = button.innerHTML;
            output.value += button.innerHTML;
        }
        if (button.className.indexOf('equal') !== -1
            && numStr.length !== 0
            && numStrArr[0].length !== 0
            && operand.length !== 0) {
            console.log(button.innerHTML);
            var calculation = calculate(numStrArr[0], numStr, operand);
            output.value = calculation.toString();
        }
        if (button.className.indexOf('reset') !== -1) {
            output.value = '';
            numStr = '';
            operand = '';
            numStrArr[0] = '';
        }
        /* create another condition to clear the value of the input when C is pressed*/
    });
}
//create a function that takes in 2 numbers and a string (operand)
var calculate = function (strNum1, strNum2, operator) {
    var num1 = Number(strNum1);
    var num2 = Number(strNum2);
    var result;
    if (operator === '+') {
        result = num1 + num2;
    }
    else if (operator === '-') {
        result = num1 - num2;
    }
    else if (operator === '*') {
        result = num1 * num2;
    }
    else {
        result = num1 / num2;
    }
    numStr = '';
    numStrArr[0] = '';
    calculated = true;
    return result;
};
