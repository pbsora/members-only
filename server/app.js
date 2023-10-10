const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const expressSession = require("express-session");

const app = express();

const User = require("./models/User");

require("dotenv").config();
mongoose.connect(process.env.DB_URL).catch((err) => console.log(err));

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.post("/log-in", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.send(false);
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

app.post("/register", async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  await user.save();

  console.log(user);
});

app.listen(3000);
