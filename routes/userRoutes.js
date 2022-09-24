import express from 'express';
import { 
    getAll,
    register,
    login,
} from '../controllers/userController.js';
// import reflectionController from '../controllers/ReflectionController';

const router = express.Router();

router.post('/register', register);

router.post('/login', login);



export default router;
