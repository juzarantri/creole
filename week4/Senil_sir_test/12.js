/* Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black" */

let myColor = ["Red", "Green", "White", "Black"];

/// logic to get above expected output

let ans = myColor.join(',')+"\n";
ans += myColor.join(',')+"\n";
ans += myColor.join('+');
console.log(ans)
