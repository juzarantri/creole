const prompt = require("prompt-sync")();
/// filtering the string to remove a and x
function strip(str,removeChars = []){
    newStr = "";
    for(char of str){
        if(char != removeChars[0] && char != removeChars[1])
            newStr += char;
    }
    return newStr;
}

console.log("Enter the string");
let str = prompt();

console.log(strip(str,['a','x']));

