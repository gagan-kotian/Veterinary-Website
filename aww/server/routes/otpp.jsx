const otpgenerator = require("otpgenerator");
const nodemailer = require("nodemailer");
const User = require("../models/hospital"); // Import your User model
const OTPModel = require("./models/otp"); // Import your OTP model

// Configure Nodemailer for sending emails
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "gagankotian48@gmail.com", // Your Gmail email address
    pass: "yourpassword", // Your Gmail password
  },
});

// Generate and send OTP via email
const generateOTP = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if the user with the provided email exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Generate OTP logic here
    const otp = otpgenerator.generate(5, {
      upperCase: false,
      specialChars: false,
    });

    // Store OTP in the database along with user ID and expiration timestamp
    const otpRecord = new OTPModel({
      userId: user._id,
      otp,
      expiresAt: new Date(Date.now() + OTP_EXPIRATION_DURATION), // Set expiration time
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
        return res.status(200).json({ code: "OTP sent via email" });
      }
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Verify OTP
const verifyOTP = async (req, res) => {
  const { otp } = req.body;

  try {
    // Find the OTP record in the database based on user ID and expiration time
    const otpRecord = await OTPModel.findOne({
      userId: user._id, // Assuming you have a user object
      otp,
      expiresAt: { $gt: Date.now() }, // Check if it's not expired
    });

    if (otpRecord) {
      // Clear the OTP record from the database
      await otpRecord.remove();

      // Set a "verified" flag in the user's account, if needed
      // ...

      res.status(200).json({ message: "OTP is correct" });
    } else {
      res.status(400).json({ message: "Invalid OTP" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  generateOTP,
  verifyOTP,
};

// Generate OTP route
// const generateOTP = async (req, res) => {
//   try {
//     const { email } = req.body; // Extract email from request body

//     // Check if the user with the provided email exists
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     // Generate OTP logic here
//     const otp = otpgenerator.generate(5, {
//       upperCase: false,
//       specialChars: false,
//     });

//     // Update the user's record in the database with the new OTP
//     user.otp = otp; // Assuming you have a field 'otp' in your user schema
//     await user.save();

//     const mailOptions = {
//       from: "gagankotian48@gmail.com", // Sender email address
//       to: req.body.email, // Recipient email address
//       subject: "Your OTP Code",
//       text: `Your OTP code is: ${otp}`, // Use backticks for the template literal
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error(error);
//         return res.status(500).json({ error: "Failed to send OTP via email" });
//       } else {
//         console.log("Email sent: " + info.response);
//         res.json({ code: "OTP sent via email" });
//       }
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };
// // Verify OTP route (Change it to accept data in the request body)

// // const verifyOTP = async (req, res) => {
// //   console.log("Heloooo");
// //   try {
// //     const { otp } = req.body; // Extract email and OTP from the request body

// //     // Query the user record from the database based on the provided email
// //     const user = await User.findOne({ otp });
// //     console.log(user.otp);
// //     console.log(otp);
// //     // Compare the OTP from the frontend with the OTP stored in the user's record
// //     if (user.otp === otp) {
// //       // OTPs match, delete the OTP from the user's record
// //       user.otp = null; // Assuming you store OTP as a field in the user schema
// //       await user.save(); // Save the updated user record

// //       // Return a success response
// //       return res.status(200).json("OTP is correct");
// //     } else {
// //       // Invalid OTP, return an error response
// //       return res.status(400).json("Invalid OTP");
// //     }
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).json({ error: "Internal Server Error" });
// //   }
// // };

// const verifyOTP = async (req, res) => {
//   const { otp } = req.body.otp; // Retrieve OTP from the request body
//   if (parseInt(req.app.locals.OTP) === parseInt(otp)) {
//     req.app.locals.OTP = null;
//     req.app.locals.reset = true;
//     return res.status(200).json("OTP is correct");
//   }
//   return res.status(400).json("Invalid OTP");
// };

// // Reset password route
// const resetPassword = async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     if (!req.app.locals.reset) return res.status(440).json("Session Expired");

//     const user = await User.findOne({ username });

//     if (!user) {
//       return res.status(400).json("User does not exist");
//     }

//     // Hash the new password and update the user's password
//     const hashedPassword = await bcrypt.hash(password, 10);
//     await User.updateOne(
//       { username: user.username },
//       { password: hashedPassword }
//     );

//     return res.status(200).json("Password reset successful");
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json("An error occurred during password reset");
//   }
// };
