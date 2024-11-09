import express from 'express'
import { registerController,loginController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

let router=express.Router();


router.post('/register',registerController);


router.post('/login',loginController)

router.get("/admin-auth",requireSignIn,isAdmin,(req,res)=>{
 
  res.status(200).send({ok:true})
  })

export default router;