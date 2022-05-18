import express, { Express } from "express";
import cors from 'cors';
import 'dotenv/config'
const PORT = process.env.PORT

const app: Express = express();


app.use(express.json())

app.use(cors())


// use routes and inject middleware

app.listen(() =>{
    console.log(`Now listening to connections on port ${PORT}`)
})












