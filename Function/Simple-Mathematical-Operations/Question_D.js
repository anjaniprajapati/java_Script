
//Define a function performOperation that accepts two parameters: 
//num (a number on which to perform the operation), 
//and operation (a callback function that specifies the operation to be performed on num). 
//Inside performOperation, call the operation function and pass num as an argument. 
//The function should return the result. 

function performOperation(num,operation){
    return(
        operation(num)
    )
}