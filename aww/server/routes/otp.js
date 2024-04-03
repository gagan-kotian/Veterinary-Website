const express = require("express");
const router = express.Router();
const otpgenerator = require("otp-generator");
const nodemailer = require("nodemailer");
const OTPModel = require("../models/otpmodel");
const User = require("../models/hospital");
const bcrypt = require("bcrypt"); // Import your simplified OTP model

// Configure Nodemailer for sending emails
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "gagankotian4@gmail.com", // Your Gmail email address
    pass: "ynre zfps cxod esqd", // Use the App Password you generated
  },
});

// Generate and send OTP via email
const generateOTP = async (req, res) => {
  try {
    const { email } = req.body;

    // Generate OTP logic here
    const otp = otpgenerator.generate(5, {
      upperCase: false,
      specialChars: false,
    });

    // Store OTP in the database
    const otpRecord = new OTPModel({
      otp,
    });
    await otpRecord.save();

    // Send OTP via email
    const mailOptions = {
      from: "gagankotian48@gmail.com", // Sender email address
      to: email, // Recipient email address
      subject: "Your OTP Code",
      text: `Your OTP code is: ${otp}`, // Use backticks for the template literal
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to send OTP via email" });
      } else {
        console.log("Email sent: " + info.response);
        res.json({ code: "OTP sent via email" });
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Verify OTP
const verifyOTP = async (req, res) => {
  const { otp } = req.body;
  console.log("Hello");
  console.log(otp);

  try {
    // Check if the OTP exists in the database
    const otpRecord = await OTPModel.findOne({ otp });
    console.log(otp);
    console.log(otpRecord);

    if (otpRecord) {
      // OTP exists in the database, remove it (optional)
      // await otpRecord.remove();

      // Set a "verified" flag, send success response, or perform other actions
      // ...

      return res.status(200).json({ message: "OTP is correct" });
    } else {
      return res.status(400).json({ message: "Invalid OTP" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const resetpassword = (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email);
    console.log(password); // Change username to email
    // if (!req.app.locals.reset) return res.status(440).json("Session Expired");
    User.findOne({ email }) // Change username to email
      .then((user) => {
        if (!user) {
          return res.status(400).json("User does not exist");
        }
        bcrypt.hash(password, 10).then((hashedpassword) => {
          User.updateOne(
            { email: user.email }, // Change username to email
            { password: hashedpassword }
          )
            .then((data) => {
              res.status(200).json(data);
            })
            .catch((err) => {
              console.log(err);
            });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    res.status(400).json("Sorry");
  }
};

router.put("/reset", resetpassword);
router.post("/generateotp", generateOTP);
router.post("/verifyotp", verifyOTP);

module.exports = router;
