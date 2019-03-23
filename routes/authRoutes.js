const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin');

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
    res.send(req.user);
  });

  app.get('/api/profile', requireLogin, (req, res) => {
    res.send('testing get');
  });
  app.post('/api/profile', requireLogin, (req, res) => {
    res.send('testing post');
  });
};
