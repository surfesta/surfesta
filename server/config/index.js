const dotenv = require('dotenv');

dotenv.config();
module.exports = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT,
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY_ID: process.env.AWS_SECRET_ACCESS_KEY_ID,
};
