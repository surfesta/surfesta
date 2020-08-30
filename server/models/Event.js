const mongoose = require('mongoose');

const eventSchema = mongoose.Schema(
  {
    isOpen: Boolean,
    title: String,
    host: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    event_date: {
      type: Date,
      default: Date.now,
    },
    thumbnail: { type: Buffer, unique: true },
    content: String,
    isOnline: Boolean,
    online_platform: String,
    location: {
      name: String,
      details: String,
      info: String,
    },
    price: Number, // 입장료
    max_count: Number, // 참석 가능 인원수
    cur_count: Number, // 참석 인원

    enlisted_users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        unique: true,
      },
    ], // 해당 이벤트 참여신청을 한 유저들의 배열
    liked_users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        unique: true,
      },
    ], // 해당 이벤트를 좋아요한 유저들의 배열
  },
  { collection: 'events', versionKey: false, timestamps: true }
);

module.exports = mongoose.model('Event', eventSchema);