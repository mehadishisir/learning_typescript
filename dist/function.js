"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addNorm(a, b) {
    return a + b;
}
// console.log(addNorm(1,2)); // Output: 3 (number addition)
// console.log(addNorm("Hello, ", "world!")); // Output: "Hello, world!" (string concatenation)
// arrow function
const addarrow = (a, b) => a + b;
// console.log(addarrow(1,2)); // Output: 3 (number addition)
// console.log(addarrow("Hello, ", "world!")); // Output: "Hello, world!" (string concatenation)
// console.log(addarrow("The answer is: ", 42)); // Output: "The answer is: 42" (string concatenation)
// object => function => method
const richPerson = {
    name: "Elon Musk",
    age: 52,
    company: "Tesla",
    balance: 200000000000,
    addBalance(ammount) {
        const newBalance = this.balance + ammount;
        return newBalance;
    }
};
// console.log(richPerson.addBalance(5000000000)); // Output: 205000000000
// arr => function => method
const numbers = [1, 2, 3, 4, 5];
const doubleNumber = numbers.map((num) => num * 2);
console.log(doubleNumber); // Output: [2, 4, 6, 8, 10]
//# sourceMappingURL=function.js.map