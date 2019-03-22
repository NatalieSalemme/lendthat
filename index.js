const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json());

//cookie contains all the data related to the session
app.use(
  cookieSession({
    //cookie expires in 30 days
    maxAge: 30 * 24 * 60 * 60 * 1000,
    //used to sign or encrypt cookie
    keys: [keys.cookieKey],
  })
);
//tells passport that it should make use of cookies for authentication
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server starting on ${PORT}`);
});
