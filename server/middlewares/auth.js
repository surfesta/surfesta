const User = require('../models/User');

const auth = (req, res, next) => {
  const token = req.cookies.surf_auth;
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user)
      return res.json({
        isAuth: false,
        error: true,
      });
    req.token = token;
    req.user = user
      .populate('enlisted_events')
      .populate('hosting_events')
      .populate('liked_events');
    next();
  });
};

module.exports = auth;
