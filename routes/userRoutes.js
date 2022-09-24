import express from 'express';

var router = express.Router();

router.post('/register', (req,res) => {
    console.log('register');
});

router.post('/login', (req,res) => {
    console.log('login');
});

export default router;
