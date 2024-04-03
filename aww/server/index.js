const express = require("express");
const app = express();
const connect = require("./database/connection");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const otpRoutes = require("./routes/otp");
const staff = require("./routes/staff");
const cors = require("cors");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// Database connection
connect();

// Root route
app.get("/", (req, res) => {
  res.json("Sorry");
});

// Authentication routes
app.use("/api/auth", authRoutes);

// OTP routes
app.use("/", otpRoutes);
app.use("/staff", staff);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
