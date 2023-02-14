const prompt = require("prompt-sync")();

/// chech if string is alphabetically sorted
function checkAlphabeticalOrder(str,direction){
    
    if(!direction){
        let prev = str.charCodeAt(0);
        for(i = 1; i < str.length; i++){
            if(str.charCodeAt(i) >= prev){
                prev = str.charCodeAt(i);
            }else{
                return false;
            }
        }
    }else{
        let prev = str.charCodeAt(str.length - 1);
        for(i = str.length - 2; i >= 0; i--){
            if(str.charCodeAt(i) >= prev){
                prev = str.charCodeAt(i);
            }else{
                return false;
            }
        }
    }
    return true;
}

console.log("Enter the string");
let str = prompt();

// console.log(checkAlphabeticalOrder(str,false));
console.log(checkAlphabeticalOrder(str,true));

