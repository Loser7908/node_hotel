const express=require('express');
const router=express.Router();
const Menu = require('../models/menu')

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newMenu = new Menu(data);
        const saveMenu = await newMenu.save();
        res.send(saveMenu);
        res.status(200).json(saveMenu);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'An error occurred while saving the person data.' });
    }

})

router.get('/', async (req, res) => {
    try {
        const data = await Menu.find();
        res.send(data);
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'An error occurred while saving the person data.' }); n
    }

})

module.exports=router;