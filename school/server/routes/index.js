const express = require('express');
const Message = require('../models/Message');
const User = require('../models/User');
const Profile = require('../models/Profile');
const passport = require('passport');
const router = express.Router();


router.post('/', (req, res) => {
    res.json({error:"Is not working"})
});

router.get('/',(req,res) => {
  res.json(req.sessionID)
});

router.post('/register', (req,res) => {
  if(req.body.username && req.body.password){
  const newUser = new User({
    username:req.body.username,
    password:req.body.password
  });
  newUser.save(function(err) {
    if(err){
      return console.log(err);
    }else {
      res.json(newUser);
    };
  });
}else{
  res.status(400);
  res.json({error:"Empty fields"})
}
});


router.post('/login', (req, res, next) => {
  console.log(req.body);
  passport.authenticate('local', (err, user, info) => {
    req.login(user, (err) => {
    if(err){
      res.status(401);
      res.json({error:"failed log in"});
    }else{
      res.json(user);
    }
    })
  })(req,res,next);
})

router.delete('/',(req,res) => {
  Message.remove({}, (err,messages)=> {
    if(err){
      console.log(err);
    }else{
      console.log(Message.find({},(err,messages) => console.log(messages)));
      res.json({succes:"Succesfully deleted all records"})
    }
  })
});


module.exports = router;
