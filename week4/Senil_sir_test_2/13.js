const prompt = require("prompt-sync")();

/// vallidating email
function validate(email){
    let regex = /^[a-zA-z0-9]+\@[a-z]+\.[a-z]+/;
    return email.match(regex) == null ? false : true;
}

console.log("Enter the email");
let email = prompt();

console.log(validate(email));