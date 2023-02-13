let prompt = require("prompt-sync")();

/// get the longest word
function findLargest(string){
    const arr = string.split(" ");
    const indexArr = [];
    for(i in arr){
        indexArr.push({len:arr[i].length,idx:i});
    }
    let ans = "", max = 0;
    indexArr.forEach(element => {
        if(element.len > max){
            ans = arr[element.idx];
            max = element.len;
        }
    });
    return ans;
    
}

console.log("Enter the string");
let x = prompt();


console.log(findLargest(x));