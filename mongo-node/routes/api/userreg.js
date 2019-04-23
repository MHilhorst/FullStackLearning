const express = require('express');
const router = express.Router();

// Bring in User model
const User = require('../../models/User');

router.get('/', (req,res) => {
   User.find() // Returns promise
   .then(user => res.json(user));
});

router.post('/', (req,res,next) => {

    if (req.body.email && req.body.password){
      var newUser = {
        email: req.body.email,
        password: req.body.password
      };
      User.create(newUser,(err,user) => {
        if(err){
          console.log(err);
          return next(err);
        }else {
          return res.json(user);
        }
      });
    }
});

module.exports = router;
