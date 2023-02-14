const prompt = require("prompt-sync")();

/// get highest occuring element 
let counts = [];
function highestFrequency(str){

    let max = 0;
    let ans = "";
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
        max = Math.max(max,counts[i]);
    }
    /// getting the max element array and the 
    let prev = 999;
    for(i in counts){
        if(counts[i] == max && i.charCodeAt(0) < prev){
            ans = i;
            prev = i.charCodeAt(0);
        }
    }
    return ans;
}

console.log("Enter the string");
let str = prompt();

console.log(highestFrequency(str));

