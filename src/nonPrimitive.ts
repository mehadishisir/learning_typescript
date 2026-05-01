// array,object,tuple
let arr = [1,2,3];
arr.push("banana"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
arr.push(4); // Valid


const mixedArray :(string | number)[]=["eggs",12,"banana",6];
mixedArray.push("apple"); // Valid
mixedArray.push(7);
mixedArray.push(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

// object