const mongoose = require('mongoose');

const eventSchema = mongoose.Schema(
  {
    isOpen: Boolean,
    title: String,
    host: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    event_date: {
      type: Object,
      default: Date.now,
    },
    thumbnail: String,
    content: String,
    isOnline: Boolean,
    online_platform: String,
    location: {
      type: Object,
    },
    price: { type: Number, default: 0 }, // 입장료
    max_count: { type: Number, default: 0 }, // 참석 가능 인원수
    cur_count: { type: Number, default: 0 }, // 참석 인원
    like_count: Number,
    enlisted_users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ], // 해당 이벤트 참여신청을 한 유저들의 배열
    liked_users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ], // 해당 이벤트를 좋아요한 유저들의 배열
  },
  { collection: 'events', versionKey: false, timestamps: true }
);

module.exports = mongoose.model('Event', eventSchema);
