import { Router } from "express";
import UserController from "../controllers/UserController";


const uc: UserController = new UserController();


export const userRoutes: Router = Router()


userRoutes.route('/login')
    .post(uc.login())


userRoutes.route('/signup')
    .post(uc.signup())



userRoutes.route('/logout')
    .post(uc.logout())

userRoutes.route('/resetpassword')
    .put(uc.resetPassword())
