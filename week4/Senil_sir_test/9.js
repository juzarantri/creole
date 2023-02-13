

let arr = [-5, -2, -6, 0, -1];

/// getting the max element
let max = arr[0];
for(i = 1; i < 5; i++){
    if(max < arr[i]){
        max = arr[i];
    }
}

console.log("The max element is " + max);