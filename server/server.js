const express = require('express');
const cors = require('cors');
// const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const config = require('./config');
const port = 5000;
// const multer = require('multer');
// const aws = require('aws-sdk');
// const multerS3 = require('multer-s3');
// const path = require('path');

// const s3 = new aws.S3({
//   accessKeyId: config.AWS_ACCESS_KEY_ID,
//   secretAccessKey: config.AWS_SECRET_ACCESS_KEY_ID,
//   region: 'ap-northeast-2',
// });
// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: 'surfesta',
//     key: function (req, file, cb) {
//       const extension = path.extname(file.originalname);
//       const basename = path.basename(file.originalname, extension);
//       cb(null, `eventThumbnails/${basename}-${Date.now()}${extension}`);
//     },
//     acl: 'public-read-write',
//   }),
// });

const mongoose = require('mongoose');
const db = mongoose.connection;

db.on('error', console.error);
db.once('open', () => {
  console.log('Connect to mongo server');
});

mongoose.connect(config.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const api = require('./api');
const app = express();

app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);
app.use(helmet());
app.use(morgan('tiny'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/v1', api);

// app.post('/uploads', upload.any(), (req, res, next) => {
//   console.log(res);
// });

app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});
