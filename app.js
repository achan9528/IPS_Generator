let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let cors = require('cors');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let clientsRouter = require('./routes/client.routes');
let portfoliosRouter = require('./routes/portfolio.routes');
let allocationsRouter = require('./routes/allocation.routes');

let app = express();

// connect to database
require('./config/mongoose.config')

// CORS
app.use(cors({
  origin:[`${process.env.CORS_ALLOWED_ORIGINS}`],
  credentials: true
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/users', usersRouter);
app.use('/api/clients', clientsRouter);
app.use('/api/portfolios', portfoliosRouter);
app.use('/api/allocations', allocationsRouter);

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
