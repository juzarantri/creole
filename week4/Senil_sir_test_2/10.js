const prompt = require("prompt-sync")();

/// shuffling based on 
function shuffle(str){
    let visitied = [];
    let ans = ""
    while(ans.length < str.length){
        let d = new Date();
        let t = d.getTime() % (str.length);
        if(visitied.find((ele) => ele == t) == undefined){
            visitied.push(t);
            ans += str[t];
        }
    }
    return ans;
}

console.log("Enter the string");
let str = prompt();

console.log(shuffle(str));