const User = require("../models/User");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    new localStrategy(async (username, password, done) => {
      try {
        const user = await User.findOne({ username });
        if (!user) return done(null, false, { message: "Incorrect Username" });

        const result = await bcrypt.compare(password, user.password);
        if (result) return done(null, user);
        else return done(null, false, { message: "Incorrect password" });
      } catch (error) {
        console.log(error);
        return done(error);
      }
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });

  passport.deserializeUser(async (id, cb) => {
    try {
      const user = await User.findById(id);
      cb(null, user);
    } catch (error) {
      cb(err);
    }
  });
};
