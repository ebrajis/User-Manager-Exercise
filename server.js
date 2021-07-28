const express = require('express');
const cors = require('cors');
require('dotenv').config();
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

// MiddleWare
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_CONNECT_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log('You are connect to MongoDb');
  })
  .catch((err) => console.error(err.message));
