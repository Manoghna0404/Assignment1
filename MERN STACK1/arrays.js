let marks=[10,20,30]
let skills=['html','css','javascript']
console.log(marks)
console.log(skills)
for(let v of skills){
    console.log(v);
}
let sum=0;
for(let i of marks){
    sum+=i
}
console.log(sum)
let students=[23,44,76,58,90]
let minimum=students[0];
//write a function that receive marks arrays as argument and return small element
function min(students){
for(let i of students){
    if(i<minimum)
        minimum=i;
}
return minimum
}
let result=min(students)
console.log(result)
//write a fun that receives skill array and skillnames as argument and return the index of skillname exist else skill not found

function exist(skill,skillname){
    for(let i=0;i<skills.length;i++){
        if(skills[i]===skillname)
            return i
    }
    return "skill not found"
}
let result1=exist(skills,'javascript')
console.log(result1)