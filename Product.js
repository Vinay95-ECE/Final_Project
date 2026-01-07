const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  type: String, // seed | fertilizer
  name: String,
  price: Number,
  description: String
});

module.exports = mongoose.model("Product", productSchema);