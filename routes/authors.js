const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("authors.ejs");
});

module.exports = router;