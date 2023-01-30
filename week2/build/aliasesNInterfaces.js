"use strict";
/*
TypeScript Type Aliases and Interfaces
TypeScript allows types to be defined separately from the variables that use them.
Aliases and Interfaces allows types to be easily shared between different variables/objects.
*/
const PersonAge = 20;
const PersonIsMarried = true;
const PersonName = "Eliet";
const Person = {
    isMarried: PersonIsMarried,
    age: PersonAge,
    name: PersonName
};
console.log(typeof Person);
console.log(Person);
const rectangle = {
    height: 45,
    width: 52
};
console.log();
console.log(typeof rectangle);
console.log(rectangle);
const coloredRectangle = {
    height: 45,
    width: 52,
    color: "Red"
};
console.log();
console.log("Extended interface");
console.log(coloredRectangle);
