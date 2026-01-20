const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
//Use filter() to get only inStock products
let result=cart.filter(element=>element.inStock==true)
console.log(result)
//Use map() to create a new array with:  { name, totalPrice }
let total=0,new_array=[];
let result1=cart.map(element=>new_array.push(element.name,element.price*element.quantity))
console.log(new_array)

//Use reduce() to calculate grand total cart value
let result2=cart.reduce((acc,ele)=>acc+ele.quantity*ele.price,0)
console.log(result2)
//Use find() to get details of "Mouse"
let result3=cart.find(element=>element.name==='Mouse')
console.log(result3)
//Use findIndex() to find the position of "Keyboard"
let result4=cart.findIndex(element=>element.name==='Keyboard')
console.log(result4)
