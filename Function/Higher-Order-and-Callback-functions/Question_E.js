
//In the call to higherOrderFunction, modify the callback function expression 
//that takes two parameters, num1 and num2, and log their sum to the console. 
//Make the necessary changes to higherOrderFunction to call the callback accordingly.

const callbackFunction=function(num1,num2){
    console.log(num1+num2)
}
function higherOrderFunction(num1,num2,callback){
    callback(num1,num2)
}
higherOrderFunction(3,5,callbackFunction)