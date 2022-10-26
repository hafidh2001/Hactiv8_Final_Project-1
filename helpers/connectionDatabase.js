import db from "../db/database.js";

export const checkConnection = async () => {
  try {
    await db.connect();
    console.log("🌿 Database connected");
  } catch (error) {
    console.error(`Database not connected ${error}`);
  }
};
