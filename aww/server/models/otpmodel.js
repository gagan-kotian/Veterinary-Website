const mongoose = require("mongoose");

// Define the simplified OTP schema
const otpSchema = new mongoose.Schema({
  otp: {
    type: String,
    required: true,
  },
});

// Create the simplified OTP model
const OTPModel = mongoose.model("OTP", otpSchema);

module.exports = OTPModel;
