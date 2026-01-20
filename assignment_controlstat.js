/*let isLoggedIn=true;
let isprofileComplete=1;
let y
if(!isLoggedIn)
     y="Please login"
if(isLoggedIn && !isprofileComplete)
     y="Complete your profile"
if(isLoggedIn && isprofileComplete)
    y="Welcome back!"
let result=y;
console.log(y)*/

let y
function price(a){
    if(a<500){
        y= "Budget Course"
        return y
    }
    if(a>500 && a<1000){
        y="Standard Course"
        return y
    } 
    if(a >1000){
        y="Premium Course"
        return y;
    } 
}
let result=price(499)
console.log(result)
