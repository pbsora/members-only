const mongoose = require("mongoose");

const Message = new mongoose.Schema({
  title: String,
  message: String,
  date: { type: Date, default: Date.now },
  author: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Message", Message);
