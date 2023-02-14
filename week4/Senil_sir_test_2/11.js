const prompt = require("prompt-sync")();

/// altering the caps
function alter(str){
    let ans = "";
    let flag = 1;
    for(i = 0; i < str.length; i++){
        if(str[i] != ' '){
            if(flag){
                ans += str[i].toUpperCase();
                flag = 0;
                continue;
            }
            process.stdout.write(str[i]);
            ans += str[i];
            flag = 1;
        }else{
            ans += str[i];
        }
    }
    return ans;
}

console.log("Enter the string");
let str = prompt();

console.log(alter(str));
