import { NextFunction, Response, Request } from "express";
import {COOKIE_NAME} from './constants.js'
import jwt from "jsonwebtoken";

export const createToken = (id: string, email: string, expiresIn: string) => {
  const payload = { id, email };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  return token;
};

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const  token = req.signedCookies[`${COOKIE_NAME}`];
    return new Promise<void>((resolve,reject) =>{
      if (!token || token.trim() == ""){
        return res.status(401).json({message:"Token now recived"})
      }
      return jwt.verify(token ,process.env.JWT_SECRET,(err,success)=>{
        if (err){
          reject(err.message);
          return res.status(401).json({message:"token expired"})
        }
        else{
          resolve();
          res.locals.jwtData = success;
          return next();
        }
      })
    })
};
 
