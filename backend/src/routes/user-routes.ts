import {Router} from "express";
import { getAllUser, userSignUp,userLogin } from "../controllers/user-controller.js";



const userRouter = Router();
userRouter.get("/",getAllUser);
userRouter.post("/signup",userSignUp)
userRouter.post("/login",userLogin)

export default userRouter;