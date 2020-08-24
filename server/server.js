const express = require('express');
const cors = require('cors');
const port = process.env.MONGO_URI || 5000;

const app = express();
const config = require('./config');

app.get('/', (req, res) => {
  res.send(`<h1>Hello World test</h1>`);
});

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

app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});
