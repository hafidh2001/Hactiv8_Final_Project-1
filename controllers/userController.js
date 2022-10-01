import { getAllUser, storeUser } from "../models/User.js";


const showAllUser = async (req, res) => {
    getAllUser().then((data) => {
        res.json(data);
    });
};

const register = async (req, res) => {
    const { email, password } = req.body;
    storeUser(email, password).then((data) => {
        res.json(data);
    });
};

export {showAllUser, register};