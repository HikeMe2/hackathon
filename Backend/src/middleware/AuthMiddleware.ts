import { NextFunction } from "express";
import jsonwebtoken, { Secret } from 'jsonwebtoken';
import 'dotenv/config';

// you get the token from the header
const validateToken = (req:any,res:any,next:NextFunction) =>{
    try{
        const SECRET_KEY = process.env.SECRET_KEY;
        const [_bearer,token] = req.headers['authorization'].split(" ");
        const _decoded = jsonwebtoken.verify(token,<Secret>SECRET_KEY);
        next();
    }
    catch(error){
        res.status(401).send("Unathorized: signing out")
    }
    

}

export default validateToken;