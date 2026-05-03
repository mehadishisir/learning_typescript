// ?: tarnery operator : decision making operator

const marrageAge =(age:number)=>{
    if (age>=18){
    console.log("You are eligible for marriage");
    }   
    else{
        console.log("You are not eligible for marriage");
    }
}
// marrageAge(20); // Output: You are eligible for marriage


// using ternary operator
const marrageAgeTernary=(age:number)=>{
    age>=18 ? console.log("You are eligible for marriage") : console.log("You are not eligible for marriage");

}
// marrageAgeTernary(20);// Output: You are eligible for marriage



// ?: optional chaining operator : used to access properties of an object that may be null or undefined
type User={
    id:number,
    name:string,
    address?:{
        city:string,
        country:string
    }
}

const user1:User={

    id:1,
    name:"Mehadi",
    address:{
        city:"Dhaka",
        country:"Bangladesh"
    }
}   
const user2:User={
    id:2,

    name:"John"
}                               
console.log(user1.address?.city); // Output: Dhaka
console.log(user2.address?.city); // Output: undefined

// ?? nullish coalescing operator : used to provide a default value when the left-hand side is null or undefined
const getUserCity=(user:User):string=>{
    return user.address?.city ?? "City not available";
}
console.log(getUserCity(user1)); // Output: Dhaka
console.log(getUserCity(user2)); // Output: City not available  
