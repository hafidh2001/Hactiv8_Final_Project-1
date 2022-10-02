import {
  storeUserReflection,
  showUserReflection,
  editUserReflection,
  deleteUserReflection,
} from "../controllers/reflectionController.js";
import { Router } from "express";

const router = Router();

router.post("/", storeUserReflection);
router.get("/", showUserReflection);
router.put("/:id", editUserReflection);
router.delete("/:id", deleteUserReflection);

export default router;
