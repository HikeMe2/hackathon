import 'dotenv/config'

export const connectionSettings = {
    host: process.env.HOST, 
    user: process.env.DBUSER, 
    database: process.env.DATABASE
}
