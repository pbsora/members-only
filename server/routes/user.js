const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const mongoose = require("mongoose");
const User = require("../models/User");

router.post("/log-in", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.send({ message: "User not found" });
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

router.post(
  "/register",
  body("firstName", "Name must be specified")
    .trim()
    .toLowerCase()
    .escape()
    .isLength({ min: 2 }),
  body("lastName", "Last name must be specified")
    .trim()
    .toLowerCase()
    .escape()
    .isLength({ min: 2 }),
  body("username", "Username must be specified")
    .trim()
    .toLowerCase()
    .escape()
    .isLength({ min: 3 }),
  body("password", "Passwords must match").custom((value, { req }) => {
    return value === req.body.confirmPassword;
  }),

  async (req, res) => {
    const errors = validationResult(req);
    const userExist = await User.findOne({ username: req.body.username });
    if (userExist) return res.json({ message: "User already exists" });
    if (!errors.isEmpty()) {
      res.send(errors);
    } else {
      try {
        const pass = await bcrypt.hash(req.body.password, 10);
        const user = new User({
          username: req.body.username,
          password: pass,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          admin: false,
        });
        await user.save();
      } catch (error) {
        console.log(error);
      }
    }
  }
);

module.exports = router;
