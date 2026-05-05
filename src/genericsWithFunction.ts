// Generics with Functions


// const createArrayWIthString=(value:string)=>[value];
// const createArrayWithNumber=(value:number)=>[value];
// const createArrayWIthUserObj=(value:{name:string,age:string})=>[value];


const createArrayWithGeneric=<T>(value:T)=>[value];

const arrString=createArrayWithGeneric("Hello");
const arrNumber=createArrayWithGeneric(42);
const arrUserObj=createArrayWithGeneric({name:"Mehadi",age:"25"});



console.log(arrString); // Output: ["Hello"]
console.log(arrNumber); // Output: [42]
console.log(arrUserObj); // Output: [{name: "Mehadi", age: "25"}]



// tuple with generics
 const createArrayWithTuple=(param1:string,param2:number):[string,number]=>[param1,param2];

 const createArrayWithTupleGeneric=<X,Y>(param1:X,param2:Y):[X,Y]=>[param1,param2];

 const res1 = createArrayWithTupleGeneric("Hello",{
    name:"Mehadi",
    age:25
 })


 const addStudentToDatabase=<T>(studentInfo:T)=>{
    return{
        course:"Computer Science",
        ...studentInfo
    }

 }

 const student1=addStudentToDatabase({
    name:"John Doe",
    age:22,
    grade:"A"
 })
 const student2=addStudentToDatabase({
    name:"Jane Smith",
    age:21,
    grade:"B"
 })

    console.log(student1); // Output: { course: "Computer Science", name: "John Doe", age: 22, grade: "A" }
    console.log(student2); // Output: { course: "Computer Science", name: "Jane Smith", age: 21, grade: "B" }
    