import { Router } from 'express';
import userRoutes from './userRoutes.js'
const router = Router();


router.get('/', (req, res) => {
    res.send("hello gais ini halaman home")
});

router.use('/user', userRoutes);

export default router;