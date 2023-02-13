let prompt = require("prompt-sync")();
/// if two nos are equal then triple its sum
function sum(x,y){
    x = parseInt(x);
    y = parseInt(y);
    return (x == y) ? (x+y) * 3 : (x+y);
}

console.log("Enter first number");
let x = prompt();
console.log("Enter second number");
let y = prompt();


console.log(sum(x,y));


