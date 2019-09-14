const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/login", (req, res) =>{
    res.render("login");
});

router.get("/", (req, res) => {
    res.redirect("login");
});

// router.post("/login", passport.authenticate("local", {
//     successRedirect: "/menu",
//     failureRedirect: "/login"
// }), (req, res) => {
//     //
// });

module.exports = router;