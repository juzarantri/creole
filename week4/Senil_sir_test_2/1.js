const prompt = require("prompt-sync")();

console.log("Enter the string");
let str = prompt();

/// reversing the string
let  i = str.length;
while(i--){
    process.stdout.write(str[i]);
}
