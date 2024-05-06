
// Call performArithmetic with different pairs of numbers 
// and each of the callback functions to see the results of the arithmetic operations.

function performArithmetic(num1, num2, callback) {
    return callback(num1, num2);
}

function addition(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    if (num2 === 0) {
        return "Error: Division by zero!";
    }
    return num1 / num2;
}

console.log("Addition:", performArithmetic(5, 3, addition)); // Output: 8
console.log("Subtraction:", performArithmetic(10, 4, subtraction)); // Output: 6
console.log("Multiplication:", performArithmetic(6, 7, multiplication)); // Output: 42
console.log("Division:", performArithmetic(20, 4, division)); // Output: 5
console.log("Division by zero:", performArithmetic(10, 0, division)); // Output: Error: Division by zero!
