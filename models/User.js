import db from "../db/connection.js";
import {hash, compare} from "../helpers/bcrypt.js";

const getAllUser = async () => {
    try{
        const data  = await db.query("SELECT * FROM users");
        const res = data?.rows;
        return {status: "success", res};
    }catch(error){
        return {status: "error", message: error.message};
    }
};

const getUserById = async (user_id) =>{
    try{
        const data = await db.query(
            `SELECT user_id, email FROM users WHERE user_id = $1`,
            [user_id]
        );
    
        if (data?.rowCount > 0){
            const res = data.rows[0];
            return {user_id: res.user_id, email: res.email};
        }else{
            return;
        }
    }catch (error) {
        return { status: "error", message: error.message };
    }
};
const storeUser = async (email, password) => {
    try{

        if(email == null || password == null) return {status: "error", message: "email & password are required"};

        const encrypted = await hash(password);
        const date = new Date();
        const data = await db.query(
            "INSERT INTO users (email, password, created_date, modified_date) VALUES ($1, $2, $3, $4) RETURNING *;",
            [email, encrypted, date, date]
        );
        const res = data?.rows[0];
        delete res.password;
        return {status: "success", res};
    }catch(error){
        return {status: "error", message: error.message};
    }
};

const checkUser = async (email, password) => {
    try{
        if (email == null || password == null) return {status: "error", message: "email & password are required"};
    
        const data = await db.query(
            `SELECT user_id, email, password FROM users WHERE email = $1`, 
            [email]
        );
        
        if(data?.rowCount === 0) 
            return { status: "error", message: "email does not exist" };
    
        const res = data?.rows[0];
        if(!(await compare(password, res.password))){
            return { status: "error", message: "password does not match" };
        }else {
            delete res.password;
            return { status: "success", res };
        }
    }catch (error) {
        return { status: "error", message: error.message };
    }
};
export {getAllUser, storeUser, checkUser, getUserById};