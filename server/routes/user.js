const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const passport = require("passport");

const mongoose = require("mongoose");
const User = require("../models/User");

router.get("/user", (req, res, next) => {
  res.send(req.user);
});

router.get("/log-out", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
  });
});

router.post("/log-in", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    if (!user) {
      return res.send("User doesn't exist");
    }
    req.logIn(user, (err) => {
      if (err) {
        console.log(err);
        return next(err);
      }
      res.send("Successfully Authenticated");
    });
  })(req, res, next);
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
        return res.send({ confirmation: "User Created" });
      } catch (error) {
        console.log(error);
      }
    }
  }
);

module.exports = router;
