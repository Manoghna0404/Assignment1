const users=[
{ id:1,name:"Ravi",role:"student",active:true },
{ id:2,name:"Anil",role:"admin",active:true },
{ id:3,name:"Suman",role:"student",active:false }
];

//1.Getonlyactiveusers
const activeUsers=users.filter(user=>user.active);

//2.Extractnamesofactiveusers
const activeUserNames=activeUsers.map(user=>user.name);

//3.Checkifanyadminexists
const hasAdmin=users.some(user=>user.role==="admin");

//4.Finduserbyid
const foundUser=users.find(user=>user.id===2);

//5.Deactivateauserimmutably
const updatedUsers=users.map(user=>
user.id===1
?{...user,active:false}
:user
);

console.log(activeUsers);
console.log(activeUserNames);
console.log(hasAdmin);
console.log(foundUser);
console.log(updatedUsers);