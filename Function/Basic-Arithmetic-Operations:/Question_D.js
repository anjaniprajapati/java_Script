
//Divide: Create a callback function divideNumbers that takes two numbers 
//and returns the result of dividing the first number by the second, 
//ensuring to handle division by zero.

function divideNumbers(num1,num2){
    if (num1===0){
        return "Cannot divide by zero"
    }else{
        return num1/num2
    }
}