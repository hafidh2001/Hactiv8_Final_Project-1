import db from "../db/connection.js";
import crypto from 'crypto';

const getAllUser = async () => {
    try{
        const data  = await db.query("SELECT * FROM users");
        const res = data?.rows;
        return {status: "success", res};
    }catch(error){
        return {status: "error", message: error.message};
    }
};

const storeUser = async (email, password) => {
    try{
        const date = new Date();
        const hash = crypto.createHash('sha256', password).digest('hex');
        const data = await db.query(
            "INSERT INTO users (email, password, created_date, modified_date) VALUES ($1, $2, $3, $4) RETURNING *;",
            [email, hash, date, date]
        );
        const res = data?.rows;
        return {status: "success", res};
    }catch(error){
        return {status: "error", message: error.message};
    }
};
export {getAllUser, storeUser};