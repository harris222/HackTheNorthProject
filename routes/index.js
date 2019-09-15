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
    if (req.body.sleepAtNight === "yes"){
      req.body.sleepAtNight = true;
    } else if (req.body.sleepAtNight === "no"){
      req.body.sleepAtNight = false;
    } // if

    if(req.body.winningInterest === "high"){
      req.body.winningInterest = true;
    } else if(req.body.winningInterest === "low"){
      req.body.winningInterest = false;
    }

    var newUser = new User({firstName: req.body.firstName, lastName: req.body.lastName});

    /* email: req.body.email, gender: req.body.gender, sleepAtNight: req.body.sleepAtNight, grade: req.body.grade,
    softwareSkill: req.body.softwareSkill, hardwareSkill: req.body.hardwareSkill, winningInterest: req.body.winningInterest,
    personalDescription: req.body.personalDescription, alreadyOnATeam: req.body.alreadyOnATea */

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

router.get("/confirmConnection", (req, res) => {
    res.render("login");
});



module.exports = router;
