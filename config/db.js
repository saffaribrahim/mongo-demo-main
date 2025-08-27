const mongoose = require("mongoose");
const colors = require("colors");

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://saffaribrahim:<db_password>@cluster0.6utvasg.mongodb.net/"
    );

    console.log("Connected to MongoDB...".green.bold);
  } catch (error) {
    console.error("Error connecting to MongoDB:".red.bold, error);
  }
}

module.exports = connectDB;