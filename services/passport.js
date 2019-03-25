const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  //done(error object, identifying piece of info)
  done(null, user.id);
});
//turn an id into a mongoose model instance, when we found a particular user, call done()
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        //we already have a record with the given profile id
        //done(error, user record)
        return done(null, existingUser);
      }
      //we dont have a user with this id
      // console.log(profile);
      const user = await new User({
        googleId: profile.id,
        displayName: profile.displayName,
      }).save();
      done(null, user);
    }
  )
);
