const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const port = process.env.MONGO_URI || 5000;
const cookieParser = require('cookie-parser');

const app = express();
const config = require('./config');

app.get('/', (req, res) => {
  res.send(`<h1>Hello World test</h1>`);
});
const userRouter = require('./routes/users');
const eventRouter = require('./routes/events');

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
});

app.use(cors());
app.use(express.json());
app.use(fileUpload());

app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/uploads/${file.md5}`, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }

    res.json({
      fileName: file.name,
      filePath: `/uploads/${file.md5}`,
    });
  });
});

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send(`<h1>Hello World test</h1>`);
});
app.use('/api/v1/users', userRouter);
app.use('/api/v1/events', eventRouter);

app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});
