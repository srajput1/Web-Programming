const express = require('express');
const router = express.Router();
const data = require("../data");
const about = data.about;

router.post("/",(req,res)=>{
    res.sendStatus(500)  
});


router.get("/", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
res.status(200);
res.send(JSON.stringify(about.allData().about)+"\n\n\nServer is Running");
});

module.exports = router;