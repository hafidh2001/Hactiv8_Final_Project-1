import {storeUserReflection, showUserReflection, editUserReflection, deleteUserReflection} from "../controllers/reflectionController.js";
import {Router} from "express";

const router = Router();

router.get("/", showUserReflection);
router.post("/", storeUserReflection);
router.put("/:id", editUserReflection);
router.delete("/:id", deleteUserReflection);

export default router;