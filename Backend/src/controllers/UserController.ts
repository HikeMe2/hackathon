import { IUserAJV } from './../interfaces/IUser';
import { NextFunction } from 'express';
import { ILogin } from '../interfaces/ILogin';
import { IUser } from '../interfaces/IUser';
import jsonwebtoken, {Secret} from 'jsonwebtoken'
import * as dbactions from '../models/userDBFunctions'


    const login = async (req:any, res:any ,next:NextFunction) =>{
        const credentials: ILogin = {
            email: req.body.email,
            password: req.body.password
        }
        try{
            const user: IUser| undefined = await dbactions.retrieveUserFromDB(credentials.email,credentials.password)
            if(!user){
                res.status(404)
                .send("Invalid username or password")
                return;
            }
            const signedUser = jsonwebtoken.sign(user as IUser,<Secret>process.env.SECRET_KEY)

            res.send(signedUser)

        }
        catch(error){
            next(error)
        }

    }

    const signup = async(req:any,res:any, next: NextFunction) =>{
        const {first_name,last_name,email,password,confirm_password}: IUserAJV = {
            first_name:req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            confirm_password: req.body.confirm_password
        }
        try{
            await dbactions.createUser(email,password,first_name,last_name)
            const user:IUser = {email:email,first_name,last_name:last_name}
            const signedUser = jsonwebtoken.sign(user as IUser,<Secret>process.env.SECRET_KEY)
            res.send(signedUser) 
        }
        catch(error){
            next(error)
        }

    }

    const logout = async(req:any,res:any, next: NextFunction) =>{
        throw Error("Not implemented")
    }



    const resetPassword = async(req:any,res:any, next: NextFunction) =>{
        throw Error("Not implemented")
    }
    

    const updateUser = async(req:any,res:any,next:NextFunction) =>{
        throw Error("Not implemented")
    }

    export {login,signup,logout,resetPassword}