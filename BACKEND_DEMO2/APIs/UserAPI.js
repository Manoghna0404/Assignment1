import exp from 'express';
import {UserModel} from '../models/userModels.js';
export const userApp=exp.Router()

//create user
userApp.post('/users',async(req,res)=>{
    //get newuser from 
    let newUser=req.body;
    //create new user in db
    let newUserDoc=UserModel(newUser)
    //save to db
    await newUserDoc.save();
    //send response as new user created
    res.status(200).json({message:"New user created"})

})
//test route
userApp.get('/users',async(req,res)=>{
    //get all users from db
    let usersList=await UserModel.find()
    //send the response users list
    res.status(200).json({message:"users list",payload:usersList})
})

//get user by id
userApp.get('/users/:id',async(req,res)=>{
    //get objectOID from url param
    let objId=req.params.id;
    //find user in db
    let userObj=await UserModel.findById(objId);
    //send response as user found by id
    res.status(200).json({message:"id:",payload:userObj})
});
//update user
userApp.put("/user/:id",async(req,res)=>{
    //get objectid from url params
    let objId=req.params.id
    //get modified user from req body
    let modifiedUser=req.body
    //find the user and update it
    let latestUser=await UserModel.findByIdAndUpdate(objId,{$set:{...modifiedUser}},{runValidators:true})
    //send response as user modified
    res.status(200).json({message:"user modified",payload:latestUser})
});
//delete id
userApp.delete("/user/:id",async(req,res)=>{
    //get objectid from url params
    let objId=req.params.id
    //find the user and delete it
    let deletedUser=await UserModel.findByIdAndDelete(objId)
    //send response as user deleted
    res.status(200).json({message:"user deleted",payload:deletedUser})
})
