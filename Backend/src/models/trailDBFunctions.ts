import axios, { AxiosResponse } from 'axios';
import mysql,{Connection,FieldPacket,RowDataPacket} from 'mysql2/promise';
import { IQuestionare } from "../interfaces/IQuestionare"
import { ITrail } from '../interfaces/ITrail';
import { connectionSettings } from './mysqlsettings';


async function getTrailFromDb(trail_id: number){
    
    const connection: Connection = await mysql.createConnection(connectionSettings)
    
    try{
        const [rows,_fields]: [RowDataPacket[],FieldPacket[]] = await connection.execute("SELECT * FROM trail WHERE trail_id = ?",[trail_id])
        return rows[0] as ITrail
    }
    catch(err){
        throw err
    }
    finally{
        connection.end()
    }
   
}

async function getAllTrails(){
    const connection: Connection = await mysql.createConnection(connectionSettings);
    try{
        const [rows,_fields]: [RowDataPacket[],FieldPacket[]] = await connection.execute("SELECT * FROM trail")
        return rows as ITrail[]
    }
    catch(err){
        throw err
    }
    finally{
        connection.end()
    }
}

async function getTrailRanges(trail_id: number[]){
    const connection: Connection = await mysql.createConnection(connectionSettings)
    const query = "SELECT * FROM trail WHERE trail_id IN " + "(" + trail_id.join(",") + ")";
    try{
        const [rows,_fields]: [RowDataPacket[],FieldPacket[]] = await connection.execute(query)
        return rows
    }
    catch(err){
        throw err
    }
    finally{
        connection.end()
    }
}


async function getTrailReccomendations(questionaire: IQuestionare){
    const ENDPOINTRECCOMENDATIONS: string = "http://ec2-18-184-57-159.eu-central-1.compute.amazonaws.com:8888/predict"
    try{
        const response: AxiosResponse = await axios.post(ENDPOINTRECCOMENDATIONS,questionaire)
        return response.data
    }

    catch(err) {
        throw err
    }


}


export {getAllTrails,getTrailFromDb,getTrailReccomendations,getTrailRanges}