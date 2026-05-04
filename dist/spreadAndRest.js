"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// array spread
const friends = ["Alice", "Bob", "Charlie"];
const moreFriends = ["David", "Eve"];
const collegeFriends = ["elon", "steve", "bill"];
// friends.push(collegeFriends)
friends.push(...collegeFriends);
friends.push(...moreFriends);
// console.log(friends); // Output: ["Alice", "Bob", "Charlie", "David", "Eve"]
// object spread
const person = {
    name: "Mehadi",
    age: 25,
    city: "Dhaka"
};
const hobbys = {
    hobby1: "coding",
    hobby2: "traveling"
};
const personWithHobbys = { ...person, ...hobbys };
// console.log(personWithHobbys); 
// Output: { name: "Mehadi", age: 25, city: "Dhaka", hobby1: "coding", hobby2: "traveling" }
// rest parameter
// const sendInvites =(friends1:string,friend2:string,friend3:string)=>{
//     console.log(`send invitation to ${friends1}`);
//     console.log(`send invitation to ${friend2}`);
//     console.log(`send invitation to ${friend3}`);
// }
// sendInvites("Alice","Bob","Charlie");
const sendInvites = (...friends) => {
    friends.forEach((friends) => {
        console.log(`send invitation to ${friends}`);
    });
};
sendInvites("Alice", "Bob", "Charlie", "David", "Eve");
//# sourceMappingURL=spreadAndRest.js.map