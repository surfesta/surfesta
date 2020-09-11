const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const User = require('../models/User');
const Event = require('../models/Event');

// GET ALL Event
router.get('/', (req, res) => {
  Event.find()
    .sort({ createdAt: 'desc' })
    .populate('host')
    .populate('enlisted_users')
    .populate('liked_users')
    .exec((err, events) => {
      if (err) return res.status(500).send({ error: 'db failure' });

      if (req.query.type === 'online')
        events = events.filter((event) => event.isOnline);
      else if (req.query.type === 'offline')
        events = events.filter((event) => !event.isOnline);

      const current_user_id = req.body.user_id || '';
      const likeCheckedEvents = events.map((event) => {
        return {
          ...event._doc,
          isLiked: event._doc.liked_users.some(
            (user) => user._id == current_user_id
          ),
          like_count: new Set(event.liked_users).size,
          cur_count: new Set(event.enlisted_users).size,
        };
      });
      res.json(likeCheckedEvents);
    });
});

router.get('/search', (req, res) => {
  Event.find({ title: { $regex: req.query.q } })
    .sort({ createdAt: 'desc' })
    .populate('host')
    .populate('enlisted_users')
    .populate('liked_users')
    .exec((error, events) => {
      if (error) {
        res.json({ error });
        return;
      }
      res.json(events);
    });
});
// GET SINGLE Event
router.get('/:event_id', (req, res) => {
  console.log('?');
  Event.findOne({ _id: req.params.event_id })
    .sort({ createdAt: 'desc' })
    .populate('host')
    .populate('enlisted_users')
    .populate('liked_users')
    .exec((err, event) => {
      if (err) return res.status(500).json({ error: err });
      if (!event || event.length === 0)
        return res.status(404).json({ error: 'event not found' });

      event.like_count = new Set(event.liked_users).size;
      event.cur_count = new Set(event.enlisted_users).size;
      res.json(event);
    });
});

// GET Event BY email
router.get('/host/:host_id', (req, res) => {
  Event.find({ host: req.params.host_id }, (err, event) => {
    if (err) return res.status(500).json({ error: err });
    if (!event || event.length === 0)
      return res.status(404).json({ error: 'Event not found by the host_id' });
    event.like_count = new Set(event.liked_users).size;
    event.cur_count = new Set(event.enlisted_users).size;
    res.json(event);
  });
});

// CREATE Event
router.post('/', (req, res) => {
  const event = new Event(req.body);
  event.save((err, doc) => {
    if (err) {
      res.json({
        success: false,
        err,
        msg: err.code === 11000 && 'duplicated key',
      });
      return;
    }
    res.json({ success: true, doc });
  });
});

// UPDATE THE Event
router.patch('/:event_id', (req, res) => {
  Event.update(
    { _id: req.params.event_id },
    { $set: req.body },
    async (err, output) => {
      if (err) res.status(500).json({ error: 'db failure' });
      if (!output.n) return res.status(404).json({ error: 'Event not found' });
      const event = await Event.findOne({ _id: req.params.event_id })
        .populate('host')
        .populate('enlisted_users')
        .populate('liked_users');

      res.json({
        success: true,
        event,
      });
    }
  );
});
// UPDATE a event's enlisted_users
router.patch('/:event_id/enlisted', async (req, res) => {
  const type = req.query.type !== 'false' ? true : false;
  Event.update(
    { _id: req.params.event_id },
    type
      ? { $addToSet: { enlisted_users: req.body.user_id } }
      : { $pull: { enlisted_users: req.body.user_id } },
    async (err, output) => {
      if (err) {
        res.status(500).json({ error: 'db failure' });
        return;
      }
      const event = await Event.findOne({ _id: req.params.event_id })
        .populate('host')
        .populate('enlisted_users')
        .populate('liked_users');
      if (!output.n) return res.status(404).json({ error: 'Event not found' });
      event.cur_count = new Set(event.enlisted_users).size;
      event.save();
      res.json({
        event,
      });
    }
  );
});
// UPDATE a event's liked_users
router.patch('/:event_id/liked', async (req, res) => {
  const type = req.query.type !== 'false' ? true : false;

  Event.update(
    { _id: req.params.event_id },
    type
      ? { $addToSet: { liked_users: req.body.user_id } }
      : { $pull: { liked_users: req.body.user_id } },
    async (err, output) => {
      if (err) {
        res.status(500).json({ error: 'db failure' });
        return;
      }
      const event = await Event.findOne({ _id: req.params.event_id });
      if (!output.n) return res.status(404).json({ error: 'Event not found' });
      event.like_count = new Set(event.liked_users).size;
      event.save();
      res.json({
        success: true,
        event,
      });
    }
  );
});

// DELETE Event
router.delete('/:event_id', (req, res) => {
  Event.remove({ _id: req.params.event_id }, (err) => {
    if (err) return res.status(500).json({ error: 'db failure' });
    res.status(204).end();
  });

  User.update(
    {},
    {
      $pull: {
        enlisted_events: { $in: [req.params.event_id] },
        liked_events: { $in: [req.params.event_id] },
        hosting_events: { $in: [req.params.event_id] },
      },
    },
    (err, output) => {
      if (err) {
        res.status(500).json({ error: 'db failure' });
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
