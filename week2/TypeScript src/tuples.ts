/*
    TypeScript Tuples

Typed Arrays
A tuple is a typed array with a pre-defined length and types for each index.
Tuples are great because they allow each element in the array to be a known type of value.
To define a tuple, specify the type of each element in the array:
*/

let firstTuple : [number,string,boolean];
firstTuple = [12,"Juzar",true];

/*
Readonly Tuple
A good practice is to make your tuple readonly.
Tuples only have strongly defined types for the initial values
*/

const firstReadOnlyTuple : readonly [string,number] = ["Juzar",5];
// throws error as it is readonly.
// firstReadOnlyTuple.push('Coding God took a day off');

/*
Named Tuples
Named tuples allow us to provide context for our values at each index.
*/
const graph : [x:number, y:string] = [7,"fds"];
console.log(graph);

/* 
Destructuring Tuples
Since tuples are arrays we can also destructure them

const graph: [number, number] = [55.2, 41.3];
const [x, y] = graph;
*/