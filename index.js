const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./models/Item');
require('./services/passport');

mongoose.connect(
  keys.mongoURI,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

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
require('./routes/itemRoutes')(app);
if (process.env.NODE_ENV === 'production') {
  //express will serve up production assets
  //like our main.js file, or main.css file
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server starting on ${PORT}`);
});
