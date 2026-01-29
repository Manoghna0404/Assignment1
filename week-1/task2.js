const user={
    id:101,
    name:'Ravi',
    email:'ravi@gmail.com',
    role:'student',
    isActive:true
};
//Read and print the user’s name and email
console.log(user.name)
console.log(user.email)
//Add a new property lastLogin: "2026-01-01"
user.LastLogin='2026-01-01'
console.log(user)
//Update role from "student" to "admin"
user.role='admin'
console.log(user)
//Delete the isActive property
delete user.isActive
console.log(user)
//Use Object.keys() to list all remaining fields
console.log(Object.keys(user))