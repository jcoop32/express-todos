//dependancies being assigned to variables
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//router modules
const indexRouter = require('./routes/index');
const { time } = require('console');
todosRouter = require('./routes/todos');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//middleware mounted

//mount middleware into the middleware/request pipeline 
//app.use(optional-[starts with path]<middleware function> [, <middleware function>])

app.use(function(req, res, next){
  // console.log('Hello')
  res.locals.time = new Date().toLocaleTimeString()
  console.log(res.locals.time);
  next();
})


//logs in the terminal the HTTP request info
app.use(logger('dev'));
//Processes data sent in the body of the request, if it is JSON
app.use(express.json());
//Processes data sent in 'form' body of the request
//it will create a property on req.body for each <input>, <select> and/or <textarea> in the <form>
app.use(express.urlencoded({ extended: false }));
//add a cookies property for each cookie sent in the request
app.use(cookieParser());
//if the request is for a static asset, returns the file
app.use(express.static(path.join(__dirname, 'public')));

//router middleware mounted
//the first arg is the 'starts with' path
//the paths within the route modules are combined to the 'starts with' path
app.use('/', indexRouter);
app.use('/todos', todosRouter);

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
