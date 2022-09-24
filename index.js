// import library
import { port } from "./config.js";
import express from "express";
import cors from "cors";

import routes from "./routes/index.js";

// Initializing variable express
const app = express();

// calling the cors method for access API
app.use(cors());

// calling the express.json() method for parsing
app.use(express.json());

app.use(routes);

// calling route
app.use("/", (req, res) => {
  res.send("Haloo deck, haloooo, cokkk telll");
});

 


// declare route
app.listen(8000, () => {
  console.log(`Server running at port 8000`);
  console.log(port);
});
