const express = require('express');
const router = express.Router();
const multer = require('multer');
const config = require('../config');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
const path = require('path');

const Upload = require('../models/Upload');

const s3 = new aws.S3({
  accessKeyId: config.AWS_ACCESS_KEY_ID,
  secretAccessKey: config.AWS_SECRET_ACCESS_KEY_ID,
  region: 'ap-northeast-2',
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'surfesta2',
    key: function (req, file, cb) {
      const extension = path.extname(file.originalname);
      const basename = path.basename(file.originalname, extension);
      cb(null, `event-thumbnails/${basename}-${Date.now()}${extension}`);
    },
    acl: 'public-read-write',
  }),
});

router.post('/', upload.any(), (req, res, next) => {
  const upload = new Upload(req.body);
  upload.save((err) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json({ filePath: req.files[0].location });
  });
});

module.exports = router;
