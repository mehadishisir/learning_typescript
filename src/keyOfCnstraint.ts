// keyof : type Operator

type richStudent={
    car:string,
    phone:string,
    house:string
}
type Myself1=keyof richStudent; // Output: "car" | "phone" | "house"


const myself: Myself1 = "car"; // Valid
const myself2: Myself1 = "phone"; // Valid
const myself3: Myself1 = "house"; // Valid


type User={
    id:number,
    name:string,
    email:string
}
const user:User={
    id:1,
    name:"John Doe",
    email:"john.doe@example.com"
}

const myId=user["id"]
const myName=user["name"]
const myEmail=user["email"]

// type userKey=keyof User; // Output: "id" | "name" | "email"

const getPropertyFromObj=<x>(obj:x,key:keyof x)=>{
    return obj[key]
}

const result = getPropertyFromObj(user,"name") // Output: "John Doe"
console.log(result)
const product={
    id:101,
    name:"Laptop",
    price:999.99
}
const result2=getPropertyFromObj(product,"price")
console.log(result2) // Output: 999.99