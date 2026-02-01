//write a function that can extract marks grater than 70 pack them into array and return it
let marks=[90,70,89,30,40]
let result=[]
function m(q){
    for(let i of q){
        if(i>70)
            result.push(i)
    }
}
m(marks)
console.log(result)
//this is the simplest form of the above process with filter function where function returns to filter and filter returns to application thats why storing in variable
let marks1=[90,70,40,89,56]
let result1=marks1.filter(function(element){
    return element>70
})
console.log(result1)
//this is with the arrow function
let result2=marks1.filter((element)=> element>70)
console.log(result2)
//find all marks between 30 and 90
let result3=marks1.filter(function(element){
    return element>30 && element<90
})
console.log(result3);
//without map
let salaries=[100,200,300]
let updated_salaries=[]
function r(s){
    for(let i of s){
        i+=50
        updated_salaries.push(i)
    }  
}
r(salaries)
console.log(updated_salaries)
//with map
let result4=salaries.map(function(element){
    return element+50
})
console.log(result4)
let result5=salaries.filter(function(element){
    return element+50
})
console.log(result5)
/*function declaration

function findSum(a,b){
return a+b
}
//function expression
let findSum1=function(a,b){
return a+b
}
//Arrow function(simplify function expression)
let findSum2=(a,b)=>a+b
//when the body of the function contains one code then we use arrow dunction for better utilization otherwise of no use of using it
*/

//reduce aggregations
//find sum of marks
let result6=marks.reduce((accumulator,element)=>accumulator+element,0)
console.log(result6)
//finding small element in given array with reduce
let small=marks.reduce((acc,ele)=>acc< ele?acc:ele)
console.log(small)
//if element exists return element otherwise undefined
let result7=marks.find(element=>element===90)
console.log(result7)
//if element exists return index else -1
let result8=marks.findIndex(element=>element===56)
console.log(result8)
//Example

let student=[
    {sno:1,name:'ravi',age:21},
    {sno:2,name:'vikas',age:19},
    {sno:3,name:'madhu',age:30},
    {sno:4,name:'priya',age:35},
];
let res=student.filter(element=>element.age<20)
console.log(res)
let res1=student.map(element=>{
    if(element.name==='vikas')
         element.age=element.age+2
    return element
})
console.log(res1)
let res2=student.reduce((acc,ele)=>acc+ele.age,0)
console.log(res2)