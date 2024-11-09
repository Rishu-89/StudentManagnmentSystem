import mongoose from "mongoose";

let studentSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  phone:{
    type:Number,
    required:true
  },
  courseId:{
  type:mongoose.ObjectId,
  ref:"Course"
},


})

export default mongoose.model("Student",studentSchema);