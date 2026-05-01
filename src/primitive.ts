// js-ts
// string , number , boolean,null,undefined
// ts
// any, unknown, never, void


// string
let name: string = "Next Level Web Development";
name = 123; // Error: Type 'number' is not assignable to type 'string'.
name = "Next Level Web Development"; // Valid
// number
let age: number = 30;
age = "thirty"; // Error: Type 'string' is not assignable to type 'number'.
age = 30; 
// Valid
age = true
// boolean 
let isActive=true;
isActive=false
isActive="true" // Error: Type 'string' is not assignable to type 'boolean'.
isActive=true; // Valid
// null
let nullValue: null = null;
nullValue = undefined; // Error: Type 'undefined' is not assignable to type 'null'.
nullValue = null; // Valid
// undefined
let x: undefined = undefined;
x= 5
x= undefined; // Valid
x= null