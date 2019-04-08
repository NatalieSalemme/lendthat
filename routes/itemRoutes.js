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
    '/api/items/lend/photo',
    requireLogin,
    upload.single('photo'),
    async (req, res) => {
      const buffer = await sharp(req.file.buffer)
        .resize({ width: 250, height: 250 })
        .png()
        .toBuffer();
      req.item.photo = buffer;
      await req.user.save();
      res.send();
    },
    (error, req, res, next) => {
      res.status(400).send({ error: error.message });
    }
  );
  app.get('/api/items/browse', requireLogin, (req, res) => {
    const errors = {};
    Item.find({})
      .then(items => {
        if (!items) {
          errors.noitems = 'There are no items to display';
          return res.status(404).json();
        }
        res.json(items);
      })
      .catch(err => res.status(404).json({ item: 'There are no items' }));
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
