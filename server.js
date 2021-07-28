const express = require('express');
const cors = require('cors');
require('dotenv').config();
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const userRoutes = require('./server/routes/UserRoutes');

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

//Our routes

app.use('/', userRoutes);

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
