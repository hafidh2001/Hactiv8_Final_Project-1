import express from 'express';
import userRoutes from './userRoutes.js'
const router = express.Router();


router.get('/', (req, res) => {
    console.log(`uhuyy`);
    res.send("hello gais ini halaman home")
});
router.use('/user', userRoutes);

export default router;