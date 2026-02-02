import jwt from "jsonwebtoken";
export function verifyToken(req,res,next){
    //token verification logic

    //get token from re(using cookie parser)
    console.log(req.cookie)//{token:""}
    let signedToken=req.cookies.token;
    if(!signedToken){
        return res.status(401).json({message:"please login first"})
    }
    //verify token(decode)
    let decodedToken=jwt.verify(signedToken,"abcdef");
    console.log("decode token:",decodedToken);
    next();
}