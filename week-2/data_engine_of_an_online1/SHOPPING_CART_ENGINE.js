const courses=[
{ id:101,title:"JavaScript",price:999,published:true },
{ id:102,title:"React",price:1499,published:false },
{ id:103,title:"Node",price:1299,published:true }
];

const cart=[
{ courseId:101,qty:1 },
{ courseId:103,qty:2 }
];

//1.Mergecartwithcoursestogetfullcourseinfo
const detailedCart=cart.map(item=>{
const course=courses.find(c=>c.id===item.courseId);
return{...item,...course};
});

//2.Calculatetotalcartamount
const totalAmount=detailedCart.reduce(
(sum,item)=>sum+item.price*item.qty,0
);

//3.Increasequantityofacourse(immutably)
const increasedCart=cart.map(item=>
item.courseId===101
?{...item,qty:item.qty+1}
:item
);

//4.Removeacoursefromcart
const updatedCart=cart.filter(item=>item.courseId!==103);

//5.Checkifallcartitemsarepaidcourses
const allPaid=detailedCart.every(item=>item.price>0);

console.log(detailedCart);
console.log(totalAmount);
console.log(increasedCart);
console.log(updatedCart);
console.log(allPaid);