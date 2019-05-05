const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
  name: {
    type: String
  },
  location:{
    type:String
  },
  monthly: {
    type: Number
  },
  description: {
    type: String
  },
  matchType:{
    type: String
  }
});

const Listing = mongoose.model('Listing', ListingSchema);
module.exports = Listing;
