// array,object,tuple
let arr = [1,2,3];
arr.push("banana"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
arr.push(4); // Valid


const mixedArray :(string | number)[]=["eggs",12,"banana",6];
mixedArray.push("apple"); // Valid
mixedArray.push(7);
mixedArray.push(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

// tuple
let tuple: [string, number] = ["hello", 42];
tuple[0] = "world"; // Valid
tuple[1] = 100; // Valid
tuple[0] = 123; // Error: Type 'number' is not assignable to type 'string'.
tuple[1] = "not a number"; // Error: Type 'string' is not assignable to type 'number'.  