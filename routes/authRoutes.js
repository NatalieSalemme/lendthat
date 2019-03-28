const passport = require('passport');
const mongoose = require('mongoose');
const multer = require('multer');
const sharp = require('sharp');
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
      if (user) {
        User.findOneAndUpdate(
          { _id: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then(user => res.json(user));
      }
    });
  });

  const upload = multer({
    limits: {
      fileSize: 1000000,
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        return cb(new Error('Please upload an image'));
      }
      cb(undefined, true);
    },
  });

  app.post(
    '/api/users/current/avatar',
    passport.authenticate('jwt', { session: false }),
    upload.single('avatar'),
    async (req, res) => {
      const buffer = await sharp(req.file.buffer)
        .resize({ width: 250, height: 250 })
        .png()
        .toBuffer();
      req.user.avatar = buffer;
      await req.user.save();
      res.send();
    },
    (error, req, res, next) => {
      res.status(400).send({ error: error.message });
    }
  );

  app.get('/api/users/:id/avatar', async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user || !user.avatar) {
        throw new Error();
      }
      res.set('Content-Type', 'image/png');
      console.log(user.avatar);
      res.send(user.avatar);
    } catch (e) {
      res.status(404).send();
    }
  });
};
