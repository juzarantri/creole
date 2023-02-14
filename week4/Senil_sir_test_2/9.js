const prompt = require("prompt-sync")();

/// pattern matching function
function match(str,pattern){
    for(i = 0; i <= str.length - pattern.length; i++){
        let t = i, k = 0, flag = 0;
        while(k < pattern.length){
            if(str[t++] != pattern[k++]){ 
                flag = 1;
                break; 
            }
        }
        if(!flag) return true;
    }
    return false;
}

console.log("Enter the string");
let str = prompt();
console.log("Enter the pattern");
let pattern = prompt();


console.log(match(str,pattern));