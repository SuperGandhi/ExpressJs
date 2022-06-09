const express = require('express');
const router = express.Router();
const {showAll} = require('../model/songs.js')
// GET /songs 
router.get('/', (req, res)=>{
    res.send('Entry to section songs')
})



// GET /songs/all
router.get('/all', (req,res)=>{
    res.json(showAll())
})

router.get('/:name', (req,res)=>{
    const {name} = req.params;    
    res.send(name)
})


module.exports = router;
