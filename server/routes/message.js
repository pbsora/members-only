const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const Message = require("../models/Message");
const User = require("../models/User");

router.get("/messages", async (req, res) => {
  try {
    const messages = await Message.find()
      .sort({ date: -1 })
      .populate("author")
      .exec();
    res.send(messages);
  } catch (error) {
    console.log(error);
  }
});

router.post("/new-message", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.author.toLowerCase(),
    });
    const message = new Message({
      title: req.body.title,
      message: req.body.message,
      author: user.id,
    });
    await message.save();
    res.send({ message: "Message created sucessfully" });
  } catch (error) {
    console.log(error);
  }
});

router.post("/delete-message", async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.body.id).exec();
    res.send({ message: "Deleted sucessfully" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
