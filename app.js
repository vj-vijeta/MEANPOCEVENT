var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var emitter = require('./emitter');

emitter.on('purchaseSuccess', function(purchase) {
  console.log('Purchase success');

  // Do something with purchase
});

emitter.on('pgEvent', function(req) {
    // Do Something with req object 
});

emitter.on('pgUser', function(req) {
    // Do Something with req object 
});

emitter.on('twitterRequestToken', function(requestToken, requestSecret){
    // Do Something with requestToken and requestSecret
});

emitter.on('twitterCallback', function(query){
    // Do Something with query object
});

emitter.on('twitterAccessToken', function(accessToken, accessSecret){
    // Do Something with req object
});

emitter.on('twitterSuccessFulLogin', function(user){
    // Do Something with user object
});

var mongoose = require('mongoose');
console.log("connecting mongo")
mongoose.connect('mongodb://poc:poc@ds153815.mlab.com:53815/userevent');

var routes = require('./routes/index');
var api = require('./routes/api');
var pg = require('./routes/pg');

var app = express();

// Setting app.locals

app.locals.apiUrls = {
  user: 'http://37.247.116.155:8000/pg/api',
  userHost: '37.247.116.155:8000',
  event: 'http://104.237.2.155:3020/api',
  eventHost: '104.237.2.155:3020',
  pgEvent: 'http://37.247.116.155:8000/pg/api'
};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('ejs-locals'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));

app.use('/api', api);
app.use('/pg/api', pg);
app.use('/', routes);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
