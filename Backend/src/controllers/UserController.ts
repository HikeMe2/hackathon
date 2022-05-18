import { NextFunction } from 'express';

export default class UserController{

    constructor(){

    }


    login:Function = async (req:any, res:any ,next:NextFunction) =>{
        throw Error("Not implemented")
    }


    logout: Function = async(req:any,res:any, next: NextFunction) =>{
        throw Error("Not implemented")
    }

    signup: Function = async(req:any,res:any, next: NextFunction) =>{
        throw Error("Not implemented")
    }

    resetPassword: Function = async(req:any,res:any, next: NextFunction) =>{
        throw Error("Not implemented")
    }
    





}