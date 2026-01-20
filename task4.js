const temperatures = [32, 35, 28, 40, 38, 30, 42];
//filter() temperatures above 35
let result=temperatures.filter(element=>element>35)
console.log(result)
//map() to convert all temperatures from Celsius → Fahrenheit
let result1=temperatures.map(element=>element+32)
console.log(result1)
//reduce() to calculate average temperature
let result2=temperatures.reduce((acc,ele)=>acc+ele)
console.log(result2/temperatures.length)
//find() first temperature above 40
let result3=temperatures.find(element=>element>40)
console.log(result3)
//findIndex() of temperature 28
let result4=temperatures.findIndex(element=>element===28)
console.log(result4)