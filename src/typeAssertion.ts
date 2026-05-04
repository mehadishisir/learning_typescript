let something:any;
something = 123;
const somethingNum=(something as number).toString();
console.log(`String representation of the number: ${somethingNum}`); // Output: String representation of the number: 123
something = 'Hello';
// Type assertion
const strLength: number = (something as string).length;
console.log(`Length of the string: ${strLength}`); // Output: Length of the string: 5



const kgToGMConverter=(input:number|string)=>{
if (typeof input === "number"){
    return input * 1000;
}else if (typeof input === "string"){
    const [value]=input.split(" ");
    console.log(`Value: ${value}`);
    return `${Number(value) * 1000} GM`;
}
}
const result1=kgToGMConverter(2) as number;
console.log({result1}); // Output: { result1: 2000 }
const result2=kgToGMConverter("2 kg") as string;
console.log({result2}); // Output: { result2: '2000 GM' }