const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const Message = require("../models/Message");

router.get("/messages", async (req, res) => {
  try {
    const messages = await Message.find()
      .sort({ date: 1 })
      .populate("author")
      .exec();
    res.send(messages);
  } catch (error) {
    console.log(error);
  }
});

router.post("/new-message", async (req, res) => {
  try {
    const message = new Message({
      title: req.body.title,
      message: req.body.message,
      author: "6527f54dc21ea7a8231d643a",
    });
    await message.save();
    res.send({ message: "Message created sucessfully" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
