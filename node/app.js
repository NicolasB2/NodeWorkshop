var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/product');

const db = require('./config/mongoose')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/product', productRouter); 

/*
app.get('/helloapp', (req, res) => 
  res.send('hello app url')
);

app.route("/product")
    .get((req, res) => 
    res.send('product get'))
    .post((req,res)=> 
    res.send('product create'))
    .put((req,res)=> 
    res.send('product update')
);

app.user("/products/:id",(req,res) =>
  res.send(req.params)
);

app.get('/apiusers', (req, res) => 
  res.send('apiUsers app url')
);

app.use('/product', productRouter);
*/
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
