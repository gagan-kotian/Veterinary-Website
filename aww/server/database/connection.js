const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://Sahisk1010:sahilsk1010@cluster0.zt7oku9.mongodb.net/hospitaldb",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Database connection successful");
  } catch (error) {
    console.error("Database connection error:", error);
  }
}

module.exports = connect;
