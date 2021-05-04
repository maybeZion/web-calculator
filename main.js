var lastInput = null;
var firstNumber = 0;
var lastNumber = 0;
var thisOper = null;

const PREVIEW = document.querySelector('.preview');
const NUMPAD = Array.from(document.querySelectorAll('.numpad>button'));
const OPERS = Array.from(document.querySelectorAll('.opers>button'));

NUMPAD.forEach((num) => {
    num.addEventListener('click', () => {
        if (num.innerText != 'C') {
            if (PREVIEW.innerText[0] == '0') {
                PREVIEW.innerText = PREVIEW.innerText.substring(1);
            }
            if (lastNumber) {
                lastNumber += String(num.innerText);
                PREVIEW.innerText = lastNumber;
            } else if (thisOper) {
                lastNumber = String(num.innerText);
                PREVIEW.innerText = lastNumber;
            } else if (lastInput != '=') {
                firstNumber += String(num.innerText);
                PREVIEW.innerText = firstNumber;
            } else {
                firstNumber = String(num.innerText);
                PREVIEW.innerText = firstNumber;
            }
        } else {
            PREVIEW.innerText = lastNumber = firstNumber = 0;
        }
    });
});

OPERS.forEach((oper) => {
    oper.addEventListener('click', () => {
        if (oper.innerText != '=') {
            if (lastInput == '.') {
                lastNumber += '0';
            }
        } else {
            switch (thisOper) {
                case '+':
                    firstNumber = Number(firstNumber) + Number(lastNumber);
                    break;
                case '-':
                    firstNumber = Number(firstNumber) - Number(lastNumber);
                    break;
                case '*':
                    firstNumber = Number(firstNumber) * Number(lastNumber);
                    break;
                case '/':
                    firstNumber = Number(firstNumber) / Number(lastNumber);
                    break;
            }
            PREVIEW.innerText = firstNumber;
            lastNumber = 0;
        }
        thisOper = oper.textContent;
    });
});

