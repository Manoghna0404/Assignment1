const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
//filter() employees from IT department
let result=employees.filter(employee=>employee.department=="IT")
console.log(result);
/*map() to add:
            netSalary = salary + 10% bonus*/
let result1=employees.map(employee=>{
    employee.netSalary=employee.salary+employee.salary*0.1;
    return employee
})
console.log(result1);
//reduce() to calculate total salary payout
let result2=employees.reduce((acc,ele)=>acc+ele.salary,0)
console.log(result2);
//find() employee with salary 30000
let result3=employees.find(employee=>employee.salary==30000)
console.log(result3);
//findIndex() of employee "Neha"
let result4=employees.findIndex(employee=>employee.name==='Neha')
console.log(result4)