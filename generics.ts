// generics
type GenericArray<T>=Array<T>

// const students:string[]=["Alice","Bob","Charlie"];
const students:GenericArray<string>=["Alice","Bob","Charlie"];
// const ages:number[]=[20,25,30];
const ages:GenericArray<number>=[20,25,30];
// const booleanValues:boolean[]=[true,false,true];
const booleanValues:GenericArray<boolean>=[true,false,true];
const genericObject:GenericArray<{name:string,age:number}>=[
    {name:"Alice",age:20},
    {name:"Bob",age:25},
    {name:"Charlie",age:30}
]



// generics in touples
type Coordinates<X,Y>=[X,Y]

const coordinates1:Coordinates<number,number>=[10,20]
const coordinates2:Coordinates<string,string>=["10","20"]