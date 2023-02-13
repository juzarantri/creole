/// pattern using nested for loop
for(i = 1; i <= 5; i++){
    str = ""
    for(j = 1; j <= i; j++){
        str += "*";
    }
    console.log(str);
}