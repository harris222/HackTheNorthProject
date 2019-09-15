const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    name: String,
    description: String,
    owner: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    teamMembers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ]
});

module.exports = mongoose.model("Project", projectSchema);