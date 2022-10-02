import { Router } from 'express';
import userRoutes from './userRoutes.js'
import reflectionRoutes from './reflectionRoutes.js'
import { checkCredentials } from '../middlewares/checkCredentials.js';
const router = Router();


router.get('/', (req, res) => {
    res.send("Hacktive8 - Final Project 1")
});

router.use('/api/v1/users/', userRoutes);
router.use('/api/v1/reflections/', checkCredentials, reflectionRoutes);

export default router;