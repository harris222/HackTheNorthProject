const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    location: String,
    owner: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ]
});

module.exports = mongoose.model("Event", eventSchema);