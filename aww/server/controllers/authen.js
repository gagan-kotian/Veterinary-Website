const User = require("../models/hospital");
const bcrypt = require("bcrypt");

async function register(req, res) {
  try {
    const { hospitalname, username, address, email, password } = req.body;

    // Check if a user with the same username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already in use" });
    }

    // Check if a user with the same email already exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: "Email already in use" });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    const newUser = new User({
      hospitalname,
      username,
      address,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // Registration successful
    return res.status(201).json("Registration successful");
  } catch (error) {
    console.error("Registration error:", error);
    return res
      .status(500)
      .json("An error occurred during registration. Please try again later.");
  }
}

module.exports = register;
