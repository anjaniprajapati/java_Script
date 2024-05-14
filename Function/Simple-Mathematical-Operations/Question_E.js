
//Call performOperation with a number and each of the callback 
//functions in turn to see the results of the operations. 
//Log the result to the console for each call to performOperation.

function performOperation(num, operation) {
    return operation(num);
}

function add(num) {
    return num + 2;
}

function subtract(num) {
    return num - 5;
}

function multiply(num) {
    return num * 10;
}
console.log(performOperation(5, add)); 
console.log(performOperation(10, subtract)); 
console.log(performOperation(3, multiply)); 
