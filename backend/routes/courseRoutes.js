import express from 'express'
import { isAdmin,requireSignIn } from "./../middlewares/authMiddleware.js";

import {
  createCourseController,
  updateCourseController,
  courseController,
  singleCourseController,
  deleteCourseController,
} from "../controllers/courseController.js";
let router=express.Router();

router.post("/create-course", requireSignIn,isAdmin,createCourseController);


router.put("/update-course/:id",requireSignIn,isAdmin,updateCourseController);

router.get('/get-course',courseController)

router.get("/single-course",singleCourseController)

router.delete("/delete-course/:id",requireSignIn,isAdmin,deleteCourseController);



export default router;