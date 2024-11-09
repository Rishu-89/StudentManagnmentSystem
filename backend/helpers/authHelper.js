import bcrypt from 'bcrypt'


export let hashPassword=async(password)=>{
  try {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  
  return hashedPassword;
  

  } catch (error) {
   
    console.log(error)
  }
 
}



export let comparePassword=(password,hashedPassword)=>{

return bcrypt.compare(password,hashedPassword);
}