const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  farmerPhone: String,
  itemId: mongoose.Schema.Types.ObjectId,
  status: { type: String, default: "Booked" },
  location: {
    lat: Number,
    lng: Number
  }
});

module.exports = mongoose.model("Booking", bookingSchema);