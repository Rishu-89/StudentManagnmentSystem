
import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js';

export const requireSignIn=(req,res,next)=>{
  try {
    const decode=jwt.verify(req.headers.authorization,process.env.JWT_SECRET);
    
req.user=decode;

next();
  } catch (error) {
   console.log(error) 
  }
}




export const isAdmin=async(req,res,next)=>{
 
  
  try {
    const user= await userModel.findById(req.user._id);
  if(user.role!==1){
   return res.status(401).send({
      sucess:false,
      message:"Unauthorized acess",

    })
  }
else{
  next();
}
    
  } catch (error) {
    
    console.log(error)
    res.status(401).send({
      sucess:false,
      message:"Error in adminMiddleware"
    })
  }
}