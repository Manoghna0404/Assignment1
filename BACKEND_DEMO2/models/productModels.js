import {Schema,model} from 'mongoose'

///create user schema {pid,productName,price}
const productSchema=new Schema({
    pid:{
        type:Number,
        required:[true],
    },
    productName:{
        type:String,
        required:[true,"product name should be given"],
        maxLength:[10,"should not exceed more than 10 characters"],
        minLength:[4,"name should be atleast of 4 characters"]
    },
    price:{
        type:Number,
        required:[true,"price should be given"]
    },
},{
    strict:"throw",
    timestamps:true
})
//create product model with schema
//mongoose will take the name and plural it and create document with that
export const productModel=model("product",productSchema);