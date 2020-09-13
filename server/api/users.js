const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = require('../models/User');
const Event = require('../models/Event');
const auth = require('../middlewares/auth');

router.get('/', async (req, res, next) => {
  try {
    const users = await User.find()
      .populate('enlisted_events')
      .populate('hosting_events')
      .populate('liked_events');
    res.send(users);
  } catch (error) {
    next(error);
  }
});

// GET SINGLE User
router.get('/:user_id', async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.params.user_id })
      .populate('enlisted_events')
      .populate('hosting_events')
      .populate('liked_events');
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error });
    next(error);
  }
});

// CREATE User
router.post('/', async (req, res, next) => {
  try {
    const user = new User(req.body);
    if (!user.profile_img) user.profile_img = user.gravatarImage;
    const newUser = await user.save();
    res.json({ success: true, newUser });
  } catch (error) {
    res.json({
      success: false,
      error,
      msg:
        error.code === 11000 ? 'duplicated user property' : 'unhandled error',
    });
    next(error);
  }
});

// UPDATE THE User
router.patch('/:user_id', async (req, res, next) => {
  User.update(
    { _id: req.params.user_id },
    { $set: req.body },
    async (err, output) => {
      if (err) res.status(500).json({ error: 'db failure' });
      const user = await User.findOne({ _id: req.params.user_id })
        .populate('enlisted_events')
        .populate('hosting_events')
        .populate('liked_events');
      if (!output.n) return res.status(404).json({ error: 'User not found' });
      res.json({
        success: true,
        user,
      });
    }
  );
});
// UPDATE THE User
router.patch('/', auth, async (req, res, next) => {
  User.update(
    { _id: req.user._id },
    { $set: req.body },
    async (err, output) => {
      if (err) res.status(500).json({ error: 'db failure' });
      const user = await User.findOne({ _id: req.user._id })
        .populate('enlisted_events')
        .populate('hosting_events')
        .populate('liked_events');
      if (!output.n) return res.status(404).json({ error: 'User not found' });
      res.json({
        success: true,
        user,
      });
    }
  );
});

// UPDATE a user's enlisted_events
router.patch('/:user_id/enlisted', async (req, res) => {
  const type = req.query.type !== 'false' ? true : false;
  const event_id = req.body.event_id;
  const target = await Event.findOne({ _id: event_id });
  if (!target) {
    const user = await User.findOne({ _id: req.params.user_id })
      .populate('enlisted_events')
      .populate('hosting_events')
      .populate('liked_events');
    if (!user) {
      res.json({
        error: 'No user',
      });
      return;
    }
    res.json({
      success: true,
      user,
    });
    return;
  }
  User.update(
    { _id: req.params.user_id },
    type
      ? { $addToSet: { enlisted_events: event_id } }
      : { $pull: { enlisted_events: event_id } },
    async (err, output) => {
      if (err) {
        res.status(500).json({ error: 'db failure' });
        return;
      }
      if (!output.n) return res.status(404).json({ error: 'User not found' });

      const user = await User.findOne({ _id: req.params.user_id })
        .populate('enlisted_events')
        .populate('hosting_events')
        .populate('liked_events');

      res.json({
        success: true,
        user,
      });
    }
  );
});
// UPDATE a user's liked_events
router.patch('/:user_id/liked', async (req, res) => {
  const type = req.query.type !== 'false' ? true : false;
  const event_id = req.body.event_id;
  const target = await Event.findOne({ _id: event_id });
  if (!target) {
    const user = await User.findOne({ _id: req.params.user_id })
      .populate('enlisted_events')
      .populate('hosting_events')
      .populate('liked_events');
    if (!user) {
      res.json({
        error: 'No user',
      });
      return;
    }
    res.json({
      success: true,
      user,
    });
    return;
  }
  User.update(
    { _id: req.params.user_id },
    type
      ? { $addToSet: { liked_events: event_id } }
      : { $pull: { liked_events: event_id } },
    async (err, output) => {
      if (err) {
        res.status(500).json({ error: 'db failure' });
        return;
      }
      if (!output.n) return res.status(404).json({ error: 'User not found' });
      const user = await User.findOne({ _id: req.params.user_id })
        .populate('enlisted_events')
        .populate('hosting_events')
        .populate('liked_events');
      res.json({
        success: true,
        user,
      });
    }
  );
});
// UPDATE a user's hosting_events
router.patch('/:user_id/hosting', async (req, res) => {
  const type = req.query.type !== 'false' ? true : false;
  const event_id = req.body.event_id;
  const target = await Event.findOne({ _id: event_id });
  if (!target) {
    const user = await User.findOne({ _id: req.params.user_id })
      .populate('enlisted_events')
      .populate('hosting_events')
      .populate('liked_events');
    res.json({
      success: true,
      user,
    });
    return;
  }
  User.update(
    { _id: req.params.user_id },
    type
      ? { $addToSet: { hosting_events: event_id } }
      : { $pull: { hosting_events: event_id } },
    async (err, output) => {
      if (err) {
        res.status(500).json({ error: 'db failure' });
        return;
      }
      if (!output.n) return res.status(404).json({ error: 'User not found' });
      const user = await User.findOne({ _id: req.params.user_id })
        .populate('enlisted_events')
        .populate('hosting_events')
        .populate('liked_events');
      res.json({
        success: true,
        user,
      });
    }
  );
});

// Authentificate User
router.post('/auth', auth, (req, res) => {
  res.status(200).json({
    user: req.user._doc,
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
  });
});

// Authorize User step1
router.post('/emails', async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user)
      return res.json({
        emailCheck: false,
        message: 'Auth failed, email not found',
      });
    res.json({
      emailCheck: true,
      message: 'email found',
      username: user.username,
    });
  } catch (error) {
    next(error);
  }
});

// Authorize User step2 or done at once by this
router.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email })
      .populate('enlisted_events')
      .populate('hosting_events')
      .populate('liked_events');

    if (!user)
      return res.json({
        loginResult: false,
        message: 'Auth failed, no user not found',
      });

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          loginResult: false,
          message: 'Wrong password',
        });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);

        res.cookie('surf_auth', user.token, {
          maxAge: user.tokenMaxAge,
          httpOnly: true,
          sameSite: process.env.NODE_ENV === 'production' ? 'lax' : undefined,
          domain:
            process.env.NODE_ENV === 'production' ? 'surfesta.site' : undefined,
          secure: process.env.NODE_ENV === 'production' ? true : undefined,
        });
        res.status(200).json({
          loginResult: true,
          user,
        });
      });
    });
  } catch (error) {
    next(error);
  }
});

router.post('/logout', auth, (req, res) => {
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

// DELETE authenticated User
router.delete('/', auth, (req, res) => {
  User.remove({ _id: req.user._id }, (err) => {
    if (err) return res.status(500).json({ error: 'db failure' });
    res.status(204).end();
  });

  Event.deleteMany({ host: req.user._id }, (err) => {
    if (err)
      return res
        .status(500)
        .json({ error: 'db failure as removing hosting event' });
  });

  Event.updateMany(
    {},
    {
      $pull: {
        enlisted_users: { $in: [req.user._id] },
        liked_users: { $in: [req.user._id] },
      },
    },
    (err, output) => {
      if (err) {
        res.status(500).json({ error: 'db failure as removing related event' });
        return;
      }
      res.status(200).json({
        success: true,
        output,
      });
    }
  );
});
// DELETE User by user_id
router.delete('/:user_id', (req, res) => {
  User.remove({ _id: req.params.user_id }, (err) => {
    if (err)
      return res
        .status(500)
        .json({ error: 'db failure as removing related user' });
  });

  Event.deleteMany({ host: req.params.user_id }, (err) => {
    if (err)
      return res
        .status(500)
        .json({ error: 'db failure as removing hosting event' });
  });

  Event.updateMany(
    {},
    {
      $pull: {
        enlisted_users: { $in: [req.params.user_id] },
        liked_users: { $in: [req.params.user_id] },
      },
    },
    (err, output) => {
      if (err) {
        res.status(500).json({ error: 'db failure as removing related event' });
        return;
      }
      res.json({
        success: true,
        output,
      });
    }
  );
});

module.exports = router;
