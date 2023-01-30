/*
TypeScript Type Aliases and Interfaces
TypeScript allows types to be defined separately from the variables that use them.
Aliases and Interfaces allows types to be easily shared between different variables/objects.
*/

/*
Type Aliases
Type Aliases allow defining types with a custom name (an Alias).
Type Aliases can be used for primitives like string or more complex types such as objects and arrays
*/

type personAge = number;
type personIsMarried = boolean;
type personName = string;
type person = {
    age : personAge,
    isMarried : personIsMarried,
    name : personName
}

const PersonAge : personAge = 20;
const PersonIsMarried : personIsMarried = true;
const PersonName : personName = "Eliet";
const Person : person = {
    isMarried : PersonIsMarried,
    age : PersonAge,
    name : PersonName
}

console.log(typeof Person);
console.log(Person);

/*
Interfaces
Interfaces are similar to type aliases, except they only apply to object types.
*/

interface Rectangle {
    height : number,
    width : number
}

const rectangle : Rectangle = {
    height : 45,
    width : 52
}

console.log();
console.log(typeof rectangle);
console.log(rectangle);

/*
Extending Interfaces
Interfaces can extend each other's definition.
Extending an interface means you are creating a new interface with the same properties as the original, plus something new.
*/

interface ColoredRectangle extends Rectangle {
    color : string
}

const coloredRectangle : ColoredRectangle = {
    height : 45,
    width : 52,
    color : "Red"
}

console.log();
console.log("Extended interface");
console.log(coloredRectangle);