"use strict";
// object type alias
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    id: 123,
    name: {
        first: "Mehadi",
        last: "Hasan"
    },
    age: 25,
    address: {
        street: "123 Main St",
        city: "Dhaka",
        zip: "12345"
    }
};
const add = (a, b) => {
    return a + b;
};
console.log(add(5, 10)); // Output: 15
//# sourceMappingURL=typeAlias.js.map