let dob = "2005-02-16";
//Calculate exact age in years
let array=dob.split('-');
let year=array[0];
let month=array[1];
let date=array[2];
let date1=new Date();
current_year=date1.getFullYear();
current_month=date1.getMonth();
current_date=date1.getDate();
let age=current_year-year;
if(month-current_month<0 || date-current_date<0)
    age--;
console.log(age);
