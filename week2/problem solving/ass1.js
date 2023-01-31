var rX = 0;
function checkPalindrom(x){
    let temp = x;
    while(x != 0){
        let rem = x % 10;
        rX = rem + (rX * 10);
        x = parseInt(x / 10);
    }
    
    if(temp == rX){
        return true;
    }else{
        return false;
    }
}

var x = 121;
console.log(checkPalindrom(x));