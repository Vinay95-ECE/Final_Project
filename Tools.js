const mongoose = require("mongoose");
//tool section
const toolSchema = new mongoose.Schema({
  ownerPhone: String,
  name: String,
  rentPerHour: Number,
  rentPerDay: Number,
  specs: String
});


module.exports = mongoose.model("Tool", toolSchema);
