
//In the call to higherOrderFunction, modify the callback function expression. 
//The new function expression should log the square of the number to the console.

const callbackFunction = function(number) {
    console.log(number * number); 
};

function higherOrderFunction(number, callback) {
    callback(number);
}
higherOrderFunction(10, callbackFunction);