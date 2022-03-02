const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  token: {type:String},
  ava: {type:String},
  playlist:[],
  like: Number,
  follow:[{type:mongoose.Schema.Types.ObjectId}],
  history: [],
  displayName: { type: String },
});

module.exports = User = mongoose.model("user", userSchema);