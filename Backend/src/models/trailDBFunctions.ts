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

async function sendQuestionaireToDS(questionaire: IQuestionare){
    throw Error("Not implemented")
}


export {getAllTrails,getTrailFromDb,sendQuestionaireToDS}