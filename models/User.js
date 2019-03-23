const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  city: {
    type: String,
    required: true,
  },
  displayname: {
    type: String,
    required: true,
  },
});
//Not using export due to possible issues during testing, require it into other files instead
mongoose.model('users', userSchema);
