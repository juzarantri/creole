let prompt = require("prompt-sync")();
/// returning the larger number
function check(x,y){
    x = parseInt(x);
    y = parseInt(y);
    if(x > y) return x;
    return y;
}

console.log("Enter first number");
let x = prompt();
console.log("Enter second number");
let y = prompt();


console.log("the larger number is " + check(x,y));
