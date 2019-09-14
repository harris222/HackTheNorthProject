const express = require("express");
const router = express.Router();

router.get("/events", (req, res) => {
    res.render("./events/index");
});

module.exports = router;