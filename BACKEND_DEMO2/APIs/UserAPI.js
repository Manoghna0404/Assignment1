import exp from 'express';
import {UserModel} from '../models/userModels.js';
<<<<<<< HEAD
import {hash,compare} from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {verifyToken} from '../middlewares/verifyToken.js'
=======
>>>>>>> 32e11db4f19eef8c25318cab3bb9398f8a280710
export const userApp=exp.Router()

//create user
userApp.post('/users',async(req,res)=>{
    //get newuser from 
    let newUser=req.body;
<<<<<<< HEAD
    //create hash for password or username
    let hashedPassword=await hash(newUser.password,12)
    newUser.password=hashedPassword
    //create new user in db
    let newUserDoc=new UserModel(newUser)
    //save to db
    await newUserDoc.save();
    //send response as new user created
    res.status(200).json({message:"New user created",payload:newUserDoc})
=======
    //create new user in db
    let newUserDoc=UserModel(newUser)
    //save to db
    await newUserDoc.save();
    //send response as new user created
    res.status(200).json({message:"New user created"})
>>>>>>> 32e11db4f19eef8c25318cab3bb9398f8a280710

})
//test route
userApp.get('/users',async(req,res)=>{
    //get all users from db
<<<<<<< HEAD
    let usersList=await UserModel.find({},{username:1,_id:0,age:1,password:1})
=======
    let usersList=await UserModel.find()
>>>>>>> 32e11db4f19eef8c25318cab3bb9398f8a280710
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
<<<<<<< HEAD

userApp.post('/auth',async(req,res)=>{
    //get user cred obj
    let userCred=req.body;
    //check for username
    let userOfDB=await UserModel.findOne({username:userCred.username})
    console.log(userOfDB);
    //if user not found
    if(userOfDB===null)
        return res.status(404).json({message:"Invalid username"});
        
    //comapre passwords
    let status=await compare(userCred.password,userOfDB.password)
    //if passwords not matched
    if(status===false){
        console.log(userCred.password)
        console.log(userOfDB.password)
        return res.status(404).json({message:"Invalid password"});
    }
    //create the signed token
    let signedToken=jwt.sign({username:userCred.username},'abcdef',{expiresIn:100})
    //send token in response
    
    res.cookie('token','signedToken',{
    httpOnly:true,
    secure:false,
    sameSite:"lax"
})
    //send token in res
    res.status(200).json({message:"login success"})
});
//test route
userApp.get('/test',verifyToken,(req,res)=>{
    res.json({message:"test route"});
});
=======
>>>>>>> 32e11db4f19eef8c25318cab3bb9398f8a280710
