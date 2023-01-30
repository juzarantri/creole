/* 
Type: any
any is a type that disables type checking and effectively allows all types to be used.
*/

let v : any = "anyString";
v = 89.45;
console.log(Math.round(v));

/*
Type: unknown
unknown is a similar, but safer alternative to any.
TypeScript will prevent unknown types from being used
*/

let xyz : unknown = 1;
xyz = "string";
xyz = {
    runANonExistentMethod : () => {
        console.log("This is me a pro noob in typescript...");
    }
} as { runANonExistentMethod : () => void }

// xyz.runANonExistentMethod(); // Error: Object is of type 'unknown'.
(xyz as { runANonExistentMethod: Function }).runANonExistentMethod();


/*
Type: never
never effectively throws an error whenever it is defined.
never is rarely used, especially by itself, its primary use is in advanced generics.
*/

// let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.

/*
Type: undefined & null
undefined and null are types that refer to the JavaScript primitives undefined and null respectively.
These types don't have much use unless strictNullChecks is enabled in the tsconfig.json file.
*/
export = {}
let y: undefined = undefined;
let z: null = null;