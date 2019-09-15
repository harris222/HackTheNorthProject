const express = require("express");
const router = express.Router();
const middleware = require("../middleware");
const User = require("../models/user");
const Event = require("../models/event");

// Index - show all events
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
        location: location,
        owner: owner
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
    var found;
    Event.findById(req.params.id).populate("participants").exec((err, foundEvent) => {
        if(err) {
            console.log(err);
            res.redirect("/events");
        } else {
            foundEvent.participants.forEach((usr) => {
                if(usr._id === req.user.id) {
                    found = true;
                }
            });
            res.render("events/show", {event:foundEvent, id: req.user.id, found: found});
        }
    });
});

router.post("/:id/add", (req, res) => {
    User.findById(req.user.id, (err, user) => {
        if(err) {
            console.log(err);
            res.redirect("/events/" + req.params.id);
        } else {
            Event.findById(req.params.id, (err,event) =>{
                if(err){
                    console.log(err);
                    res.redirect("/events");
                } else {
                    event.participants.push(user);
                    user.events.push(event);
                    user.save();
                    event.save();
                    res.redirect("/events/" + req.params.id);
                }
            });
        }
    });
});

module.exports = router;