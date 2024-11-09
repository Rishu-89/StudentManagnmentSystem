import mongoose from 'mongoose'

let couserSchema= new mongoose.Schema({

  name:{
    type:String,
    required:true
  }

})

export default mongoose.model("Course",couserSchema);