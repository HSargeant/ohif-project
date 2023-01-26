const createError = require('http-errors');
const express = require('express');
const path = require('path');
// const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const PORT = 8000
const passport = require("passport");
const session = require("express-session");
const mainRoutes = require('./routes/main');
const dashboardRoutes = require('./routes/dashboard');
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
const flash = require("express-flash");
const connectDB = require("./config/database");
require('dotenv').config({path: './.env'})
const app = express();

app.use(logger('dev'));
app.use(cors({
  origin: (origin, callback) => callback(null, true),
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

//Connect To Database
connectDB();
app.set("view engine", "ejs");
//Static Folder
app.use(express.static("client/build"));

// Setup Sessions - stored in MongoDB
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({mongoUrl: process.env.MONGO_URL})
}))

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Use flash messages for errors, info, ect...
app.use(flash());


//Use forms for put / delete
app.use(methodOverride("_method"));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


app.use("/", mainRoutes);
app.use("/api/dashboard", dashboardRoutes);


// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
app.listen(process.env.PORT||PORT, ()=>{
  console.log(`running on port ${PORT}`)
})

module.exports = app;
