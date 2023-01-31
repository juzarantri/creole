img = [];
function invert(x){
    /// for no. of times
    for(i = 9; i >= 1; i--){
        // for space
        newRow = [];
        for(j = x-i; j > 0; j--){
            newRow.push(" ");
        }
        for(k = 1; k <= i; k++){
            newRow.push(k);
        }
        
        
        for(q = i-1; q >= 1; q--){
            newRow.push(q);
        }
        for(s = x-i; s > 0; s--){
            newRow.push(" ");
        }
        
        img.push(newRow);
    }
}
call = 9;
invert(call);
strings = [];
for(i = 0; i < 9; i++){
    
    strings.push(img[i].toString());
}
console.log(strings);