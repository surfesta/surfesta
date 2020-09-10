const mongoose = require('mongoose');

const uploadSchema = mongoose.Schema(
  {
    filePath: String,
  },
  { collection: 'uploads', versionKey: false, timestamps: true }
);

module.exports = mongoose.model('Upload', uploadSchema);
