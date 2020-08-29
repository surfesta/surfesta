const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const moment = require('moment');

const saltRounds = 10;
const TOKEN_EXP_HOUR = 20;

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: { type: String, required: true },
    username: String,
    profile_img: Buffer,
    cover_img: Buffer,
    phone_number: Number,
    enlisted_events: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
    ],
    hosting_events: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
    ],
    liked_events: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
    ],
    role: { type: Number, default: 0 },
    token: {
      type: String,
    },
    tokenExp: {
      type: Number,
    },
  },
  {
    timestamps: true,
    collection: 'users',
    versionKey: false,
  }
);

userSchema.pre('save', function (next) {
  const user = this;
  if (user.isModified('password')) {
    console.log('password changed');
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function (plainPassword, cb) {
  console.log(plainPassword, this.password);
  bcrypt.compare(plainPassword, this.password, function (
    err,
    isMatch
  ) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.methods.generateToken = function (cb) {
  const user = this;

  const token = jwt.sign(user._id.toHexString(), 'surfesta');
  const tokenExp = moment().add(TOKEN_EXP_HOUR, 'hour').valueOf();

  user.tokenExp = tokenExp;
  user.token = token;
  user.save((err, user) => {
    if (err) return cb(err);
    cb(null, user);
  });
};

userSchema.statics.findByToken = function (token, cb) {
  const user = this;

  jwt.verify(token, 'surfesta', (err, decode) => {
    user.findOne({ _id: decode, token }, (err, user) => {
      if (err) return cd(err);
      cb(null, user);
    });
  });
};

module.exports = mongoose.model('User', userSchema);
