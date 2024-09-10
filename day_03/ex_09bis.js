
function splitOperation(operation) {
    let splitOperation = operation.split(' ');
    return [parseInt(splitOperation[0]), splitOperation[1], parseInt(splitOperation[2])];
}

function doOperation(operation) {
    let  [firstNumber, operator, secondNumber] = splitOperation(operation);
    let result;

    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            if (secondNumber === 0) {
                return null;
            }
            result = firstNumber / secondNumber;
            break;
        default:
            result = null;
    }

    return result;
}