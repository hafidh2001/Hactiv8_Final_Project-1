import express from 'express';
import UserController from '../controllers/UserController';
import ReflectionController from '../controllers/ReflectionController';

var router = express.Router();

router.post('/register', );

router.post('/login', (req,res) => {
    console.log('login');
});

export default router;
