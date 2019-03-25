const passport = require('passport');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const User = mongoose.model('users');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/dashboard');
    }
  );

  app.get('/api/logout', (req, res) => {
    //takes cookie that contains our users id and removes id that is in there. logout is provided by request
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    // console.log(req.user);
    res.send(req.user);
  });

  // app.get('/api/profile', requireLogin, (req, res) => {
  //   res.send('testing get');
  // });
  app.post('/api/profile', requireLogin, (req, res) => {
    console.log(req.user);
    const profileFields = {};
    profileFields._id = req.user._id;
    profileFields.googleId = req.user.googleId;
    profileFields.displayName = req.body.displayName;
    profileFields.city = req.body.city;
    User.findById(req.user.id).then(user => {
      // console.log('profileFields***', profileFields);
      if (user) {
        User.findOneAndUpdate(
          { _id: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then(user => res.json(user));
      }
    });
    // User.findByIdAndUpdate(
    //   req.user.id,
    //   {
    //     displayName: req.body.displayName,
    //     city: req.body.city,
    //   },
    //   { new: true }
    // ).then(user => {
    //   user.save();
    //   console.log(user);
    //   res.send(user);
    // });
    // User.findOne({ googleId: req.user.googleId }).then(user => {
    //   // const profileData = {};
    //   // profileData._id = req.user.id;
    //
    //   res.send(req.user);
    // });
  });
};
