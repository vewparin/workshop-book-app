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
  image: {
    data: Buffer,
    contentType: String
  },
  bookings: [{
    checkIn: Date,
    checkOut: Date,
    guests: Number,
    price: Number
  }],
  standardPrice: Number,
  discountPrice: Number,
  promotionStartDate: Date,
  promotionEndDate: Date,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true });

module.exports = mongoose.model('Hotel', hotelSchema);
