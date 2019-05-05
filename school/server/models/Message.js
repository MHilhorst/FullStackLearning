const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MessageSchema = new Schema({
  name: String,
  bedrag: Number
  });

const Message = mongoose.model('Message', MessageSchema)

module.exports = Message;
