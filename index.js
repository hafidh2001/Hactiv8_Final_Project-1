// import library
import { port } from "./config.js";
import express from "express";
import cors from "cors";
import routes from "./routes/index.js"
import { checkConnection } from "./helpers/checkConnection.js";

// Initializing variable express
const app = express();

// To check connection db
await checkConnection();

// calling the cors method for access API
app.use(cors());

// calling the express.json() method for parsing
app.use(express.json());

// Calling Routes
app.use(routes);

// declare route
app.listen(port, () => {
  console.log(`PORT listen to ${port}`);
});
