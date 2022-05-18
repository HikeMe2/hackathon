import { NextFunction } from 'express';
import { ILogin } from '../interfaces/ILogin';

    const login = (req:any, res:any ,next:NextFunction) =>{
        const credentials: ILogin = {
            email: req.body.email,
            password: req.body.password
        }
        

    }


    const logout = async(req:any,res:any, next: NextFunction) =>{
        throw Error("Not implemented")
    }

    const signup = async(req:any,res:any, next: NextFunction) =>{
        throw Error("Not implemented")
    }

    const resetPassword = async(req:any,res:any, next: NextFunction) =>{
        throw Error("Not implemented")
    }
    

    export {login,signup,logout,resetPassword}