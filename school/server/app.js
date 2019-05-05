const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User');

const app = express();
const mongoDB = require('./config/keys').mongoURI;

mongoose.connect(mongoDB,(err)=> {
  if(err){
    console.log(err);
  }else{
    console.log(`all good No errors, connected to ${mongoDB}`);
  }
});

const db = mongoose.connection;

passport.use(new LocalStrategy(function(username,password,done){
  User.getUserByUsername(username, function(err,user) {
    if(err) throw err;
    if(!user){
      return done(null, false, {message:"unknow user"});
    }
    if(password === user.password){
      return done(null, user);
    }else{
      return done(null,false, {message:"Invalid password"});
    }
  })
}))

passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        done(err, user);
    });
});

app.use(cookieParser());
app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', require('./routes/index'));
app.use('/api/listings', require('./routes/listing'));

const PORT = process.env.PORT || 5000;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, console.log(`running on port ${PORT}`));
