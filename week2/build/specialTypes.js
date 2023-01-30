"use strict";
/*
Type: any
any is a type that disables type checking and effectively allows all types to be used.
*/
let v = "anyString";
v = 89.45;
console.log(Math.round(v));
/*
Type: unknown
unknown is a similar, but safer alternative to any.
TypeScript will prevent unknown types from being used
*/
let xyz = 1;
xyz = "string";
xyz = {
    runANonExistentMethod: () => {
        console.log("This is me a pro noob in typescript...");
    }
};
// xyz.runANonExistentMethod(); // Error: Object is of type 'unknown'.
xyz.runANonExistentMethod();
let y = undefined;
let z = null;
module.exports = {};
