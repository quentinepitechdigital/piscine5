
function splitOperation(operation) {
    let splitOperation = operation.split(' ');
    return [parseInt(splitOperation[0]), splitOperation[1], parseInt(splitOperation[2])];
}

// function splitOperation(operation) {
//     let splitOperation = operation.split(' ');
    
//     let firstNumber = parseInt(splitOperation[0]);
//     let secondNumber = parseInt(splitOperation[2]);
//     let operator = splitOperation[1];
//     let result;

//     switch (operator) {
//         case '+':
//             result = firstNumber + secondNumber;
//             break;
//         case '-':
//             result = firstNumber - secondNumber;
//             break;
//         case '*':
//             result = firstNumber * secondNumber;
//             break;
//         case '/':
//             result = firstNumber / secondNumber;
//             break;
//         default:
//             result = 'Invalid operator';
//     }

//     return result;
// }

// console.log(splitOperation('5 / 0'));
