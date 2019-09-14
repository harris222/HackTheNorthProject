const express = require("express");
const router = express.Router();
const middleware = require("../middleware");
const User = require("../models/user");
const Event = require("../models/event");

// Index - show all buildings
router.get("/", (req, res) => {
    Event.find({}, (err, allEvents) => {
        if(err) {
            console.log(err);
        } else {
            res.render("events/index", {events: allEvents})
        }
    });
});

// CREATE - add a new event to db
router.post("/", (req, res) => {
    var name = req.body.name;
    var description = req.body.description;
    var image = req.body.image;
    var location = req.body.location;

    var owner = {
        id: req.user._id,
        username: req.user.username
    };

    var newEvent = {
        name: name,
        description: description,
        image: image,
        location: location
    };

    Event.create(newEvent, (err, newEv) => {
        if(err) {
            console.log(err);
        } else {
            res.redirect("/events")
        }
    });
});

// NEW - show form to create new event.
router.get("/new", (req, res) => {
    res.render("events/new");
});

// SHOW - shows more info about one building
router.get("/:id", (req, res) => {
    Building.findById(req.params.id).populate("participants").exec((err, foundEvent) => {
        if(err) {
            console.log(err);
            res.redirect("/events");
        } else {
            res.render("events/show", {event:foundEvent});
        }
    });
});

module.exports = router;