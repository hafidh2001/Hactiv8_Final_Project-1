import { Router } from "express";
import userRoutes from "./userRoutes.js";
import reflectionRoutes from "./reflectionRoutes.js";
import { checkCredential } from "../middlewares/checkCredentials.js";

const router = Router();

// make route
router.get("/", (req, res) => {
  res.send("Hactive8 - Final Project 1");
});

// create same-endpoint
router.use("/api/v1/users/", userRoutes);
router.use("/api/v1/reflections/", checkCredential, reflectionRoutes);

export default router;
