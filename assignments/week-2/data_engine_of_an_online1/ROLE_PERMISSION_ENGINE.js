const roles={
admin:["create","update","delete","view"],
student:["view"]
};

//Getallrolenames
const roleNames=Object.keys(roles);

//Checkifstudentcandelete
const canStudentDelete=roles.student.includes("delete");

//Creataflatlistofalluniquepermissions
const allPermissions=[...new Set(Object.values(roles).flat())];

//Addnewrolemoderatorimmutably
const updatedRoles={
...roles,
moderator:["update","view"]
};

console.log(roleNames);
console.log(canStudentDelete);
console.log(allPermissions);
console.log(updatedRoles);