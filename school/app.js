const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const registration = require('./routes/registration');
const login = require('./routes/login');
const mongoose = require('mongoose');
const sendMessage = require('./routes/sendMessage');
const passport = require('passport-local');
const app = express();

app.use(bodyParser.json());

app.configure(function() {
  app.use(express.static('public'));
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.session({ secret: 'keyboard cat' }));
  app.use(passport.initialize());
  app.use(passport.session());
});


const db = require('./config/keys').mongoURI;

mongoose
  .connect(db)
  .then(()=>console.log('Connected to database'))
  .catch(err => console.log(err));

app.use('/registration', registration)
app.use('/login', login)
app.use('/message', sendMessage)

const port = process.env.PORT || 5000;

app.listen(port,() => console.log(`Server running on port ${port}`))
