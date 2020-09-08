const express = require('express');
const router = express.Router();

const Event = require('../models/Event');

// GET ALL Event
router.get('/', (req, res) => {
  // req.params.type ? "online" / "offline" 기준으로 일부만 전달하는 로직
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
      res.json(events);
    });
});

// GET SINGLE Event
router.get('/:event_id', (req, res) => {
  Event.findOne({ _id: req.params.event_id }, (err, event) => {
    if (err) return res.status(500).json({ error: err });
    if (!event) return res.status(404).json({ error: 'event not found' });
    res.json(event);
  });
});

// GET Event BY email
router.get('/:host_id', (req, res) => {
  Event.find({ host: req.params.host_id }, (err, event) => {
    if (err) return res.status(500).json({ error: err });
    if (event.length === 0)
      return res.status(404).json({ error: 'Event not found' });
    res.json(event);
  });
});

// CREATE Event
router.post('/', (req, res) => {
  const event = new Event(req.body);
  console.log(event);
  event.save((err, doc) => {
    if (err) {
      console.log(err);
      res.json({ success: false });
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
      const event = await Event.findOne({ _id: req.params.event_id });
      if (!output.n) return res.status(404).json({ error: 'Event not found' });
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
});

module.exports = router;
