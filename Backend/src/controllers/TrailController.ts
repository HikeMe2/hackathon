import {NextFunction} from 'express';
import {IQuestionare} from '../interfaces/IQuestionare';
import {ITrail} from '../interfaces/ITrail';
import * as dbactions from '../models/trailDBFunctions';
import { resetPassword } from './UserController';
const getTrail = async (req : any, res : any, next : NextFunction) => {
    const trail_id = req.query.trail_id;
    try {
        const trail: ITrail = await dbactions.getTrailFromDb(trail_id)
        if (! trail) {
            res.status(404).send("trail not found")
            return
        }
        res.send(trail)
    } catch (err) {
        next(err)
    }
}

const getAllTrails = async (req : any, res : any, next : NextFunction) => {
    try {
        const trails: ITrail[] = await dbactions.getAllTrails()
        res.send(trails)
    } catch (err) {
        next(err)
    }
}

const processQuestionaire = async (req : any, res : any, next : NextFunction) => {


    const questionaire: IQuestionare = {
        length_3d: parseFloat(req.query.length_3d),
        max_elevation: parseFloat(req.query.max_elevation),
        uphill: parseFloat(req.query.uphill),
        moving_time: parseFloat(req.query.moving_time),
        difficulty: parseFloat(req.query.difficulty),
        min_elevation: parseFloat(req.query.min_elevation),
        downhill: parseFloat(req.query.downhill),
        country: req.query.country,
        hiking_environment: req.query.hiking_environment
    }
    console.log(questionaire)
    try{
        const trail_ids: number[] = await dbactions.getTrailReccomendations(questionaire)
        const trails = await dbactions.getTrailRanges(trail_ids)
        res.send(trails)
    }

    catch(err){
        next(err)
    }
}


export {
    getTrail,
    getAllTrails,
    processQuestionaire
}
