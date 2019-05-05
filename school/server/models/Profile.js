const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  age: {
    type: Number
  },
  music:{
    type:String
  },
  location: {
    type: String
  },
  description: {
    type: String
  }
});

const Profile = mongoose.model('Profile', ProfileSchema);
module.exports = Profile;
