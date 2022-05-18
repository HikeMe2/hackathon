import { NextFunction } from 'express';
import { ITrail } from '../interfaces/ITrail';
import * as dbactions from '../models/trailDBFunctions';
const getTrail = async(req:any ,res:any ,next:NextFunction) =>{
    const trail_id = req.query.trail_id;
    try{
        const trail: ITrail = await dbactions.getTrailFromDb(trail_id)
        res.send(trail)
    }


    catch(err){
        next(err)
    }
}

const getAllTrails = async(req:any ,res:any, next:NextFunction) =>{
    try{
        const trails: ITrail[] = await dbactions.getAllTrails()
        res.send(trails)
    }
    catch(err){
        next(err)
    }
}

const sendQuestionare = async(req:any,res: any, next: NextFunction) =>{
    throw Error("Not implemented")
}
  

export {getTrail,getAllTrails,sendQuestionare}