const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");

router.get("/login", (req, res) =>{
    res.render("login");
});

router.post("/login", passport.authenticate("local", {
    successRedirect: "/events",
    failureRedirect: "/login"
}), (req, res) => {
    //
});

router.get("/register", (req, res) =>{
    res.render("register")
});

router.post("/register", (req, res) => {
    var newUser = new User({username: req.body.username, 
                            firstName: req.body.firstName, 
                            lastName: req.body.lastName, 
                            grade: req.body.grade, 
                            softwareSkill: req.body.softwareSkill, 
                            hardwareSkill: req.body.hardwareSkill,
                            skills: req.body.skills});
    User.register(newUser, req.body.password, (err, user) => {
        if (err) {
            console.log(err);
            req.flash("error", err.message);
            res.redirect("/register");
        } else {
            passport.authenticate("local")(req, res, () => {
                res.redirect("/login");
            });
        }
    });
});

router.get("/", (req, res) => {
    res.render("landing");
});

module.exports = router;
