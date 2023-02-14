const prompt = require("prompt-sync")();

/// sorting the string

function sortString(str,direction){
    let temp = [];

    for(char of str){
        temp.push(char);
    }

    if(!direction){
        temp.sort();
    }else{
        temp.sort((a,b) => {
            return b.charCodeAt(0) - a.charCodeAt(0);
        });
    }
    return temp.join('');
}

console.log("Enter the string");
let str = prompt();

// console.log(sortString(str,false));
console.log(sortString(str,true));

