"use strict";
/// explicit types
let firstName = "Juzar";
console.log(typeof firstName);
/// implicit types 
let lastName = "Antri";
console.log(typeof lastName);
/// error in type assignment
let x = "xya";
// x = 2; /// error because of the implicit assignment as a string
/// TypeScript will throw an error if data types do not match.
let y = "new";
// y = 2; /// error
