const greet = function(name = "Guest") {
    return `Hello, ${name}!`;
};
console.log(greet())
console.log(greet("Alic"))