const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userreg = require('./routes/api/userreg');
const session = require('express-session');
const userlog = require('./routes/api/userlog');

const app = express();

app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false
}));

app.use(bodyParser.json());
// DB Config
const db = require('./config/keys').mongoURI;
// Connect to mongo
mongoose
  .connect(db)
  .then(()=>console.log('Connected to database'))
  .catch(err => console.log(err));

app.use('/registration', userreg)
app.use('/login',userlog)

const port = process.env.PORT || 5000;

app.listen(port,() => console.log(`Server running on port ${port}`))


// Bodyparser Middleware
