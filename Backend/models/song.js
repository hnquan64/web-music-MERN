const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
    Name: String,
    Author: String,
    Genre: String,
    Poster: String,
    Aud: String,
    Area: String,
    Time: String,
    Count: Number,
    Likesong: Number
});

module.exports = mongoose.model("Song", songSchema);
