import { database } from "../config.js";
import pg from 'pg';

const { Pool } = pg;
const db = new Pool({
    user: database.user,
    host: database.host,
    database: database.database,
    password: database.password,
    port: database.port,
});

export default db; 