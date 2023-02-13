let prompt = require("prompt-sync")();

function appendPy(string){
    /// if string has already Py at front
    if(string.substr(0,2) == "Py") return string;
    /// if string does not have Py
    else return string.padStart(string.length + 2,"Py");
}

console.log("Enter the string");
let x = prompt();


console.log(appendPy(x));


