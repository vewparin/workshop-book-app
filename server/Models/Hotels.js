const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: String,
  rooms: Number,
  price: Number,
  description: String,
  available: Boolean,
  file:{
    type:String,
    default: 'nopicture.jpg'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true });

module.exports = mongoose.model('Hotel', hotelSchema);
