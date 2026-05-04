"use strict";
// js-ts
// string , number , boolean,null,undefined
// ts
// any, unknown, never, void
Object.defineProperty(exports, "__esModule", { value: true });
// string
let name = "Next Level Web Development";
name = 123; // Error: Type 'number' is not assignable to type 'string'.
name = "Next Level Web Development"; // Valid
// number
let age = 30;
age = "thirty"; // Error: Type 'string' is not assignable to type 'number'.
age = 30;
// Valid
age = true;
// boolean 
let isActive = true;
isActive = false;
isActive = "true"; // Error: Type 'string' is not assignable to type 'boolean'.
isActive = true; // Valid
// null
let nullValue = null;
nullValue = undefined; // Error: Type 'undefined' is not assignable to type 'null'.
nullValue = null; // Valid
// undefined
let x = undefined;
x = 5;
x = undefined; // Valid
x = null;
//# sourceMappingURL=primitive.js.map