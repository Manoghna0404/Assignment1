//function will pase as an argument here
function test1(a){
    console.log(a)
}
test1(function(){
    return 123;
})
//here the content in the functon is printed anonymous function is call back function
function test1(a){
    console.log(a())
}
test1(function(){
    return 123;
})