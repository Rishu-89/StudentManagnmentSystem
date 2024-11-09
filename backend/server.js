import express from 'express';

import connectDb from './config/db.js';
 
import morgan from 'morgan'

import cors from 'cors'

import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js'
import courseRoutes from './routes/courseRoutes.js'
import studentRoutes from './routes/studentRoutes.js'


let app=express();


dotenv.config();
connectDb();



app.use(cors());

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/course',courseRoutes);
app.use("/api/v1/student", studentRoutes);


app.get("/",(req,res)=>{
   res.send("Hello World")
})

const PORT=process.env.PORT||8080;

app.listen(PORT,()=>{
  console.log(`Port is running in ${process.env.DEV_MODE} mode  on ${PORT}`)
})