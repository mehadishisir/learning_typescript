"use strict";
// ?: tarnery operator : decision making operator
Object.defineProperty(exports, "__esModule", { value: true });
const marrageAge = (age) => {
    if (age >= 18) {
        console.log("You are eligible for marriage");
    }
    else {
        console.log("You are not eligible for marriage");
    }
};
// marrageAge(20); // Output: You are eligible for marriage
// using ternary operator
const marrageAgeTernary = (age) => {
    age >= 18 ? console.log("You are eligible for marriage") : console.log("You are not eligible for marriage");
};
const user1 = {
    id: 1,
    name: "Mehadi",
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
};
const user2 = {
    id: 2,
    name: "John"
};
console.log(user1.address?.city); // Output: Dhaka
console.log(user2.address?.city); // Output: undefined
// ?? nullish coalescing operator : used to provide a default value when the left-hand side is null or undefined
const getUserCity = (user) => {
    return user.address?.city ?? "City not available";
};
console.log(getUserCity(user1)); // Output: Dhaka
console.log(getUserCity(user2)); // Output: City not available  
//# sourceMappingURL=questionMark.js.map