const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const PORT = 8000
const passport = require("passport");
const session = require("express-session");
const mainRoutes = require('./routes/main');
const ExamRoutes = require('./routes/exams');
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
const flash = require("express-flash");
const connectDB = require("./config/database");
require('dotenv').config({path: '../.env'})


// Passport config
require("./config/passport")(passport);

app.use(logger('dev'));
app.use(cors({
  origin: (origin, callback) => callback(null, true),
  credentials: true
}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Connect To Database
connectDB();
//Static Folder
app.use(express.static("../client/build"));

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

app.use("/", mainRoutes);
app.use("/api/exams", ExamRoutes);

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
// app.get("/api",(req,res)=>{
//   res.send("API WORKING")
// })

app.listen(process.env.PORT||PORT, ()=>{
  console.log(`running on port ${PORT}`)
})