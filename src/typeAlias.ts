// object type alias

type Person={
    id:number,
    name:{
        first:string,
        last:string
    },
    age:number,
    address:{
        street:string,
        city:string,
        zip:string
    }
}
const person:Person={
    id:123,
    name:{
        first:"Mehadi",
        last:"Hasan"

    },
    age:25,
    address:{
        street:"123 Main St",
        city:"Dhaka",
        zip:"12345"
    }
}


// function type alias
type Add=(a:number,b:number)=>number

const add:Add=(a,b)=>{
    return a+b
}
console.log(add(5,10)); // Output: 15