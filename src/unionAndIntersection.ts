type UserRole="admin" | "editor" | "viewer";

const getDashboardAccess=(role:UserRole):string=>{
    if(role==="admin"){
        return "Full access to dashboard";
    }
    else if(role==="editor"){
        return "Limited access to dashboard";
    }
    else if(role==="viewer"){
        return "Read-only access to dashboard";
    }
    else{
        return "Invalid role";

    }
}
console.log(getDashboardAccess("admin")); // Output: Full access to dashboard
console.log(getDashboardAccess("editor")); // Output: Limited access to dashboard
console.log(getDashboardAccess("viewer")); // Output: Read-only access to dashboard
console.log(getDashboardAccess("invalid")); // Output: Invalid role

// intersection type
type Admin={
    id:number,
    name:string,    
    role:"admin"
}

type Editor={
    id:number,
    name:string,
    role:"editor"
}

type AdminEditor=Admin & Editor;

const adminEditor:AdminEditor={

    id:1,
    name:"Mehadi",
    role:"admin" // This will cause an error because the role cannot be both "admin" and "editor"
}   

