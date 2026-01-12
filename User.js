const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  phone: String,
  role: {
    type: String,
    enum: ["farmer", "owner", "admin"]
  }
});

module.exports = mongoose.model("User", userSchema);
