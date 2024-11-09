import express from "express";

import {
  createStudentController,
  updateStudentController,
  getStudentController,
  getSingleStudentController,
  deleteStudentController,
  studentCountController,
  searchStudentController,
} from "../controllers/studentController.js";
import { requireSignIn,isAdmin } from '../middlewares/authMiddleware.js';

let router=express.Router();


router.post(
  "/create-student",
  requireSignIn,
  isAdmin,
  createStudentController
);

router.put(
  "/update-Student/:sid",
  requireSignIn,
  isAdmin,
  updateStudentController
);


router.get("/get-student", getStudentController);


router.get("/get-product/:slug", getSingleStudentController);

router.delete("/delete-student/:sid", deleteStudentController);

router.get("/student-count", studentCountController);

router.get("/search/:keyword", searchStudentController);

export default router;