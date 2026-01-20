const user={
    id:101,
    name:'Ravi',
    email:'ravi@gmail.com',
    role:'student',
    isActive:true
};
console.log(user.name)
console.log(user.email)
user.LastLogin='2026-01-01'
console.log(user)
user.role='admin'
console.log(user)
delete user.isActive
console.log(user)
console.log(Object.keys(user))