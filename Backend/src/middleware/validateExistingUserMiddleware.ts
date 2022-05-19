import { NextFunction } from "express";

export const validateExistingUser = (req:any,res:any,next: NextFunction) =>{
    if((!req.body.email || req.body.email.trim().length <= 0) || (!req.body.password || req.body.password.trim().length <= 0)){
        res.status(422).send("One or more fields is missing")
        return
    }
    next();
}