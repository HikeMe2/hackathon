import { NextFunction } from 'express';
import { IUserAJV } from '../interfaces/IUser';
import { validateNewUser } from '../schemas/userSchema';
export const validateNew = (req:any,res:any,next:NextFunction) =>{
    if(req.body.password != req.body.confirm_password ){
        res.status(422).send({"errorMessages":"Passwords do not match"})
        return;
    }
    const newUser: IUserAJV = {
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password,
        confirm_password: req.body.confirm_password
    }
    
    if(!validateNewUser(newUser)){
        const errors = validateNewUser.errors?.map(error => error.message )
        res.status(422).send({"errorMessages":errors})
        return;
    }
    next()
}