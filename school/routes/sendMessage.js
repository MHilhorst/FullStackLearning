const express = require('express');

const router = express.Router();
const Message = require('../models/Message')



router.post('/send', (req, res) => {
  var message = new Message(req.body);
  message.save((err) =>{
    if(err)
      sendStatus(500);
    res.sendStatus(200);
  });
});



module.exports = router;
