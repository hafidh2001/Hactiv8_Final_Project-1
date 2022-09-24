import db from "../db/connection.js";

export const checkConnection = async () => {
    try{
        await db.connect();
        console.log(`Database connected`);
    }catch(error){
        console.log(`Database Not Connected because ${error}`);
    }
};