const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    gender: Boolean, //true: male; false: female
    sleepAtNight: Boolean,
    grade: Number, //11: grade 11, 12: grade 12, 1: uni 1st year, 2: uni 2nd year, 3: uni 3rd year, 4: uni 4th year, 0: not in school
    softwareSkill: Number,
    hardwareSkill: Number,
    winningInterest: Boolean,
    personalDescription: String,
    
    events: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Event"
        }
    ]
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);