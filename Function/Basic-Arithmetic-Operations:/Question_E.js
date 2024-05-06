
// Define a function performArithmetic that accepts three parameters: num1 and 
// num2 (the numbers on which to perform the operation), 
// and operation (a callback function that specifies the arithmetic operation to be performed on num1 and num2).

function performArithmetic(num1,num2,operation){
    return operation(num1,num2)
}