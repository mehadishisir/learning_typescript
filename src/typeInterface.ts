type User={
    name:string;
    age:number;
    email:string;
}
type Role={
    role:"admin"|"user";

}
type UserWithRole=User & Role;
interface IUserWithRole extends IUser,IRole{
    role:"admin"|"user";
}
const User1:IUserWithRole={
    name:"John Doe",
    age:30,
    email:"john.doe@example.com",
    role:"admin"
}

// type intrface

interface IUser{
    name:string;
    age:number;
    email:string;

}

interface IRole{
    role:"admin"|"user";
}
