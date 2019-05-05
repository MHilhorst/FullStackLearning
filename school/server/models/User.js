const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Userschema = new Schema({
  username: {
      type: String,
      index: {
        unique: true
      }
    },
    password: {
      type: String
    },
  preference:{
      type: Schema.Types.ObjectId,
      ref: 'Profile'
  }
});

const User = mongoose.model('User', Userschema);
module.exports = User;


module.exports.getUserByUsername = function(username, callback){
  const query = { username };
  User.findOne(query,callback);
};

module.exports.getUserById = function(id,callback){
  const id = { _id };
  User.findOne(query,callback);
}
