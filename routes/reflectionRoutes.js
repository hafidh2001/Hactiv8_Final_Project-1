import express from 'express';

var router = express.Router();


router.get('/reflections', (req,res) => {
    console.log('reflections get');
});

router.put('/reflections/:id', (req,res) => {
    console.log('reflection put');
});

router.delete('/reflections/:id', (req,res) => {
    console.log('reflection delete');
});

export default router;