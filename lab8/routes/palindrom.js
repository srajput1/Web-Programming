const express = require('express');
const router = express.Router();

router.get("/static", (req, res) => {
    res.render("palindrom/static", {});
});



module.exports = router;