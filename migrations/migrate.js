import db from "../db/database.js";
import dataTable from "./dataTable.js";

dataTable.map(async (data, index) => {
  await db.query(data).then((res) => {
    console.log(res);
    index === dataTable.length - 1 && db.end();
  });
});
