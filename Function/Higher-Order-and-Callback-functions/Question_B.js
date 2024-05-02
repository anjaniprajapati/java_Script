
function callbackFunction(number) {
    console.log(number);
}

function higherOrderFunction(number, callback) {
    callback(number);
}

higherOrderFunction(10, callbackFunction);