import {Router} from "express";
import { getAllUser, userSignUp,userLogin, verifyUser } from "../controllers/user-controller.js";
import { verifyToken } from "../utils/token-manager.js";



const userRouter = Router();
userRouter.get("/",getAllUser);
userRouter.post("/signup",userSignUp)
userRouter.post("/login",userLogin)
userRouter.get("/auth-user",verifyToken,verifyUser)

export default userRouter;