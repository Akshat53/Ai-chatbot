import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import { compare, hash } from "bcrypt";

export const getAllUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.find();
    return res.status(200).json({ message: "ok", user });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};

export const userSignUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await hash(password, 10);
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(401).json("user already exist with this email id ");
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    return res.status(201).json({
      message: "user signed up successfully",
      id: user._id.toString(),
    });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};
export const userLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json("user not exist");
    }
    const checkPassword = await compare(password, user.password);
    if (!checkPassword) {
      return res.status(403).json("Entered password is incorrect");
    }
    return res
      .status(200)
      .json({ message: "ok", id: user._id.toString(), name: user.name });
  } catch (error) {
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};
