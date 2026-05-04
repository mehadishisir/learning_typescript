interface developer<T,X=null>{
    name:string,
    salary:number,
    device:{
        type:string,
        brand:string,
        model:string,
        relasedYear:string
    },
    smartWatch:T,
    bike?:X

}
type poorDevice={
    type:string,
    brand:string,
    model:string,
    relasedYear:string  

}


const poorDveloper:developer<poorDevice>={
    name:"John Doe",
    salary:50000,
    device:{
        type:"laptop",

        brand:"Dell",
        model:"XPS 15",
        relasedYear:"2020"
    },
    smartWatch:{
    type:"smartwatch",
    brand:"Apple",
    model:"Watch Series 6",
    relasedYear:"2020"
        
    }
}

console.log(poorDveloper);