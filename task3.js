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
for(let i of Object.values(marks)){
    sum+=i
}
console.log(sum)
console.log(sum/count)
let high_score=marks.maths
for(let v of Object.values(marks)){
    if(v>high_score)
        high_score=v
}
console.log(high_score)
marks.computer=90
console.log(marks)
