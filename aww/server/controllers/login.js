const User = require("../models/hospital");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const verifyUser = async (req, res, next) => {
  try {
    const { username } = req.method === "GET" ? req.query : req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ error: "User does not exist" });
    }

    const checkPassword = bcrypt.compareSync(password, user.password);

    if (!checkPassword) {
      return res.status(400).json({ error: "Wrong Password" });
    }

    const token = jwt.sign({ id: user._id }, "secretkey");
    res.json(token);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Some glitch");
  }
};

module.exports = {
  verifyUser,
  login,
};
