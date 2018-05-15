const express = require('express');
const router = express.Router();
const data = require("../data");
const education = data.education;

router.post("/",(req,res)=>{
    res.sendStatus(500)
});


router.get("/", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
res.status(200);
res.send(JSON.stringify(education.allData().education)+"\n\n\nServer Running");
});

module.exports = router;