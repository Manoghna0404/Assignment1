const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
let sum=0,count=0;
for(let m of Object.values(marks)){
    count++;
}
//Calculate total marks
for(let i of Object.values(marks)){
    sum+=i
}
console.log(sum)
//Calculate average marks
console.log(sum/count)
let high_score=marks.maths
//Find the highest scoring subject
for(let v of Object.values(marks)){
    if(v>high_score)
        high_score=v
}
console.log(high_score)
//Add a new subject computer: 90
marks.computer=90
console.log(marks)
