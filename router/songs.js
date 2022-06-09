const express = require('express');
const router = express.Router();

// All routes definitive GET /songs 
router.get('/', (req, res)=>{
    res.send('Entry to section songs')
})




module.exports = router
