const express = require("express");
const router = express.Router();
const User = require("../models/hospital");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { login, verifyUser } = require("../controllers/login");

// Middleware to verify and decode the token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json("Unauthorized: Token missing");
  }

  jwt.verify(token, "secretkey", (err, decoded) => {
    if (err) {
      return res.status(401).json("Unauthorized: Invalid token");
    }
    req.user = decoded;
    next();
  });
};

// Registration route
router.post("/register", async (req, res) => {
  try {
    const { username, address, email, password } = req.body;

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
});

router.route("/login").post(verifyUser, login);

router.get("/:id", (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(404).json("No User");
  }
  User.findOne({ _id: id }).then((user) => {
    if (!user) {
      return res.status(400).json("Sorry No user");
    }
    return res.status(200).json(user);
  });
});

const midd = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const decodedToken = await jwt.verify(token.split(" ")[1], "secretkey");
    req.user = decodedToken;
    next();
  } catch (err) {
    console.error("Middleware error:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const update = async (req, res) => {
  try {
    const userEmail = req.body.email; // Get the email from the request body
    const newPassword = req.body.password; // Get the new password from the request body

    // Update the user's password using the email
    await User.updateOne({ email: userEmail }, { password: newPassword });

    return res.status(200).json({ message: "Password updated successfully" });
  } catch (err) {
    console.error("Update error:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

router.route("/update").put(midd, update);

const generateotp = (req, res) => {
  res.status(200).json("hi");
};

router.route("/update").get(generateotp);

module.exports = router;
