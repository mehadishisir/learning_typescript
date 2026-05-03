// object destructuring
const person = {
    name:"Mehadi",
    age:25,
    city:"Dhaka"
}

const {name,age,city} = person
// console.log(name); // Output: "Mehadi"
// console.log(age); // Output: 25
// console.log(city); // Output: "Dhaka"
// nasted object destructuring
const personWithAddress = {
    name:"Mehadi",
    age:25,
    city:"Dhaka",
    address:{
        street:"123 Main St",
        zip:"12345"
    }
}
const {name:name1,age:age1,city:city1,address:{street,zip}} = personWithAddress
// console.log(name1); // Output: "Mehadi"
// console.log(age1); // Output: 25
// console.log(city1); // Output: "Dhaka"
// console.log(street); // Output: "123 Main St"
// console.log(zip); // Output: "12345"


// array destructuring
const numbers = [1, 2, 3, 4, 5]
const [first, second, ...rest] = numbers
// console.log(first); // Output: 1
// console.log(second); // Output: 2
// console.log(rest); // Output: [3, 4, 5]
// nested array destructuring
const nestedNumbers: [number, [number, number], number, number] = [1, [2, 3], 4, 5]
const [first1, [second1, third1], ...rest1] = nestedNumbers
// console.log(first1); // Output: 1
// console.log(second1); // Output: 2
// console.log(third1); // Output: 3
// console.log(rest1); // Output: [4, 5]