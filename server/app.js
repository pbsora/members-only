const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");

const app = express();
const router = require("./routes/user");
const message = require("./routes/message");

const User = require("./models/User");

require("./config/passport")(passport);

require("dotenv").config();
mongoose.connect(process.env.DB_URL).catch((err) => console.log(err));

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser("pug"));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(
  session({
    secret: "pug",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

//--------------------------End of middleware --------------------------------//

app.use("/", router);
app.use("/message/", message);

app.listen(3000);
