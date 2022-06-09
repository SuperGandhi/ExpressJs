const express = require('express');
const router = express.Router();

// All routes definitive GET /artists
router.get('/', (req, res)=>{
    res.send('Entry to section artists')
})




module.exports = router