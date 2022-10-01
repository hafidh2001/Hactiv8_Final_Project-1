import db from "../db/database.js";
import { hash, compare } from "../helpers/bcrypt.js";

export const getAll = async () => {
  try {
    const data = await db.query("SELECT * FROM users");
    const count = data?.rowCount;
    let res = data?.rows;
    res = res.filter((item) => delete item.password);
    return { status: "success", count, res };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

export const getUserById = async (user_id) => {
  try {
    const data = await db.query(
      `SELECT user_id, email FROM users WHERE user_id = $1`,
      [user_id]
    );
    if (data?.rowCount > 0) {
      const res = data?.rows[0];
      return { user_id: res.user_id, email: res.email };
    } else {
      return;
    }
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

export const storeUser = async (email, password) => {
  try {
    if (email == null || password == null)
      return { status: "error", message: "email & password are required" };

    const encrypt_password = await hash(password);
    const date_now = new Date();
    const data = await db.query(
      "INSERT INTO users (email, password, created_date, modified_date) VALUES ($1, $2, $3, $4) RETURNING *;",
      [email, encrypt_password, date_now, date_now]
    );
    const res = data?.rows[0];
    delete res.password;
    return { status: "success", res };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

export const checkUser = async (email, password) => {
  try {
    if (email == null || password == null)
      return { status: "error", message: "email & password are required" };

    const data = await db.query(
      `SELECT user_id, email, password FROM users WHERE email = $1`,
      [email]
    );
    if (data?.rowCount === 0)
      return { status: "error", message: "email does not exist" };

    const res = data?.rows[0];
    if (!(await compare(password, res.password))) {
      return { status: "error", message: "password does not match" };
    } else {
      delete res.password;
      return { status: "success", res };
    }
  } catch (error) {
    return { status: "error", message: error.message };
  }
};
