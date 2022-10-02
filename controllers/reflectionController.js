import {
  showReflection,
  storeReflection,
  editReflection,
  deleteReflection,
} from "../models/Reflection.js";

export const showUserReflection = async (req, res) => {
  const { user_id } = req.user;
  showReflection(user_id).then((data) => {
    res.json(data);
  });
};

export const storeUserReflection = async (req, res) => {
  const { success, low_point, take_away } = req.body;
  const { user_id } = req.user;
  storeReflection(user_id, success, low_point, take_away).then((data) => {
    res.json(data);
  });
};

export const editUserReflection = async (req, res) => {
  const { success, low_point, take_away } = req.body;
  const { user_id } = req.user;
  const { id } = req.params;
  editReflection(user_id, id, success, low_point, take_away).then((data) => {
    res.json(data);
  });
};

export const deleteUserReflection = async (req, res) => {
  const { user_id } = req.user;
  const { id } = req.params;
  deleteReflection(user_id, id).then((data) => {
    res.json(data);
  });
};
