const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  hospitalname: {
    type: String,
  },
  username: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  otp: {
    type: String, // You can change the type to whatever is suitable for your OTP implementation
    default: null, // Initialize it to null by default
  },
});

module.exports = mongoose.model("User", UserSchema);
