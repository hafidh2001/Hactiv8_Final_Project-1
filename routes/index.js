import userRoutes from "./userRoutes.js";
import reflectionRoutes from "./reflectionRoutes.js";
import express from 'express';

var router = express.Router();

router.use('/api/v1/users', userRoutes);
router.use('/api/v1/users', reflectionRoutes);



export default router;