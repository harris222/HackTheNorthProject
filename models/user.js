const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    grade: Number, //11: grade 11, 12: grade 12, 1: uni 1st year, 2: uni 2nd year, 3: uni 3rd year, 4: uni 4th year, 0: not in school
    softwareSkill: Number,
    hardwareSkill: Number,
    description: String,
    events: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Event"
        }
    ],
    skills: []
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
