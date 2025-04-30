import { config } from 'dotenv'
import * as db from "mysql2"

config("../.env")
// config()

const pool = db.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
})

export default pool