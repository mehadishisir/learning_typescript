// array spread
const friends = ["Alice", "Bob", "Charlie"];
const moreFriends = ["David", "Eve"];
const collegeFriends=["elon","steve","bill"]

// friends.push(collegeFriends)
friends.push(...collegeFriends)
friends.push(...moreFriends)
// console.log(friends); // Output: ["Alice", "Bob", "Charlie", "David", "Eve"]

// object spread
const person = {
    name:"Mehadi",
    age:25,
    city:"Dhaka"
}
const hobbys = {
    hobby1:"coding",
    hobby2:"traveling"
}
const personWithHobbys = {...person,...hobbys}
console.log(personWithHobbys); 
// Output: { name: "Mehadi", age: 25, city: "Dhaka", hobby1: "coding", hobby2: "traveling" }