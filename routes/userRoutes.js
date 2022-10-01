import {
  showAllUsers,
  register,
  login,
} from "../controllers/userController.js";
import { Router } from "express";

const router = Router();

router.get("/", showAllUsers);
router.post("/register", register);
router.post("/login", login);

export default router;
