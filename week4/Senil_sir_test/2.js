/// checking if one number is positive and other as negative
let prompt = require("prompt-sync")();

function check(x,y){
    x = parseInt(x);
    y = parseInt(y);

    return ((x < 0 || y < 0) && (x > 0 || y > 0)) ? true : false;
}

console.log("Enter first number");
let x = prompt();
console.log("Enter second number");
let y = prompt();


console.log(check(x,y));


