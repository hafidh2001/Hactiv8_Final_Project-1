// import library
import { port } from "./config.js";
import express from "express";
import cors from "cors";
import { checkConnection } from "./helpers/connectionDatabase.js";

// Initializing variable express
const app = express();

// check connection to database
checkConnection();

// calling the cors method for access API
app.use(cors());

// calling the express.json() method for parsing
app.use(express.json());

// calling route
app.use("/", (req, res) => {
  res.send("Hactive8 - Final Project 1");
});

// declare route
app.listen(8000, () => {
  console.log(`Server running at port ${port}`);
});
