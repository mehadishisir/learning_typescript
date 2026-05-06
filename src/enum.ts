enum  userRoles {
    Admin = 'Admin',
    User = 'User',
    Guest = 'Guest'
}
const whatIcan=(role:userRoles)=>{
    if (role === userRoles.Admin){
        return "I can manage users and settings."
    }
    else if (role === userRoles.User){
        return "I can view and edit my profile."
    }
    else if (role === userRoles.Guest){
        return "I can view content but cannot make changes."
    }
    else{
        return "Invalid role."
    }
}
console.log(whatIcan(userRoles.User))