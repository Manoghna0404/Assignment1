// let possibility=true;
// let promiseObj=new Promise((fulfill,reject)=>{
//     setTimeout(()=>{
//         if(possibility===true)
//             fulfill("I will get highest sgpa in this semister")
//         else
//             reject("Sorry,I failed to get highest sgpa")
//     },3000);
// })
// promiseObj
// .then((message)=>console.log(message))
// .catch((error)=>console.log(error));

/*fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json())
.then(data=>console.log('data is',data))
.catch(err=>console.log('err is',err))*/

//modern type
async function getData(){
    let res=await fetch('https://jsonplaceholder.typicode.com/posts')
    let data=await res.json();
    console.log(data);
}
getData();