const prompt = require("prompt-sync")();

/// check if letter at position is vowel or consonant
function check(str,pos){
    const vowels = ['a','e','i','o','u'];
    if(vowels.find((char) => char == str[pos-1]) == undefined){
        return "consonant"
    }
    
    return "vowel";
}

console.log("Enter the string");
let str = prompt();
console.log("Enter the position");
let x = prompt();
x = parseInt(x);

console.log(check(str,x));

