
//Modify the call to higherOrderFunction, to pass a number 
//and the same callback but as a function expression.

const callbackFunction = function(number) {
    console.log(number);
};
function higherOrderFunction(number, callback) {
    callback(number);
}

higherOrderFunction(10, callbackFunction);