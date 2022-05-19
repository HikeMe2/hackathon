import { Router } from "express";
import express from 'express'
import * as tc from '../controllers/TrailController'


export const trailRouter: Router = express.Router()


trailRouter.route('/gettrail?')
    .get(tc.getTrail)

trailRouter.route('/getalltrails')
    .get(tc.getAllTrails)

trailRouter.route('/processquestionaire?')
    .get(tc.processQuestionaire)
