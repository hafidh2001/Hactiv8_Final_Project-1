import { showAllUser, register } from '../controllers/userController.js';
import { Router } from 'express';

const router = Router();

router.get('/', showAllUser);
router.post('/', register);

export default router;




