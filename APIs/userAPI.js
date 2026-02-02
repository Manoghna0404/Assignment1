//create HTTP server
//import express module
import exp from 'express';
//create server
//mini express
export const userApp=exp.Router()
//create USER API(req handlers-users)
let users=[];
userApp.get('/users',(req,res)=>{
    //send resonse to client
    res.status(200).json({message:'All Users',payload:users});
    //console.log(users)
});
//get req handling route(Read uers)
userApp.post('/user',(req,res)=>{
   let newUser=req.body;
   users.push(newUser)
   res.status(200).json({message:"User created",payload:newUser})
   //console.log('new user',newUser)
})
//post req 
userApp.put('/user',(req,res)=>{
    //get modified users from req
   let modifyUser=req.body;
   //find the user with id exist in array
    let result=users.findIndex(ele=>ele.id===modifyUser.id)
    //if user not found ,send res as "user not found"
    if(result===-1){
    return res.status(404).json({message:"user not found"})
    }
    //if user found then modify the user
    let deletedUsers=users.splice(result,1,modifyUser)
    //send res as user modified
    res.status(200).json({message:"user modified",payload:modifyUser})
})

//read user by id
userApp.get('/user/:id',(req,res)=>{
    let userId=Number(req.params.id)
    //read user by this id
    let user=users.find(userObj=>userObj.id===userId)
    if(!user)
      return res.status(404).json({message:"user not found"})
    res.status(200).json({"message":"user","payload":user})
})
//delete request
userApp.delete('/user/:id',(req,res)=>{
    let deleteUser=Number(req.params.id);
   //find the user with id exist in array
    let result1=users.findIndex(ele=>ele.id===deleteUser)
    //if user not found ,send res as "user not found"
    if(result1===-1){
    return res.status(404).json({message:"user not found"})
    }
    //if user found then modify the user
    let deleteUsers=users.splice(result1,1)
    //send res as user modified
    res.status(200).json({message:"user deleted",payload:deleteUsers})
})