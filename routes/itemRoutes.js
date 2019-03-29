const passport = require('passport');
const mongoose = require('mongoose');
const multer = require('multer');
const sharp = require('sharp');
const Item = mongoose.model('items');
const User = mongoose.model('users');

const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/items/lend/new', requireLogin, (req, res) => {
    console.log('reqUSER ***', req.user);
    const newItem = new Item({
      name: req.body.name,
      // photo: req.body.photo,
      price: req.body.price,
      available: req.body.available,
      city: req.body.city,
      owner: req.user.id,
    });
    newItem.save().then(item => res.json(item));
  });
  // app.post('/api/items/lend/new', requireLogin, (req, res) => {
  //   const itemFields = {};
  //   itemFields.name = req.body.name;
  //   itemFields.photo = req.body.photo;
  //   itemFields.price = req.body.price;
  //   itemFields.available = req.body.available;
  //   itemFields.city = req.body.city;
  //   itemFields.owner = req.user._id;
  // });
  // Item.findOneAndUpdate({ $set: itemFields }, { new: true })
  //   .then(item => res.json(item))
  //   .catch(err => res.status(404).json({ itemError: 'Unable to add item' }));
};
