const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const port = process.env.MONGO_URI || 5000;
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();
const config = require('./config');
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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
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
