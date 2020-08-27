const express = require('express');
const router = express.Router();

const User = require('../models/User');
const auth = require('../middlewares/auth');

router.get('/', (req, res) => {
  User.find()
    .populate('enlisted_events')
    .populate('hosting_events')
    .populate('liked_events')
    .exec((err, users) => {
      if (err) {
        console.log(err);
        return;
      }
      res.json(users);
    });
});

// GET SINGLE User
router.get('/:user_id', (req, res) => {
  User.findOne({ _id: req.params.user_id })
    .populate('enlisted_events')
    .populate('hosting_events')
    .populate('liked_events')
    .exec((err, user) => {
      if (err) return res.status(500).json({ error: err });
      if (!user)
        return res.status(404).json({ error: 'User not found' });
      res.json(user);
    });
});

// CREATE User
router.post('/', (req, res) => {
  const user = new User(req.body);
  user.save((err, doc) => {
    if (err) {
      res.json({ success: false });
      return;
    }
    res.json({ success: true, doc });
  });
});

// UPDATE THE User
router.patch('/:user_id', (req, res) => {
  User.update(
    { _id: req.params.user_id },
    { $set: req.body },
    (err, output) => {
      if (err) res.status(500).json({ error: 'db failure' });
      console.log(output);
      if (!output.n)
        return res.status(404).json({ error: 'User not found' });
      res.json({ success: true });
    }
  );
});

// Authentificate User
router.post('/auth', auth, (req, res) => {
  res.status(200).json({
    ...req.user._doc,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
  });
});

// Authorize User step1
router.post('/login', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.json({
        loginSuccess: false,
        message: 'Auth failed, email not found',
      });
    res.json({
      loginSuccess: true,
      message: 'email found',
    });
  });
});

// Authorize User step2 or done at once by this
router.post('/login/password', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.json({
        loginSuccess: false,
        message: 'Auth failed, no user not found',
      });

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          loginSuccess: false,
          message: 'Wrong password',
        });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie('w_authExp', user.tokenExp);
        res.cookie('w_auth', user.token).status(200).json({
          loginSuccess: true,
          user,
        });
      });
    });
  });
});

router.get('/logout', (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    { token: '', tokenExp: '' },
    (err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({
        success: true,
      });
    }
  );
});
// DELETE User
router.delete('/:user_id', (req, res) => {
  User.remove({ _id: req.params.user_id }, (err) => {
    if (err) return res.status(500).json({ error: 'db failure' });
    res.status(204).end();
  });
});

module.exports = router;
