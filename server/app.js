var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var db = require("./model/db");
var routes = require('./routes/index');
var adminRest = require('./routes/REST_Admin_API');
var userRest = require('./routes/REST_Users_API');

var expressJwt = require('express-jwt');

var app = express();

//We can skip Authentication from our Unit Tests, but NEVER in production
if (process.env.NODE_ENV || typeof global.SKIP_AUTHENTICATION == "undefined") {
// Protected Routes (via /api routes with JWT)
  app.use('/userApi', expressJwt({secret: require("./security/secrets").secretTokenUser}));
  app.use('/adminApi', expressJwt({secret: require("./security/secrets").secretTokenAdmin}));
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.locals.pretty = true;

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../public/app')));

app.use('/', routes);
app.use('/adminApi', adminRest);
app.use('/userApi', userRest);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
