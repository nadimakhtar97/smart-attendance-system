var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'fdsasjljkffdsivxcaxclk$@^RQA#$#$%*$$@!%$#^$%&(*&^%$ERGHTREDJUREDC';


mongoose.connect('mongodb://localhost:27017/node-auth');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.post('/api/login', async (req, res) => {

  const { username, password } = req.body

  const user = await User.findOne({ username })
  console.log(user);

  if (!user) {
    return res.json({ status: 'error', error: 'Invalid username/password' })
  }

  if (await bcrypt.compare(password, user.password)) {

    const token = jwt.sign({
      id: user._id, username: user.username
    }, JWT_SECRET)

    return res.json({ status: 'ok', data: token })
  }


  return res.json({ status: 'error', error: 'Invalid username/password' });

})

app.post('/api/register', async (req, res) => {

  //Hashing the password

  const { username, password: plainTextPassowrd } = req.body;

  if (!username || typeof username !== 'string') {

    return res.json({ status: 'error', error: 'Invalid username' })

  }

  if (!plainTextPassowrd || typeof plainTextPassowrd !== 'string') {

    return res.json({ status: 'error', error: 'Invalid password' })

  }

  if (plainTextPassowrd.length < 5) {
    return res.json({ status: 'error', error: 'password too small. Atleast should be character' })
  }

  console.log(plainTextPassowrd);
  const password = await bcrypt.hash(plainTextPassowrd, 10);
  console.log(await bcrypt.hash(password, 10));

  try {

    const response = await User.create({
      username,
      password
    })
    console.log('User created successfully', response);
  }
  catch (error) {

    if (error.code === 11000) {
      return res.json({ status: 'error', error: 'User name already in use' })
    }
    throw error
  }

  res.json({ status: "ok" })
})

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
