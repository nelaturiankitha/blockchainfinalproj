var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const cors = require('cors');
const axios = require('axios');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  app.post('/', async (req, res) => {
    const name = req.body.name;
  
    try {
      // Fetch a random quote from the Zen Quotes API
      const response = await axios.get('https://zenquotes.io/api/random');
      const quote = response.data[0].q; // Assuming the quote is stored in the 'q' property
  
      res.render('index', { name, quote });
    } catch (error) {
      console.error('Error fetching quote:', error);
      res.render('index', { name });
    }
  });

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
