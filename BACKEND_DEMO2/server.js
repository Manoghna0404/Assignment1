import exp from 'express';
import {userApp} from './APIs/UserAPI.js';
import{productApp} from './APIs/productAPI.js';
import cookieParser from 'cookie-parser';
import {connect} from 'mongoose';
const app=exp()
app.use(cookieParser())
//to parse json body from request
app.use(exp.json())


//function to connect to database
async function connectDB(){
    //connect to mongodb server
    try{
   await connect('mongodb://localhost:27017/anuragdb2')
   console.log("server connected successfully")
    }
    //catch the error if any
    catch(err){
        console.log("not connected successfully",err)
    }
    
}
connectDB()
//if path starts with /user-api ,forward req to userApp
app.use('/user-api',userApp)
//if path starts with /product-api,forward req to productApp
app.use('/product-api',productApp)
//assign port
const port=4000

app.listen(port,()=>console.log("server listening on port 4000"));

