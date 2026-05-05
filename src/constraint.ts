 
 type studentUniqueInfo={
    hasCar:boolean,
    hasPhone:boolean,
 }
 
 const addStudentToDatabase=<T extends{ id:number,name:string,studentUniqueInfo:studentUniqueInfo}
 >(studentInfo:T)=>{
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
    console.log(student2);

    const newStudent =addStudentToDatabase({
        headphone:"Sony WH-1000XM4",
        id:123,
        name:"Mehadi",
        studentUniqueInfo:{
            hasCar:true,
            hasPhone:true
        }
    })
    console.log(newStudent); // Output: { course: "Computer Science", headphone: "Sony WH-1000XM4", id: 123, name: "Mehadi" }