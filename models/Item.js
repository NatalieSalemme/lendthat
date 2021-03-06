const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  photo: {
    type: Buffer,
  },
  price: {
    type: Number,
  },
  available: {
    type: Boolean,
    default: true,
  },
  city: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    // required: true,
    ref: 'users',
  },
});

mongoose.model('items', itemSchema);
