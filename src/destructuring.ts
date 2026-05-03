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