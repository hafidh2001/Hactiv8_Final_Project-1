import { findAllUser } from "../models/user.js"

const getAll = async(req, res) => {
    try{
        const users = await findAllUser;
    } catch (error) {
        res.json({message: error.message});
    }
};

const register = async(req, res) => {
    try{
        
    } catch (error) {
        res.json({message: error.message});
    }
};

const login = async(req, res) => {
    try{
        
    } catch (error) {
        res.json({message: error.message});
    }
};

export { getAll, register, login };