import { validateNew } from './../middleware/ValidateNewUserMiddleware';
import * as uc from "../controllers/UserController";
import express, { Router } from "express";

export const userRouter: Router = express.Router()

userRouter.route('/login')
    .post(uc.login)

userRouter.route('/signup')
    .post(validateNew,uc.signup)

userRouter.route('/logout')
    .post(uc.logout)

userRouter.route('/resetpassword')
    .put(uc.resetPassword)

userRouter.route('/getuserinfo?')
    .get(uc.greetUser)
