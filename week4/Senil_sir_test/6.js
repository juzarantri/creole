let prompt = require("prompt-sync")();

function check(string){
    /// if string has already Py at front
    if(string.substr(0,4) == "Java") return true;
    return false;
}

console.log("Enter the string");
let x = prompt();


console.log(check(x));