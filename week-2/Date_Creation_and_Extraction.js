//Create a Date object for current date & time.
let date=new Date();
console.log(date);
/*Extract and display:
                    * Year
                    * Month (human readable)
                    * Date
                    * Day of week
                    * Hours, minutes, seconds*/
let year=date.getFullYear();
console.log(year);
let month=date.getMonth();
console.log(month);
let date_1=date.getDate();
console.log(date_1)
console.log(date.getDay())
console.log('Hours:',date.getHours(),'Minutes:',date.getMinutes(),'seconds:',date.getSeconds());
/* Display the date in this format:
                    DD-MM-YYYY HH:mm:ss*/
console.log(date.getDate(),'-',date.getMonth(),'-',date.getFullYear(),' ',date.getHours(),':',date.getMinutes(),':',date.getSeconds());
