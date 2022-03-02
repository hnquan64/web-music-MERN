const mongoose = require("mongoose");

const singerSchema = new mongoose.Schema({
    Name: String,
    Age: Number,
    Ava: String,
    Cover: String,
    Country: String,
    Likesinger: Number,
    Songs: [{type:mongoose.Schema.Types.ObjectId}]
});

module.exports = mongoose.model("Singer", singerSchema);

