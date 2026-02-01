import exp from 'express';
import {productModel} from '../models/productModels.js';
export const productApp=exp.Router();

//getting all products
productApp.get('/products',async(req,res)=>{
    //get all products from db
    let productList=await productModel.find();
    //send response 
    res.status(200).json({message:"All products",payload:productList})
});
//creating new product
productApp.post('/product',async(req,res)=>{
    //get new product from req body
    let newProduct=req.body;
    //create new product in db
    let newProductDoc=productModel(newProduct)
    //save to db
    await newProductDoc.save();
    //send response as new product created
    res.status(200).json({message:"New product created"})
});

//get product by objectid
productApp.get('/product/:id',async(req,res)=>{
    let productId=req.params.id;
        //find product in db
    let productObj=await productModel.findById(productId);
    //send response as product found by id
    res.status(200).json({message:"product found by id",payload:productObj})
})
;
//update the product
productApp.put("/product/:id",async(req,res)=>{
    //get product id from url
    let productId=req.params.id
    //get modified product from req body
    let modifiedProduct=req.body
    //find the product and update it
    let latestProduct=await productModel.findByIdAndUpdate(productId,{$set:{...modifiedProduct}},{runValidators:true})
    //send response as product modified
    res.status(200).json({message:"product modified",payload:latestProduct})

})

//delete the user by id
productApp.delete('/product/:id',async(req,res)=>{
    //get product id from url   
    let productId=req.params.id;
    //find the product and delete it
    let deleteProductId=await productModel.findByIdAndDelete(productId)
    //send response as product deleted
    res.status(200).json({message:"product deleted",payload:deleteProductId});
});
