import exp from 'express'
export const productApp=exp.Router()
let products=[];
//get all products
productApp.get('/products',(req,res)=>{
    res.status(200).json({message:"All products",payload:products})
});
//create new product
productApp.post('/product',(req,res)=>{
    //create new product
    let newProduct=req.body;
    //push into products array
    products.push(newProduct)
    //send res as new product created
    res.status(200).json({message:"new product created",payload:products})
});
//modify product
productApp.put('/product',(req,res)=>{
    //get modified product from req
    let modifyProduct=req.body;
    //find the product with id exist in array
    let result=products.findIndex(ele=>ele.id===modifyProduct.id)
    //if product not found ,send res as "product not found"
    if(result===-1)
        return res.status(404).json({message:"product not found"})
    //if product found then modify the product
    products[result]=modifyProduct;
    //send res as product modified
    res.status(200).json({message:"product modiifed",payload:modifyProduct})
});
//get product by id
productApp.get('/products/:id',(req,res)=>{
    //get id from req
    let productId=Number(req.params.id)
    //read user by this id
    let product=products.find(productObj=>productObj.id===productId)
    //if product not found send res as "product not found"
    if(!product)
      return res.status(404).json({message:"product not found"})
    //if product found send res as "product found"
    res.status(200).json({"message":"product found","payload":product})
});
//get product by name
productApp.get('/products-name/:name',(req,res)=>{
    //get name from req
    let productName=req.params.id
    //read user by the name
    let product=products.findIndex(productObj=>productObj.name===productName)
    //if product not found send res as "product not found"
    if(product===-1)
      return res.status(404).json({message:"product not found"})
    //if product found send res as "product found"
    res.status(200).json({"message":"product found","payload":product})
});
//get product by brand
productApp.get('/products-brand/:brand',(req,res)=>{
    //get brand from req
    let productBrand=req.params.id
    //read user by the brand
    let product=products.findIndex(productObj=>productObj.brand===productBrand)
    //if product not found send res as "product not found"
    if(product===-1)
      return res.status(404).json({message:"product not found"})
    //if product found send res as "product found"
    res.status(200).json({"message":"product found","payload":product})
});
productApp.delete('/product/:id',(req,res)=>{
    let deleteProduct=Number(req.params.id);
   //find the product with id exist in array
    let result1=products.findIndex(ele=>ele.id===deleteProduct)
    //if product not found ,send res as "product not found"
    if(result1===-1){
    return res.status(404).json({message:"product not found"})
    }
    //if product found then modify the product
    let deletedProducts=products.splice(result1,1)
    //send res as product modified
    res.status(200).json({message:"product deleted",payload:deletedProducts})
});