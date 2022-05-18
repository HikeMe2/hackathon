import * as uc from "../controllers/UserController";
import express, { Router } from "express";

export const userRouter: Router = express.Router()

userRouter.route('/login')
    .post(uc.login)

userRouter.route('/signup')
    .post(uc.signup)

userRouter.route('/logout')
    .post(uc.logout)

userRouter.route('/resetpassword')
    .put(uc.resetPassword)
