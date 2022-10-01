import { getAll, storeUser, checkUser } from "../models/User.js";
import jwt from "jsonwebtoken";
import { jwt_secret } from "../config.js";

export const showAllUsers = async (req, res) => {
  getAll().then((data) => {
    res.json(data);
  });
};

export const register = async (req, res) => {
  const { email, password } = req.body;
  storeUser(email, password).then((data) => {
    res.json(data);
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  checkUser(email, password).then((data) => {
    if (data.status !== "error") {
      const payload = data?.res;
      const token = jwt.sign({ ...payload }, jwt_secret, { expiresIn: "24h" });
      res.json({ ...data, token: token });
    } else {
      res.json(data);
    }
  });
};
