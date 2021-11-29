let output = document.querySelector('.output') as HTMLInputElement;

let numStr: string = ''; 

let numStrArr: string[] = [''];
let operand: string;
let calculated: boolean = false;
    /*declare the following variables and types
    num1 as number
    num2 as number
    operand as string
    
    Figure out how to set the values of num1 and num2 as the buttons are clicked
    */
const calc: HTMLElement | null = document.getElementById('calc');
if (calc) {
    calc.addEventListener('click',(evt)=>{
        let button = evt.target as HTMLButtonElement;
        
        if (calculated) {
            output.value = '';
            calculated = false;
        }
        if(button.className.indexOf('num')!==-1){
            console.log(button.innerHTML); 
            numStr += button.innerHTML;     
            output.value += button.innerHTML;
        }
        if(button.className.indexOf('operator')!==-1 && numStr.length !== 0){
            console.log(button.innerHTML); 
            console.log(numStr); 
            numStrArr[0] = numStr;
            numStr = '';
            operand = button.innerHTML;    
            output.value += button.innerHTML;
        }
        if(button.className.indexOf('equal')!==-1 
            && numStr.length !== 0 
            && numStrArr[0].length !== 0 
            && operand.length !== 0){
            console.log(button.innerHTML);
            let calculation = calculate(numStrArr[0], numStr, operand);
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
const calculate = (strNum1: string, strNum2: string, operator: string): number => {
    const num1: number = Number(strNum1);
    const num2: number = Number(strNum2);
    let result: number;

    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else  if (operator === '*') {
        result = num1 * num2;
    } else {
        result = num1 / num2;
    }

    numStr = '';
    numStrArr[0] = '';
    calculated = true;
    return result;
}