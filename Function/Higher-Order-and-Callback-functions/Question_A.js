function higherOrderFunction(num, callback) {
    callback(num);
}
function callbackFunction(num) {
    console.log("Callback function called with number:", num);
}
higherOrderFunction(10, callbackFunction);
