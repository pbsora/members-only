const mongoose = require("mongoose");

const user = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  admin: Boolean,
});

module.exports = mongoose.model("User", user);
