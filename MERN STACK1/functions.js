/*function sumOfTwo(a,b){
    sum=a+b
    return sum
}
console.log(sumOfTwo(3,5))
console.log(typeof sumOfTwo)*/
function threeNum(a,b,c){
    if(a>b && a>c)
        return a
    else if(b>a && b>c)
        return b
    else
        return c
}
let result=threeNum(4,5,6)
console.log("Greatest of three numbers is",result)