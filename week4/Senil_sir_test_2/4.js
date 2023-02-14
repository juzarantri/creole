const prompt = require("prompt-sync")();

/// get char after certain repeatation
function getCharAfterRep(str,rep){
    let counts = [];
    let ans = [];
    let prevC;
    for(i of str){
        if(counts[i] == undefined){
            counts[i] = 0;
            counts[i]++;
        }else{
            if(i != prevC){
                counts[i] = 1;
            }else{
                counts[i]++;
            }
        }
        prevC = i;
        if(counts[i] == rep) ans.push(i);
    }
    return ans;
}

console.log("Enter the string");
let str = prompt();
console.log("Enter the no. of repetitions");
let x = prompt();
x = parseInt(x);

console.log(getCharAfterRep(str,x));

