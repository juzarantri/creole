img = [];
function invert(x){
    /// for no. of times
    for(i = x; i >= 1; i--){
        row = "";   
        temp = i;
        flag = 0;
        for(j = 1; j < (i*2); j++){
            if(j == i){
                row += j;
                flag = 1;
                continue;                
            }
            if(!flag){
                row += j
            }
            else{
                temp = temp-1;
                row += temp;

            }
            
        }
        img.push(row);
    }
}
call = 9;
invert(call);

// for(i = 0; i < 9; i++){
    
//     strings.push(img[i].toString());
// }
for(i = 0; i < call; i++){
    temp = "";
    for(j = 1; j <= i; j++){
        temp += " " ;
    }
    img[i] = temp + img[i] + temp;
}

for(i = 0; i < call; i++){
    console.log(img[i]);
}
// console.log(img);