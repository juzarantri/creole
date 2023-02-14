const prompt = require("prompt-sync")();

/// Capitalize first letter
function capitalize(str){
    
    temp = str.split(" ");
    ans = "";
    temp.filter(element => {
        ans += element[0].toUpperCase() + element.substr(1) + " ";
    });
    return ans;
}

console.log("Enter the string");
let str = prompt();

console.log(capitalize(str));

