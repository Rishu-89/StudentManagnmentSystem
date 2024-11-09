import mongoose from 'mongoose'


const connectDb=async()=>{
  
  try {
    const conn=await mongoose.connect(process.env.MONGO_URL);
  console.log(`connected to mongoDb database ${conn.connection.host}`)

  } catch (error) {
   
    console.log(`error in database ${error}`)
  }
};
export default connectDb;