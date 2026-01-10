const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  type: String, // seed | fertilizer section
  name: String,
  price: Number,
  description: String
});


module.exports = mongoose.model("Product", productSchema);
