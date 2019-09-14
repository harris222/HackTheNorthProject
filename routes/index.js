var express = require("express");
var router = express.Router();

router.get("/login", (req, res) =>{
    res.render("login");
});

router.get("/", (req, res) => {
    res.redirect("login");
});

module.exports = router;