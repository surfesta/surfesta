const express = require('express');

const events = require('./events');
const users = require('./users');
const uploads = require('./uploads');

const router = express.Router();

router.use('/events', events);
router.use('/users', users);
router.use('/uploads', uploads);

module.exports = router;
