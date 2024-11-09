import userModel from '../models/userModel.js'

import {comparePassword, hashPassword} from '../helpers/authHelper.js'
import jwt from 'jsonwebtoken';




export const registerController=async(req,res)=>{
  
  try {
   let {name,email,phone,password}=req.body;
   if(!name){
    return res.send({message:"Name is Required"});
   }
   if(!email){
     return res.send({message:"email is Required"});
    }
    if(!phone){
     return res.send({message:"phone is Required"});
    }
    if(!password){
     return res.send({message:"password is Required"});
    }
    

        
    let exisitingUser=await userModel.findOne({email})
    if(exisitingUser){
    return res.status(200).send({
       sucess:false,
       message:"Already registered",
       
     })
    }



    const hashedPassword=await hashPassword(password);
             
     const user=await new userModel({
     name,
     email,
     password:hashedPassword,
     phone,
     
    }).save();

    res.status(201).send({
     sucess:true,
     message:"Registration Sucessfully",
     user
    })








  } catch (error) {
  
   console.log(error)
   res.status(500).send({
     sucess:false,
     message:"error in registration",
     error
   })
  }
}






export const loginController=async(req,res)=>{
try {

 let {email,password}=req.body;
 if(!email && !password){
   return res.status(404).send({
     sucess:false,
     message:"Error in login or password"
   })
 }
 


 let user=await userModel.findOne({email});

 if(!user){
   return res.status(404).send({
     sucess:false,
     message:"Email Not register"
       })
 }

 const match=await comparePassword(password,user.password);
 if(!match){
   return res.status(200).send({
     sucess:false,
     message:"invalid Password"
       })
 }


let token=await jwt.sign({_id:user.id},process.env.JWT_SECRET,{expiresIn:"7d"})

res.status(200).send({
 sucess:true,
 message:"Loged in sucessfully",
 user:{
   name:user.name,
   email:user.email,
   phone:user.phone,
   address:user.address,
   role:user.role
 },
 token
})




} catch (error) {
 console.log(error)
 res.status(500).send({
   sucess:false,
   message:"error in login",
   error
 })
}
}