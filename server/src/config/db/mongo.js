const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/cashbackedu");
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Unable to connect MongoDB:", error);
  }
}

module.exports = { connect };
