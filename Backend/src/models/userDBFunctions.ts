import { connectionSettings } from "./mysqlsettings";
import mysql, { Connection, FieldPacket, RowDataPacket } from 'mysql2/promise'
import bcryptjs from 'bcryptjs'
import { IUser } from "../interfaces/IUser";
import { createTextChangeRange } from "typescript";



const SALT_RONDS: number = 10;

// used for logging in
async function retrieveUserFromDB(email: string, password: string) {
    const connection: Connection = await mysql.createConnection(connectionSettings)
    const [existingRows, _existingFields]: [RowDataPacket[], FieldPacket[]] = await connection.execute('SELECT password FROM user WHERE email=?', [email.toLowerCase()])
    if (existingRows.length < 1) {
        return;
    }

    const passwordsMatch = await bcryptjs.compare(password, existingRows[0].password)
    if (!passwordsMatch) {
        return;
    }

    const [rows,_fields]: [RowDataPacket[], FieldPacket[]] = await connection.execute('SELECT user.first_name, user.last_name, user.email FROM user WHERE user.email=?',[email.toLowerCase()])
    await connection.end()
    
    return <IUser>rows[0]

}


async function createUser(email:string,password:string,first_name: string,last_name:string){
    const connection: Connection = await mysql.createConnection(connectionSettings)
    try{
        const hashedPassword = await bcryptjs.hash(password,SALT_RONDS)
        const [_existingRows,_existingFields]: [RowDataPacket[],FieldPacket[]] = await connection.execute("INSERT INTO user (email,password,first_name,last_name) VALUES (?,?,?,?,?);",[email.toLowerCase(),hashedPassword,first_name.toLowerCase(),last_name.toLowerCase()])
    
    }
    catch(err){
        throw err
    }


}





export {createUser,retrieveUserFromDB}