/// checking if one number is either 50 or id both number sum is 50
let prompt = require("prompt-sync")();
function check(x,y){
    x = parseInt(x);
    y = parseInt(y);
    if(x == 50 || y == 50 || (x+y) == 50) return true;
    return false;
}

console.log("Enter first number");
let x = prompt();
console.log("Enter second number");
let y = prompt();


console.log(check(x,y));


