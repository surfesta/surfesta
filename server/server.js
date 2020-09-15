const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const config = require('./config');
const port = config.PORT || 5000;
const prerender = require('prerender-node');

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
app.use(prerender.blacklisted(['/search', '/event', '/']));
app.use('/api/v1', api);

app.listen(port, () => {
  console.log(process.env.NODE_ENV);
  console.log(`Server Listening on ${port}`);
});
