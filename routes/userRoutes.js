import express from 'express';

import {
    registerUser
} from '../controllers/userController.js'

const router = express.Router();

router.get('/', registerUser)

export default router;




