
 /*HANDS-ON 1: Smart Login Status Engine
----------------------------------------

Initial data:*/
let isLoggedIn = true;
let isProfileComplete = false;
let y
//If user is not logged in → show "Please login"
if(!isLoggedIn)
     y="Please login"
// If logged in but profile incomplete → show "Complete your profile"
if(isLoggedIn && !isprofileComplete)
     y="Complete your profile"
//If logged in and profile complete → show "Welcome back!"
if(isLoggedIn && isprofileComplete)
    y="Welcome back!"
//Store the result in message
let result=y;
//Print the message
console.log(y)



/*HANDS-ON 2: Course Price Tag Labeler
------------------------------------
Initial data:*/
let price = 1299;
let y1
function price(a){
    //If price < 500 → "Budget Course"
    if(a<500){
        y1= "Budget Course"
        return y1
    }
    //If price between 500–1000 → "Standard Course"
    if(a>500 && a<1000){
        y1="Standard Course"
        return y1
    } 
    //If price > 1000 → "Premium Course"
    if(a >1000){
        y1="Premium Course"
        return y1;
    } 
}
//Store label in courseTag
let result1=price(1299)
//Print the label
console.log(result)


/*HANDS-ON 3: Enrollment Eligibility Checker
------------------------------------------
Initial data:
    let hasPaid = true;
    let hasCompletedBasics= false;
Tasks:
   1. If both conditions are true → "Enroll Now"
   2. Otherwise → "Complete Requirements"
   3. Use ternary operator
   4. Store result in enrollMessage
   5. Print message*/

    let hasPaid = true;
    let hasCompletedBasics= false;
    let enrollMessage;
    enrollMessage=hasPaid && hasCompletedBasics?"Enroll Now":"Complete Requirements"
    console.log(enrollMessage);

