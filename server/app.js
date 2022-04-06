const createError = require('http-errors');
const cors = require('cors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const json2xls = require('json2xls');
const studentsRouter = require('./routes/students');
const faceRecognitionRouter = require('./routes/faceRecognition')
const dbRouter = require('./routes/database')
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/Teacher');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'fdsasjljkffdsivxcaxclk$@^RQA#$#$%*$$@!%$#^$%&(*&^%$ERGHTREDJUREDC';


var app = express();
app.use(cors());
mongoose.connect('mongodb://localhost:27017/sas');

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended:false}));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(json2xls.middleware);

// app.use('/', indexRouter);
app.use('/student', studentsRouter);
app.use('/face', faceRecognitionRouter);
app.use('/db',dbRouter)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
