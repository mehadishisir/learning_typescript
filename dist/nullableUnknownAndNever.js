"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// nullable type
const getUser = (input) => {
    if (input) {
        console.log(`from DB: ${input}`);
    }
    else {
        console.log("from db: ALL Users");
    }
};
getUser("Mehadi"); // Output: from DB: Mehadi
getUser(""); // Output: from db: ALL Users
getUser(null); // Output: from db: ALL Users
// unknown type
const discountCalculator = (input) => {
    if (typeof input === "number") {
        console.log(`Discounted price: ${input * 0.9}`);
    }
    else if (typeof input === "string") {
        const price = parseFloat(input);
        if (!isNaN(price)) {
            console.log(`Discounted price: ${price * 0.9}`);
        }
        else {
            console.log("Invalid price format");
        }
    }
};
discountCalculator(100);
discountCalculator("100 taka");
discountCalculator(null);
//    never type
const throwError = (message) => {
    throw new Error(message);
};
//# sourceMappingURL=nullableUnknownAndNever.js.map