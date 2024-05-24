import express from "express";
import { login, signUp } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.route("/login").post(login);
userRouter.route("/sign-up").post(signUp);

export default userRouter;
