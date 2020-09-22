const express = require("express");
const router = express.Router();
const multer = require("multer");
const config = require("../config");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const path = require("path");

const Upload = require("../models/Upload");

const s3 = new aws.S3({
  accessKeyId: config.AWS_ACCESS_KEY_ID,
  secretAccessKey: config.AWS_SECRET_ACCESS_KEY_ID,
  region: "ap-northeast-2",
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "surfesta2",
    key: function (req, file, cb) {
      const extension = path.extname(file.originalname);
      // const basename = path.basename(file.originalname, extension);
      cb(null, `event-thumbnails/${Date.now()}${extension}`);
    },
    acl: "public-read-write",
  }),
});

router.post("/", upload.any(), (req, res, next) => {
  const upload = new Upload(req.body);
  upload.save((err) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json({ filePath: req.files[0].location });
  });
});
// ****** 밑에 주석 절대로 지우지마세요! ****** S3 오브젝트 삭제 로직입니다. 필요시 주석 풀고 실행시키면 유저와 이벤트가 가지고 있는 이미지 경로 다 긁어온다음 합치고 S3에 올라와있는 객체와 비교한후 쓰이지 않는 객체들을 모두 배열에 담아 한번에 지웁니다.
// const axios = require("axios");
// const USER_URI = `http://localhost:5000/api/v1/users`;
// const EVENT_URI = `http://localhost:5000/api/v1/events`;
// const params = {
//   Bucket: "surfesta2",
// };
// const prefix = "https://surfesta2.s3.ap-northeast-2.amazonaws.com";
// s3.listObjects(params, async function (err, data) {
//   if (err) console.log(err, err.stack);
//   // an error occurred
//   else {
//     const CUR_S3_KEY = data.Contents.map((item) => item.Key);
//     const users = await axios.get(USER_URI);
//     const events = await axios.get(EVENT_URI);
//     const profilePath = users.data.map((user) => user.profile_img);
//     const thumbnail = events.data.map((event) => event.thumbnail);
//     const imgPath = profilePath.concat(thumbnail);
//     const filter_S3 = CUR_S3_KEY.filter((item, i) => {
//       if (i === 0) return;
//       return !imgPath.includes(`${prefix}/${item}`);
//     });
//     let delObj = [];
//     filter_S3.forEach((item) => {
//       delObj = [...delObj, { Key: item }];
//     });
//     console.log(delObj);
//     const params = {
//       Bucket: "surfesta2",
//       Delete: {
//         Objects: delObj,
//       },
//     };
//     s3.deleteObjects(params, function (err, data) {
//       if (err) console.log(err, err.stack);
//       else console.log(data);
//     });
//   }
// });

module.exports = router;
