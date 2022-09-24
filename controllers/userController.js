import user from "../models/user.js"

const getAll = async(req, res) => {
    try{
        
    } catch (error) {
        res.json({message: error.message});
    }
};

export default { getAll };